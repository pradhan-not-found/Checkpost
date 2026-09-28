"use client";
import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, Plus, CheckCircle2, Clock, MoreVertical, X, ChevronDown, Zap,
  Lock, ShieldOff, ShieldAlert, UserCheck, KeyRound, Timer, Globe, ScanSearch,
  FileText, ClipboardList, CreditCard, Ban, Gauge, BookLock, Network, EyeOff, Server, Edit, Trash
} from 'lucide-react';
import { MotionCard } from '@/components/MotionCard';
import { useAuth } from '@/context/AuthContext';
import { Diamond } from '@/components/Diamond';
import { useDatabase } from '@/context/DatabaseContext';
import { guessLogo } from '@/lib/guessLogo';

// ─── Icon system ──────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, { el: React.ReactNode; bg: string; fg: string }> = {
  lock:       { el: <Lock className="w-4 h-4" />,         bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  shield:     { el: <ShieldOff className="w-4 h-4" />,    bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  shieldalert:{ el: <ShieldAlert className="w-4 h-4" />,  bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  user:       { el: <UserCheck className="w-4 h-4" />,    bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  key:        { el: <KeyRound className="w-4 h-4" />,     bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  timer:      { el: <Timer className="w-4 h-4" />,        bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  globe:      { el: <Globe className="w-4 h-4" />,        bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  scan:       { el: <ScanSearch className="w-4 h-4" />,   bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  file:       { el: <FileText className="w-4 h-4" />,     bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  clipboard:  { el: <ClipboardList className="w-4 h-4" />,bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  credit:     { el: <CreditCard className="w-4 h-4" />,   bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  ban:        { el: <Ban className="w-4 h-4" />,           bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  gauge:      { el: <Gauge className="w-4 h-4" />,        bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  booklock:   { el: <BookLock className="w-4 h-4" />,     bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  network:    { el: <Network className="w-4 h-4" />,      bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  eyeoff:     { el: <EyeOff className="w-4 h-4" />,       bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  server:     { el: <Server className="w-4 h-4" />,       bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
  zap:        { el: <Zap className="w-4 h-4" />,          bg: 'bg-[var(--app-canvas)] border border-[var(--app-hairline)]', fg: 'text-[var(--app-ink)]' },
};

function PolicyIcon({ iconKey }: { iconKey: string }) {
  const def = ICON_MAP[iconKey] || ICON_MAP['shield'];
  return (
    <div className={`shrink-0 w-9 h-9 rounded-xl ${def.bg} ${def.fg} flex items-center justify-center shadow-sm`}>
      {def.el}
    </div>
  );
}

// ─── Prebuilt templates ───────────────────────────────────────────────────────
const PREBUILT_TEMPLATES = [
  {
    category: 'Data Protection',
    categoryIcon: <ShieldOff className="w-3.5 h-3.5" />,
    color: 'text-[var(--app-ink)]',
    templates: [
      { icon: 'shield',   name: 'Block PII Exfiltration',    description: 'Prevent SSN, credit card numbers, and passport numbers from being sent to external LLMs or APIs.' },
      { icon: 'key',      name: 'Encrypt Sensitive Data',    description: 'Require AES-256 encryption for all data fields classified as PII before storage or transmission.' },
      { icon: 'ban',      name: 'No External Data Transfer', description: 'Block any agent action that attempts to send internal data to external endpoints not on the allowlist.' },
    ],
  },
  {
    category: 'Rate & Usage Controls',
    categoryIcon: <Gauge className="w-3.5 h-3.5" />,
    color: 'text-[var(--app-ink)]',
    templates: [
      { icon: 'gauge',  name: 'Global Rate Limiting',     description: 'Limit all AI agent API calls to 100 requests per minute per workspace globally.' },
      { icon: 'timer',  name: 'Off-Hours Restriction',    description: 'Restrict autonomous agent actions to business hours only (Mon–Fri, 9am–6pm local time).' },
    ],
  },
  {
    category: 'Prompt Safety',
    categoryIcon: <Zap className="w-3.5 h-3.5" />,
    color: 'text-[var(--app-ink)]',
    templates: [
      { icon: 'zap',      name: 'Prompt Injection Guard',  description: 'Block all prompts containing "ignore previous instructions", "jailbreak", or "DAN mode" patterns.' },
      { icon: 'scan',     name: 'Output Content Filter',   description: 'Scan all LLM responses for harmful content, hate speech, or NSFW material before returning to user.' },
      { icon: 'booklock', name: 'System Prompt Lock',      description: 'Prevent agents from modifying or overriding their assigned system prompt at runtime.' },
    ],
  },
  {
    category: 'Human-in-the-Loop',
    categoryIcon: <UserCheck className="w-3.5 h-3.5" />,
    color: 'text-[var(--app-ink)]',
    templates: [
      { icon: 'user',      name: 'Require Manager Approval',       description: 'Require explicit human approval for all database DELETE or DROP operations initiated by an AI agent.' },
      { icon: 'credit',    name: 'Financial Transaction Review',    description: 'Flag and hold any agent-initiated payment or refund over $500 for human review before execution.' },
      { icon: 'clipboard', name: 'Audit Before Execute',           description: 'Log and review all agent-generated SQL queries before they are executed on production databases.' },
    ],
  },
  {
    category: 'Network & Access',
    categoryIcon: <Globe className="w-3.5 h-3.5" />,
    color: 'text-[var(--app-ink)]',
    templates: [
      { icon: 'network', name: 'API Allowlist Enforcement',   description: 'Restrict agent outbound calls to a pre-approved list of external APIs and domains only.' },
      { icon: 'eyeoff',  name: 'Least Privilege Access',      description: 'Automatically revoke agent permissions to any resource it has not accessed in the last 30 days.' },
      { icon: 'server',  name: 'Sandbox Production Access',   description: 'Prevent agents from directly accessing production databases. Route all reads through a read-only replica.' },
    ],
  },
];

type PolicyProfile = {
  name: string;
  description: string;
  maxSpend: number;
  maxTokens: number;
  loopLimit: number;
  rules: string[];
};



export default function PoliciesPage() {
  const { user } = useAuth();
  const { dbData, loading } = useDatabase();
  const [profiles, setProfiles] = useState<Record<string, PolicyProfile>>({});
  const [agents, setAgents] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  
  // Modal State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [maxSpend, setMaxSpend] = useState(50);
  const [maxTokens, setMaxTokens] = useState(100000);
  const [loopLimit, setLoopLimit] = useState(5);
  const [selectedRules, setSelectedRules] = useState<string[]>([]);
  const [assignedAgents, setAssignedAgents] = useState<string[]>([]);
  const [agentMetas, setAgentMetas] = useState<Record<string, {logo: string, provider: string}>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('tw_agent_logos');
      if (stored) setAgentMetas(JSON.parse(stored));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (dbData && user?.email) {
      if (dbData.policyProfiles) {
        const filteredProfiles = Object.entries(dbData.policyProfiles)
          .filter(([id, p]: [string, any]) => id === 'default' || p.owner === user.email)
          .reduce((acc: any, [id, p]) => { acc[id] = p; return acc; }, {});
        setProfiles(filteredProfiles);
      }
      if (dbData.agents) {
        const mapped = Object.entries(dbData.agents)
          .filter(([_, info]: [string, any]) => info.owner === user.email)
          .map(([id, info]: [any, any]) => ({ id, ...info }));
        setAgents(mapped);
      }
    }
  }, [dbData, user]);

  const openNewModal = () => {
    setEditingId(null);
    setName('');
    setDescription('');
    setMaxSpend(50);
    setMaxTokens(100000);
    setLoopLimit(5);
    setSelectedRules([]);
    setAssignedAgents([]);
    setIsModalOpen(true);
  };

  const openEditModal = (id: string) => {
    const p = profiles[id];
    const pAgents = agents.filter(a => a.policyId === id || (id === 'default' && !a.policyId)).map(a => a.id);
    setEditingId(id);
    setName(p.name);
    setDescription(p.description);
    setMaxSpend(p.maxSpend);
    setMaxTokens(p.maxTokens);
    setLoopLimit(p.loopLimit);
    setSelectedRules(p.rules || []);
    setAssignedAgents(pAgents);
    setIsModalOpen(true);
  };

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    setIsSaving(true);
    
    const id = editingId || `profile_${Date.now().toString(36)}`;
    const updatedProfiles = {
      ...profiles,
      [id]: { name, description, maxSpend: Number(maxSpend), maxTokens: Number(maxTokens), loopLimit: Number(loopLimit), rules: selectedRules, owner: user?.email }
    };
    
    const agentUpdates: Record<string, string> = {};
    for (const aId of assignedAgents) {
      agentUpdates[aId] = id;
    }
    for (const a of agents) {
      if ((a.policyId === id || (id === 'default' && !a.policyId)) && !assignedAgents.includes(a.id)) {
        agentUpdates[a.id] = 'default';
      }
    }

    try {
      await fetch('/api/db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_policy_and_agents', policyProfiles: updatedProfiles, agentUpdates })
      });
      setIsModalOpen(false);
      alert('Policy Profile successfully saved and applied to agents!');
    } catch (err) {
      console.error('Failed to save profile', err);
      alert('Failed to save policy profile.');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteProfile = async (id: string) => {
    if (id === 'default') {
      alert("Cannot delete the default policy.");
      return;
    }
    if (!confirm('Are you sure you want to delete this policy profile?')) return;
    
    const updatedProfiles = { ...profiles };
    delete updatedProfiles[id];
    
    try {
      await fetch('/api/db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_policyProfiles', policyProfiles: updatedProfiles })
      });
      setProfiles(updatedProfiles);
    } catch (err) {
      console.error('Failed to delete profile', err);
      alert('Failed to delete policy profile.');
    }
  };

  const toggleRule = (ruleName: string) => {
    if (selectedRules.includes(ruleName)) {
      setSelectedRules(selectedRules.filter(r => r !== ruleName));
    } else {
      setSelectedRules([...selectedRules, ruleName]);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-down pb-24">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 w-full">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--app-muted)] mb-3">Security</p>
          <h1 className="font-sans text-4xl sm:text-5xl text-[var(--app-ink)] tracking-tight">Policy Profiles</h1>
        </div>
        <button 
          onClick={openNewModal}
          className="cta-btn-dark text-on-dark shadow-sm shrink-0 mt-2 px-[16px] py-[10px] text-[14px] font-[500] rounded-[8px] transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="text-[var(--app-muted)] flex items-center h-full min-h-[100px]">Loading profiles...</div>
        ) : (
          Object.entries(profiles).map(([id, profile], idx) => {
            const pAgents = agents.filter(a => a.policyId === id || (id === 'default' && !a.policyId));
            return (
              <MotionCard key={id} index={idx} className={`bg-white rounded-2xl border p-6 card-elevate flex flex-col h-full relative overflow-hidden group ${id === 'default' ? 'border-[var(--app-ink)]/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]' : 'border-[var(--app-hairline)]'}`}>
                {id === 'default' && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--app-ink)]" />
                )}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--app-ink)] tracking-tight">{profile.name}</h3>
                    {id === 'default' && <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--app-muted)] bg-[var(--app-soft)] px-2.5 py-0.5 rounded-full inline-block mt-1.5 border border-[var(--app-hairline)]">Default Profile</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => openEditModal(id)} className="p-1.5 text-[var(--app-muted)] hover:text-[var(--app-ink)] transition-colors rounded-lg hover:bg-[var(--app-soft)]">
                    <Edit className="w-4 h-4" />
                  </button>
                  {id !== 'default' && (
                    <button onClick={() => deleteProfile(id)} className="p-1.5 text-[var(--app-muted)] hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                      <Trash className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-[var(--app-muted)] mb-6 flex-grow">{profile.description}</p>
              
              <div className="space-y-4 pt-4 border-t border-[var(--app-hairline)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]">Budget Limit</span>
                  <span className="text-sm font-semibold text-emerald-600">${profile.maxSpend.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]">Token Cap</span>
                  <span className="text-sm font-semibold text-[var(--app-ink)]">{profile.maxTokens.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]">Active Rules</span>
                  <span className="text-sm font-semibold text-[var(--app-ink)]">{profile.rules?.length || 0} configured</span>
                </div>
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-[var(--app-hairline)] relative">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)] shrink-0 mr-4">Assigned Agents</span>
                  <div className="group relative flex items-center -space-x-1.5 cursor-pointer justify-end w-max">
                    {pAgents.slice(0, 3).map((a, i) => {
                      const logoUrl = agentMetas[a.id]?.logo || guessLogo(a.provider || a.name).logo;
                      return (
                        <div key={a.id} className="relative z-10 w-7 h-7 rounded-full border-[1.5px] border-white bg-white overflow-hidden shadow-sm" style={{ zIndex: 10 - i }}>
                          <img src={logoUrl} alt={a.name} className="w-full h-full object-contain p-0.5" />
                        </div>
                      );
                    })}
                    {pAgents.length > 3 && (
                      <div className="relative z-0 w-7 h-7 rounded-full border-[1.5px] border-white bg-[var(--app-soft)] flex items-center justify-center text-[10px] font-bold text-[var(--app-ink)] shadow-sm">
                        +{pAgents.length - 3}
                      </div>
                    )}
                    {pAgents.length === 0 && <span className="text-xs text-[var(--app-muted)]">None</span>}

                    {/* Minimal Hover Card */}
                    {pAgents.length > 0 && (
                      <div className="absolute bottom-[calc(100%+8px)] right-0 w-max min-w-[140px] bg-[var(--app-canvas)] border border-[var(--app-hairline)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] shadow-[0_8px_30px_rgb(0,0,0,0.08)] pointer-events-none p-1.5 flex flex-col">
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)] mb-1 px-2 pt-1">Assigned Agents</div>
                        {pAgents.map(a => {
                          const logoUrl = agentMetas[a.id]?.logo || guessLogo(a.provider || a.name).logo;
                          return (
                            <div key={a.id} className="flex items-center gap-2.5 p-1.5 rounded-lg transition-colors">
                              <div className="w-5 h-5 rounded border border-[var(--app-hairline)] bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                <img src={logoUrl} alt={a.name} className="w-3.5 h-3.5 object-contain" />
                              </div>
                              <span className="text-xs font-semibold text-[var(--app-ink)] pr-2">{a.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </MotionCard>
            );
          })
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--app-ink)]/40 backdrop-blur-sm animate-fade-in">
          <MotionCard index={0} className="bg-[var(--app-canvas)] rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-[var(--app-hairline)] overflow-hidden">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[var(--app-hairline)]">
              <div>
                <h2 className="text-2xl font-sans font-normal text-[var(--app-ink)] tracking-tight">
                  {editingId ? 'Edit Policy Profile' : 'New Policy Profile'}
                </h2>
                <p className="text-sm text-[var(--app-muted)] mt-1">Configure limits and safety rules for agents using this profile.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-[var(--app-soft)] text-[var(--app-muted)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={saveProfile} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--app-ink)] uppercase tracking-wider">Profile Identity</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[var(--app-muted)] ml-1">Profile Name</label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      placeholder="e.g. Production Agents" 
                      required
                      className="w-full bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl px-4 py-3 text-sm text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[var(--app-muted)] ml-1">Description</label>
                    <input 
                      type="text" 
                      value={description} 
                      onChange={e => setDescription(e.target.value)} 
                      placeholder="What is this profile used for?" 
                      className="w-full bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl px-4 py-3 text-sm text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--app-ink)] uppercase tracking-wider">Assigned Agents</h3>
                <div className="bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl p-1 max-h-[140px] overflow-y-auto">
                  {agents.map(a => (
                    <label key={a.id} className="flex items-center justify-between px-3 py-2 hover:bg-[var(--app-canvas)] rounded-lg cursor-pointer transition-colors group">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={assignedAgents.includes(a.id)}
                          onChange={(e) => {
                            if (e.target.checked) setAssignedAgents([...assignedAgents, a.id]);
                            else setAssignedAgents(assignedAgents.filter(id => id !== a.id));
                          }}
                          className="w-4 h-4 rounded border-[var(--app-hairline)] text-[var(--app-ink)] focus:ring-[var(--app-ink)]"
                        />
                        <span className="text-sm font-medium text-[var(--app-ink)]">{a.name}</span>
                      </div>
                      <span className="text-xs text-[var(--app-muted)] group-hover:text-[var(--app-ink)] transition-colors">{a.id}</span>
                    </label>
                  ))}
                  {agents.length === 0 && (
                    <div className="p-4 text-center text-sm text-[var(--app-muted)]">No agents available</div>
                  )}
                </div>
                <p className="text-xs text-[var(--app-muted)] mt-1.5 ml-1">
                  Selected agents will automatically have this profile applied.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--app-ink)] uppercase tracking-wider">Blast Radius Caps</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[var(--app-muted)] ml-1">Max Spend ($)</label>
                    <input 
                      type="number" 
                      value={maxSpend} 
                      onChange={e => setMaxSpend(Number(e.target.value))} 
                      className="w-full bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl px-4 py-3 text-sm text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] transition-colors font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[var(--app-muted)] ml-1">Max Tokens</label>
                    <input 
                      type="number" 
                      value={maxTokens} 
                      onChange={e => setMaxTokens(Number(e.target.value))} 
                      className="w-full bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl px-4 py-3 text-sm text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] transition-colors font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[var(--app-muted)] ml-1">Max Iterations (Loop Limit)</label>
                    <input 
                      type="number" 
                      value={loopLimit} 
                      onChange={e => setLoopLimit(Number(e.target.value))} 
                      className="w-full bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl px-4 py-3 text-sm text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] transition-colors font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--app-ink)] uppercase tracking-wider">Firewall Rules</h3>
                <div className="space-y-3">
                  {PREBUILT_TEMPLATES.map((category) => (
                    <div key={category.category} className="border border-[var(--app-hairline)] rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                        className="w-full flex items-center justify-between p-4 bg-[var(--app-soft)] hover:bg-[var(--app-soft)]/80 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-[var(--app-canvas)] border border-[var(--app-hairline)] flex items-center justify-center ${category.color} shadow-sm`}>
                            {category.categoryIcon}
                          </div>
                          <span className="font-semibold text-sm text-[var(--app-ink)]">{category.category}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-[var(--app-muted)] transition-transform duration-200 ${openCategory === category.category ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openCategory === category.category && (
                        <div className="p-4 bg-[var(--app-canvas)] border-t border-[var(--app-hairline)] space-y-3">
                          {category.templates.map(tpl => {
                            const isSelected = selectedRules.includes(tpl.name);
                            return (
                              <div 
                                key={tpl.name}
                                onClick={() => toggleRule(tpl.name)}
                                className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                                  isSelected 
                                    ? 'bg-[var(--app-ink)] text-[var(--app-canvas)] border-[var(--app-ink)] shadow-md' 
                                    : 'bg-[var(--app-soft)] border-[var(--app-hairline)] hover:border-[var(--app-muted)]/40 text-[var(--app-ink)]'
                                }`}
                              >
                                {isSelected ? (
                                  <div className="shrink-0 w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5" />
                                  </div>
                                ) : (
                                  <PolicyIcon iconKey={tpl.icon} />
                                )}
                                <div className="flex-1 min-w-0 pt-0.5">
                                  <h4 className="font-bold text-[13px] tracking-wide mb-1">{tpl.name}</h4>
                                  <p className={`text-[13px] leading-relaxed ${isSelected ? 'text-[var(--app-canvas)]/80' : 'text-[var(--app-muted)]'}`}>
                                    {tpl.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </form>
            
            <div className="p-6 sm:p-8 border-t border-[var(--app-hairline)] bg-[var(--app-soft)] flex justify-end gap-3">
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-xl border border-[var(--app-hairline)] text-sm font-semibold text-[var(--app-ink)] hover:bg-[var(--app-canvas)] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={saveProfile}
                disabled={isSaving || !name}
                className="px-6 py-2.5 rounded-xl bg-[var(--app-ink)] text-sm font-semibold text-[var(--app-canvas)] hover:bg-[var(--app-ink)]/90 transition-all shadow-sm disabled:opacity-50 flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <Diamond className="w-4 h-4 text-white" />
                    Saving...
                  </>
                ) : 'Save Profile'}
              </button>
            </div>
          </MotionCard>
        </div>
      )}
    </div>
  );
}
