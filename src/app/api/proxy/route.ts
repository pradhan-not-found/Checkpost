import { NextResponse } from 'next/server';
import { callProvider } from '@/lib/llm';
import { getDb, saveDb, updateAgentUsage, incrementAgentBlocked } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    let { prompt, agentId, userId = 'admin' } = reqBody;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const db = await getDb();
    
    // Attempt to identify the agent via the Authorization Bearer Token
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];
    
    let actualAgentId = agentId;
    let agent = db.agents[actualAgentId];

    if (!agent && token) {
      const foundEntry = Object.entries(db.agents).find(([id, a]: [string, any]) => a.proxy_api_key === token);
      if (foundEntry) {
        actualAgentId = foundEntry[0];
        agent = foundEntry[1];
        agentId = actualAgentId; // Reassign so subsequent logs use the correctly identified ID
      }
    }

    if (!agent) {
      return NextResponse.json({ error: 'Unknown agent ID or invalid API Key' }, { status: 400 });
    }
    
    const policyId = agent.policyId || 'default';
    const policy = db.policyProfiles?.[policyId] || db.policyProfiles?.['default'] || { maxTokens: 100000, maxSpend: 50 };

    // 1. FIREWALL RULES CHECK (Security First)
    let blockedReason = null;
    if (policy.rules && Array.isArray(policy.rules)) {
      const promptLower = prompt.toLowerCase();
      
      if (policy.rules.includes('Prompt Injection Guard')) {
        if (promptLower.includes('ignore previous') || promptLower.includes('jailbreak') || promptLower.includes('dan mode')) {
          blockedReason = 'Prompt Injection Guard';
        }
      }
      
      if (!blockedReason && policy.rules.includes('Block PII Exfiltration')) {
        const ssnRegex = /\b\d{3}-\d{2}-\d{4}\b/;
        const ccRegex = /\b(?:\d{4}[ -]?){3}\d{4}\b/;
        if (ssnRegex.test(prompt) || ccRegex.test(prompt)) {
          blockedReason = 'PII Exfiltration (SSN/CC detected)';
        }
      }

      if (!blockedReason && policy.rules.includes('Food & Beverage Only')) {
        const offTopicKeywords = ['python', 'code', 'javascript', 'html', 'css', 'math', 'calculate', 'a+b', 'solve', 'how to program'];
        if (offTopicKeywords.some(kw => promptLower.includes(kw))) {
          blockedReason = 'Domain Guardrail: Stick to food ordering and restaurant inquiries.';
        }
      }
      
      if (!blockedReason && policy.rules.includes('E-Commerce & Retail Only')) {
        const offTopicKeywords = ['python', 'code', 'javascript', 'math', 'calculate', 'a+b', 'solve', 'medical', 'symptoms', 'recipe'];
        if (offTopicKeywords.some(kw => promptLower.includes(kw))) {
          blockedReason = 'Domain Guardrail: Stick to shopping and e-commerce inquiries.';
        }
      }

      if (!blockedReason && policy.rules.includes('Healthcare & Medical Only')) {
        const offTopicKeywords = ['python', 'code', 'buy', 'shop', 'cart', 'math', 'a+b', 'recipe'];
        if (offTopicKeywords.some(kw => promptLower.includes(kw))) {
          blockedReason = 'Domain Guardrail: Stick to medical and healthcare inquiries.';
        }
      }

      if (!blockedReason && policy.rules.includes('IT Helpdesk Only')) {
        const offTopicKeywords = ['buy', 'shop', 'food', 'recipe', 'medical', 'symptoms', 'math', 'a+b'];
        if (offTopicKeywords.some(kw => promptLower.includes(kw))) {
          blockedReason = 'Domain Guardrail: Stick to IT support and troubleshooting.';
        }
      }
    }

    if (blockedReason) {
      const queueItem = {
        id: crypto.randomUUID(),
        agentId,
        agentName: agent.name,
        action: 'execute_prompt',
        policy: blockedReason,
        time: new Date().toISOString(),
        prompt
      };
      db.queue.unshift(queueItem);
      await saveDb(db);
      await incrementAgentBlocked(agentId);

      return NextResponse.json({ 
        status: 'blocked', 
        error: `Agent blocked by Checkpost Firewall. Policy triggered: ${blockedReason}` 
      }, { status: 403 });
    }

    // 2. BLAST RADIUS CHECK (Quota limits)
    const currentSpend = agent.totalSpend || 0;
    const currentTokens = agent.totalTokens || 0;
    const maxSpend = policy.maxSpend || 50;
    const maxTokens = policy.maxTokens || 100000;

    if ((maxSpend > 0 && currentSpend >= maxSpend) || (maxTokens > 0 && currentTokens >= maxTokens)) {
      const reason = (maxSpend > 0 && currentSpend >= maxSpend) ? 'Max Spend Exceeded' : 'Max Tokens Exceeded';
      
      const queueItem = {
        id: crypto.randomUUID(),
        agentId,
        agentName: agent.name,
        action: 'execute_prompt',
        policy: reason,
        time: new Date().toISOString(),
        prompt
      };
      
      db.queue.unshift(queueItem);
      await saveDb(db);
      await incrementAgentBlocked(agentId);

      return NextResponse.json({ 
        status: 'blocked', 
        error: `Agent blocked by Blast Radius Firewall. Policy triggered: ${reason}` 
      }, { status: 403 });
    }

    // 2. ALLOWED - EXECUTE
    const startTime = Date.now();
    let text = '';
    let totalTokens = 0;
    let success = false;
    let errorContext = '';
    let cost = 0;
    let durationMs = 0;

    try {
      ({ text, totalTokens, cost } = await callProvider(agent, agentId, db, userId, prompt));
      success = true;
    } catch (err: any) {
      success = false;
      if (err.responseText) text = err.responseText;
      let rawError = err.message || 'Unknown LLM Error';
      console.error('LLM Error:', err);

      // Directly return the raw error from the provider as requested
      errorContext = `Provider Error: ${rawError}`;
    }

    durationMs = Date.now() - startTime;

    if (success) {
      await updateAgentUsage(agentId, totalTokens, cost);
    }

    // 3. LOG TRACE FOR OBSERVABILITY
    const newDb = await getDb(); // get fresh DB to avoid race conditions
    newDb.traces.unshift({
      id: crypto.randomUUID(),
      agentId,
      agentName: agent.name,
      success,
      durationMs,
      tokensUsed: totalTokens,
      cost,
      response: text,
      errorContext,
      timestamp: new Date().toISOString()
    });
    
    if (newDb.traces.length > 50) newDb.traces = newDb.traces.slice(0, 50);
    await saveDb(newDb);

    if (!success) {
      return NextResponse.json({ status: 'error', error: errorContext }, { status: 500 });
    }

    return NextResponse.json({ status: 'success', result: text, traceId: newDb.traces[0].id });
    
  } catch (error: any) {
    console.error('Error in Proxy API route:', error);
    return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
  }
}
