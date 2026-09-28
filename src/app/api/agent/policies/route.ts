import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';



export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing or invalid Authorization header' }, { status: 401 });
    }
    
    const apiKey = authHeader.split(' ')[1];
    const db = await getDb();
    
    // Find agent by proxy_api_key
    let foundAgent = null;
    for (const [id, agent] of Object.entries(db.agents)) {
      if (agent.proxy_api_key === apiKey) {
        foundAgent = agent;
        break;
      }
    }
    
    if (!foundAgent) {
      return NextResponse.json({ error: 'Invalid API Key' }, { status: 401 });
    }
    
    const policyId = foundAgent.policyId || 'default';
    const policy = db.policyProfiles[policyId] || db.policyProfiles['default'];
    
    // Example of adding some basic network rules to the policy for the agent to enforce
    const rules = policy.rules || [];
    
    return NextResponse.json({
      name: policy.name,
      maxSpend: policy.maxSpend,
      maxTokens: policy.maxTokens,
      rules: rules.length > 0 ? rules : ['BLOCK_SQL_INJECTION', 'BLOCK_XSS']
    });
  } catch (error: any) {
    console.error('Policy Fetch Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
