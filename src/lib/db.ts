import { db as firestoreDb } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export type DatabaseSchema = {
  policyProfiles: Record<string, {
    name: string;
    description: string;
    maxSpend: number;
    maxTokens: number;
    loopLimit: number;
    rules: string[];
  }>;
  agents: Record<string, {
    name: string;
    owner?: string;
    provider?: string;
    provider_api_key?: string;
    proxy_api_key?: string;
    policyId?: string;
    totalTokens: number;
    totalSpend: number;
    totalCalls: number;
    blockedCount: number;
    lastCallAt?: string;
    // Real provider-side limits (populated from response headers)
    providerTokenLimit?: number;         // e.g. Groq x-ratelimit-limit-tokens-day
    providerTokensRemaining?: number;    // e.g. Groq x-ratelimit-remaining-tokens-day
    providerTokensUsedToday?: number;    // derived: limit - remaining
    providerLimitResetAt?: string;       // ISO string of when daily limit resets
    providerLimitUpdatedAt?: string;     // last time we got fresh header data
  }>;
  userSettings?: Record<string, {
    geminiApiKey?: string;
    groqApiKey?: string;
    openAiApiKey?: string;
  }>;
  queue: Array<{
    id: string;
    agentId: string;
    agentName: string;
    action: string;
    policy: string;
    time: string;
    prompt: string;
  }>;
  traces: Array<{
    id: string;
    agentId: string;
    agentName: string;
    success: boolean;
    durationMs: number;
    tokensUsed: number;
    cost: number;
    errorContext?: string;
    response?: string;
    timestamp: string;
  }>;
};

const defaultSchema: DatabaseSchema = {
  policyProfiles: {
    'default': {
      name: 'Default Policy',
      description: 'Standard limits for all agents',
      maxSpend: 50,
      maxTokens: 100000,
      loopLimit: 5,
      rules: []
    }
  },
  agents: {},
  userSettings: {},
  queue: [],
  traces: [],
};

export async function getDb(): Promise<DatabaseSchema> {
  try {
    const docRef = doc(firestoreDb, 'database', 'global');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as DatabaseSchema;
      // Ensure required fields exist in case of old schema
      if (!data.policyProfiles) data.policyProfiles = defaultSchema.policyProfiles;
      if (!data.agents) data.agents = defaultSchema.agents;
      if (!data.userSettings) data.userSettings = defaultSchema.userSettings;
      if (!data.queue) data.queue = defaultSchema.queue;
      if (!data.traces) data.traces = defaultSchema.traces;
      return data;
    } else {
      await setDoc(docRef, defaultSchema);
      return defaultSchema;
    }
  } catch (error) {
    console.error('Failed to read from Firestore, returning default schema.', error);
    return defaultSchema;
  }
}

export async function saveDb(data: DatabaseSchema): Promise<void> {
  try {
    const docRef = doc(firestoreDb, 'database', 'global');
    await setDoc(docRef, data);
  } catch (error) {
    console.error('Failed to write to Firestore', error);
  }
}

export async function updateAgentUsage(agentId: string, tokens: number, cost: number): Promise<void> {
  const db = await getDb();
  if (db.agents[agentId]) {
    db.agents[agentId].totalTokens = (db.agents[agentId].totalTokens || 0) + tokens;
    db.agents[agentId].totalSpend  = (db.agents[agentId].totalSpend  || 0) + cost;
    db.agents[agentId].totalCalls  = (db.agents[agentId].totalCalls  || 0) + 1;
    db.agents[agentId].lastCallAt  = new Date().toISOString();
    await saveDb(db);
  }
}

export async function updateProviderLimits(
  agentId: string,
  limits: {
    tokenLimit?: number;
    tokensRemaining?: number;
    resetAt?: string;
  }
): Promise<void> {
  const db = await getDb();
  if (db.agents[agentId]) {
    if (limits.tokenLimit !== undefined)    db.agents[agentId].providerTokenLimit = limits.tokenLimit;
    if (limits.tokensRemaining !== undefined) {
      db.agents[agentId].providerTokensRemaining = limits.tokensRemaining;
      if (limits.tokenLimit !== undefined) {
        db.agents[agentId].providerTokensUsedToday = limits.tokenLimit - limits.tokensRemaining;
      }
    }
    if (limits.resetAt)  db.agents[agentId].providerLimitResetAt = limits.resetAt;
    db.agents[agentId].providerLimitUpdatedAt = new Date().toISOString();
    await saveDb(db);
  }
}

export async function incrementAgentBlocked(agentId: string): Promise<void> {
  const db = await getDb();
  if (db.agents[agentId]) {
    db.agents[agentId].blockedCount += 1;
    await saveDb(db);
  }
}
