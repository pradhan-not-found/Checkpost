import { NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';



export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing or invalid Authorization header' }, { status: 401 });
    }
    
    const apiKey = authHeader.split(' ')[1];
    const body = await req.json();
    const db = await getDb();
    
    // Find agent by proxy_api_key
    let foundAgentId = null;
    let foundAgent = null;
    for (const [id, agent] of Object.entries(db.agents)) {
      if (agent.proxy_api_key === apiKey) {
        foundAgentId = id;
        foundAgent = agent;
        break;
      }
    }
    
    if (!foundAgentId || !foundAgent) {
      return NextResponse.json({ error: 'Invalid API Key' }, { status: 401 });
    }
    
    // Add to queue (simulating a blocked threat)
    const newThreat = {
      id: `q_${crypto.randomUUID().replace(/-/g, '').substring(0, 8)}`,
      agentId: foundAgentId,
      agentName: foundAgent.name,
      action: 'Blocked',
      policy: body.threatType || 'Firewall Rule Enforced',
      time: body.timestamp || new Date().toISOString(),
      prompt: `[Network Threat] IP: ${body.ip || 'Unknown'} | URL: ${body.url || 'Unknown'}`
    };
    
    if (!db.queue) db.queue = [];
    db.queue.unshift(newThreat); // add to front
    
    // Keep queue size manageable
    if (db.queue.length > 100) db.queue = db.queue.slice(0, 100);
    
    // Increment blocked count
    foundAgent.blockedCount = (foundAgent.blockedCount || 0) + 1;
    
    await saveDb(db);
    
    return NextResponse.json({ success: true, id: newThreat.id });
  } catch (error: any) {
    console.error('Ingest Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
