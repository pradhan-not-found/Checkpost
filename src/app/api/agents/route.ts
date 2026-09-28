import { NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { name, user_id, provider, policyId, provider_api_key } = await req.json();

    if (!name || !user_id) {
      return NextResponse.json({ error: 'Missing name or user_id' }, { status: 400 });
    }

    const db = await getDb();
    const newId = `agent_${crypto.randomUUID().replace(/-/g, '').substring(0, 12)}`;
    
    const proxy_api_key = `cp_${crypto.randomUUID().replace(/-/g, '')}`;
    
    db.agents[newId] = {
      name,
      owner: user_id,
      provider: provider || 'Custom',
      policyId: policyId || 'default',
      provider_api_key: provider_api_key || '',
      totalTokens: 0,
      totalSpend: 0,
      totalCalls: 0,
      blockedCount: 0,
      proxy_api_key,
    };

    if (!db.traces) db.traces = [];
    db.traces.push({
      id: `trace_${crypto.randomUUID().replace(/-/g, '').substring(0, 8)}`,
      agentId: newId,
      agentName: name,
      timestamp: new Date().toISOString(),
      success: true,
      durationMs: 0,
      tokensUsed: 0,
      cost: 0,
      response: 'Agent successfully registered and deployed to Checkpost.',
      errorContext: 'Agent Registration'
    });

    await saveDb(db);

    return NextResponse.json({ 
      id: newId,
      proxy_url: `https://api.checkpost.app/v1/${newId}/chat`,
      proxy_api_key
    });
  } catch (error: any) {
    console.error('Agent Creation Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create agent', stack: error.stack }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }

    const db = await getDb();
    if (db.agents[id]) {
      delete db.agents[id];
      if (db.traces) {
        db.traces = db.traces.filter(t => t.agentId !== id);
      }
      if (db.queue) {
        db.queue = db.queue.filter(q => q.agentId !== id);
      }
      await saveDb(db);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete agent' }, { status: 500 });
  }
}
