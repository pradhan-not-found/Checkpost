import { GoogleGenerativeAI } from '@google/generative-ai';
import Groq from 'groq-sdk';
import { updateProviderLimits, type DatabaseSchema } from '@/lib/db';

type Agent = DatabaseSchema['agents'][string];

/**
 * Sends a single prompt to the agent's configured LLM provider.
 * Throws on provider errors or a missing API key.
 */
export async function callProvider(agent: Agent, agentId: string, db: DatabaseSchema, userId: string, prompt: string) {
  let text = '';
  let totalTokens = 0;
  let cost = 0;

  let provider = (agent.provider || '').toLowerCase();
  let apiKey = agent.provider_api_key;
  const userSettings = db.userSettings?.[userId] || {};
  
  if (!apiKey) {
    if (provider.includes('gemini') || provider.includes('google')) apiKey = userSettings.geminiApiKey;
    else if (provider.includes('groq')) apiKey = userSettings.groqApiKey;
    else if (provider.includes('openai') || provider.includes('gpt')) apiKey = userSettings.openAiApiKey;
  }

  // Key-prefix auto-detection — overrides whatever provider name was set
  if (apiKey?.startsWith('gsk_')) provider = 'groq';
  else if (apiKey?.startsWith('AIza')) provider = 'gemini';
  else if (apiKey?.startsWith('sk-ant-')) provider = 'anthropic';
  else if (apiKey?.startsWith('sk-') && !provider.includes('groq')) provider = provider || 'openai';

  if ((provider.includes('gemini') || provider.includes('google')) && apiKey) {
    const genAI = new GoogleGenerativeAI(apiKey);
    let response;

    // Models with actual free-tier quota on v1beta endpoint
    // gemini-pro-latest → gemini-3.1-pro (limit: 0 on free tier) — never use
    // gemini-1.5-flash-8b → 404 on v1beta — never use
    const geminiModelChain = [
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
      'gemini-1.5-flash',
    ];

    let geminiError: any = null;
    for (const modelName of geminiModelChain) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        response = await result.response;
        geminiError = null;
        break;
      } catch (err: any) {
        geminiError = err;
        const msg = err.message || '';
        // 404 = model not found, 429 = quota — both are retryable in the chain
        if (!(msg.includes('404') || msg.includes('429') || err.status === 404 || err.status === 429)) {
          throw err; // hard auth failure — stop immediately
        }
      }
    }

    if (!response) {
      // All Gemini models rate-limited — auto-fallback to Groq if key exists
      const groqKey = db.userSettings?.[userId]?.groqApiKey;
      if (groqKey) {
        const modelsReq = await fetch('https://api.groq.com/openai/v1/models', { headers: { 'Authorization': `Bearer ${groqKey}` } });
        const modelsData = await modelsReq.json();
        const activeModel = modelsData?.data?.[0]?.id || 'llama3-8b-8192'; // fallback to legacy if api fails
        
        const groq = new Groq({ apiKey: groqKey });
        const { data: groqFallback, response: groqFallbackRes } = await groq.chat.completions.create({
          messages: [{ role: 'user', content: prompt }],
          model: activeModel,
        }).withResponse();
        text = `[Gemini quota exhausted — auto-responded via Groq Llama fallback]\n\n${groqFallback.choices[0]?.message?.content || ''}`;
        totalTokens = groqFallback.usage?.total_tokens || 0;
        cost = (totalTokens / 1000000) * 0.05;
        // Capture real Groq daily token limits from response headers
        const limitDay = parseInt(groqFallbackRes.headers.get('x-ratelimit-limit-tokens-day') || '0');
        const remainingDay = parseInt(groqFallbackRes.headers.get('x-ratelimit-remaining-tokens-day') || '0');
        const resetAt = groqFallbackRes.headers.get('x-ratelimit-reset-tokens-day');
        if (limitDay > 0) {
          updateProviderLimits(agentId, { tokenLimit: limitDay, tokensRemaining: remainingDay - totalTokens, resetAt: resetAt || undefined }).catch(() => {});
        }
      } else {
        throw new Error('Google Gemini free-tier quota exhausted. Please check your API plan or try again later.');
      }
    } else {
      text = response.text();
      totalTokens = response.usageMetadata?.totalTokenCount || Math.ceil(text.length / 4) + Math.ceil(prompt.length / 4);
      cost = (totalTokens / 1000000) * 0.10;
    }
  } else if (provider.includes('groq') && apiKey) {
    const modelsReq = await fetch('https://api.groq.com/openai/v1/models', { headers: { 'Authorization': `Bearer ${apiKey}` } });
    const modelsData = await modelsReq.json();
    const activeModel = modelsData?.data?.[0]?.id || 'llama3-8b-8192'; // fallback to legacy if api fails
    
    const groq = new Groq({ apiKey });
    const { data: chatCompletion, response: groqRes } = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: activeModel,
    }).withResponse();
    text = chatCompletion.choices[0]?.message?.content || '';
    totalTokens = chatCompletion.usage?.total_tokens || Math.ceil(text.length / 4) + Math.ceil(prompt.length / 4);
    cost = (totalTokens / 1000000) * 0.05;
    // Capture real Groq daily token limits from response headers
    const limitDay = parseInt(groqRes.headers.get('x-ratelimit-limit-tokens-day') || '0');
    const remainingDay = parseInt(groqRes.headers.get('x-ratelimit-remaining-tokens-day') || '0');
    const resetAt = groqRes.headers.get('x-ratelimit-reset-tokens-day');
    if (limitDay > 0) {
      updateProviderLimits(agentId, { tokenLimit: limitDay, tokensRemaining: remainingDay - totalTokens, resetAt: resetAt || undefined }).catch(() => {});
    }
  } else if ((provider.includes('anthropic') || provider.includes('claude')) && apiKey) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Anthropic Error: ${res.status}`);
    }
    const data = await res.json();
    text = data.content?.[0]?.text || '';
    totalTokens = (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0) || Math.ceil(text.length / 4) + Math.ceil(prompt.length / 4);
    cost = (totalTokens / 1000000) * 3.0; // Sonnet approx pricing
  } else if ((provider.includes('openai') || provider.includes('gpt') || provider.includes('deepseek') || provider.includes('mistral') || provider.includes('xai') || provider.includes('perplexity')) && apiKey) {
    let baseURL = 'https://api.openai.com/v1/chat/completions';
    let model = 'gpt-4o-mini';
    let costPerM = 0.15;
    
    if (provider.includes('deepseek')) {
      baseURL = 'https://api.deepseek.com/chat/completions';
      model = 'deepseek-chat';
      costPerM = 0.14;
    } else if (provider.includes('mistral')) {
      baseURL = 'https://api.mistral.ai/v1/chat/completions';
      model = 'mistral-large-latest';
      costPerM = 2.0;
    } else if (provider.includes('xai') || provider.includes('grok')) {
      baseURL = 'https://api.x.ai/v1/chat/completions';
      model = 'grok-beta';
      costPerM = 5.0;
    } else if (provider.includes('perplexity')) {
      baseURL = 'https://api.perplexity.ai/chat/completions';
      model = 'llama-3.1-sonar-small-128k-online';
      costPerM = 0.2;
    }

    const res = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || `${provider} Error: ${res.status}`);
    }
    const data = await res.json();
    text = data.choices[0]?.message?.content || '';
    totalTokens = data.usage?.total_tokens || Math.ceil(text.length / 4) + Math.ceil(prompt.length / 4);
    cost = (totalTokens / 1000000) * costPerM;
  } else {
    // Fallback for Custom/Unsupported models OR missing API keys
    text = `Error: No valid API key provided for the ${agent.provider || 'Custom'} provider. Please add your API key in Settings or configure the Agent.`;
    // Carry the user-facing text so the caller can still log it in the trace
    throw Object.assign(new Error(`Missing API Key for ${provider || 'Custom'}`), { responseText: text });
  }

  return { text, totalTokens, cost };
}
