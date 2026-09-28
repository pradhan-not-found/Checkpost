'use client';

import { useState, useEffect } from 'react';
import { Send, Bot, Zap, ChevronDown, ShieldAlert } from 'lucide-react';
import { MotionCard } from '@/components/MotionCard';
import { useAuth } from '@/context/AuthContext';
import { useDatabase } from '@/context/DatabaseContext';
import { Diamond } from '@/components/Diamond';
import { guessLogo } from '@/lib/guessLogo';

export default function LLMTestPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [agents, setAgents] = useState<{id: string; label: string; provider: string; logo: string}[]>([]);
  const [agentId, setAgentId] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { dbData } = useDatabase();

  useEffect(() => {
    if (dbData?.agents && user?.email) {
      const loadedAgents = Object.entries(dbData.agents)
        .filter(([_, info]: [string, any]) => info.owner === user.email)
        .map(([id, info]: [string, any]) => {
          const { provider, logo } = guessLogo(info.provider || info.name);
          return {
            id,
            label: info.name,
            provider,
            logo
          };
        });
      setAgents(loadedAgents);
      if (loadedAgents.length > 0 && !agentId) setAgentId(loadedAgents[0].id);
    }
  }, [dbData, user, agentId]);

  const selectedAgent = agents.find(a => a.id === agentId) || agents[0] || { id: 'default', label: 'Loading...', provider: 'System', logo: '/ai-logos/openai.svg' };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, agentId, userId: user?.email }),
      });

      const data = await res.json();

      if (data.status === 'blocked') {
        setError(data.error);
      } else if (data.status === 'error') {
        setError(data.error);
      } else {
        setResponse(data.result);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 w-full max-w-5xl mx-auto space-y-6 sm:space-y-8 pb-24">
      {/* Header */}
      <div className="mb-4 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-sans font-normal tracking-tight text-[var(--app-ink)] mb-2 sm:mb-3">
          Test Agent Proxy
        </h1>
        <p className="text-sm sm:text-base text-[var(--app-muted)] max-w-2xl leading-relaxed">
          Execute a prompt against the managed agents. If the budget is exceeded, it will be blocked by the firewall.
        </p>
      </div>

      <MotionCard
        index={1}
        className="bg-[var(--app-canvas)] rounded-2xl border-2 border-[var(--app-hairline)] p-4 sm:p-6 card-elevate card-depth"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 relative">
            <label className="text-xs font-bold tracking-widest text-[var(--app-muted)] uppercase">
              Select Agent Identity
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center gap-3 px-4 py-3 border border-[var(--app-hairline)] rounded-xl text-sm text-left bg-[var(--app-soft)] text-[var(--app-ink)] hover:bg-[var(--app-canvas)] transition-colors focus:outline-none focus:border-[var(--app-ink)]"
              >
                <div className="w-6 h-6 rounded-md bg-[var(--app-canvas)] border border-[var(--app-hairline)] flex items-center justify-center overflow-hidden shrink-0 p-0.5">
                  <img src={selectedAgent.logo} alt={selectedAgent.label} className="w-full h-full object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
                <span className="flex-1 font-medium">{selectedAgent.label}</span>
                <span className="text-[var(--app-muted)] text-xs hidden sm:inline">{selectedAgent.provider}</span>
                <ChevronDown className={`w-4 h-4 text-[var(--app-muted)] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-[var(--app-canvas)] border border-[var(--app-hairline)] rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                  {agents.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => { setAgentId(preset.id); setIsDropdownOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors hover:bg-[var(--app-soft)] ${selectedAgent.id === preset.id ? 'bg-[var(--app-soft)]' : ''}`}
                    >
                      <div className="w-6 h-6 rounded-md bg-[var(--app-canvas)] border border-[var(--app-hairline)] flex items-center justify-center overflow-hidden shrink-0 p-0.5">
                        <img src={preset.logo} alt={preset.label} className="w-full h-full object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
                      </div>
                      <span className="flex-1 font-medium text-[var(--app-ink)]">{preset.label}</span>
                      <span className="text-[var(--app-muted)] text-xs hidden sm:inline">{preset.provider}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-widest text-[var(--app-muted)] uppercase">
              Agent Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g. What is the capital of France?"
              className="w-full h-32 bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl p-4 text-sm text-[var(--app-ink)] resize-none focus:outline-none focus:border-[var(--app-ink)] transition-all"
            />
          </div>
          
          <div className="flex justify-end mt-2">
            <button 
              type="submit" 
              disabled={loading || !prompt}
              className="cta-btn-dark text-on-dark shadow-sm flex items-center justify-center gap-[10px] px-[16px] py-[10px] text-[14px] font-[500] rounded-[8px] transition-all disabled:opacity-50"
            >
              {loading ? (
                <Diamond className="w-4 h-4 text-[var(--app-canvas)]" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              Execute Prompt
            </button>
          </div>
        </form>

        {error && (
          <div className={`mt-6 overflow-hidden rounded-xl ${error.includes('Checkpost Policy Violation') ? 'bg-red-500/10 border-red-500/20' : 'bg-amber-500/10 border-amber-500/20'} border flex flex-col`}>
            <div className={`px-5 py-3 border-b ${error.includes('Checkpost Policy Violation') ? 'border-red-500/20 bg-red-500/10' : 'border-amber-500/20 bg-amber-500/10'} flex items-center gap-3`}>
              <ShieldAlert className={`w-5 h-5 ${error.includes('Checkpost Policy Violation') ? 'text-red-500' : 'text-amber-500'} shrink-0`} />
              <span className={`text-sm font-bold ${error.includes('Checkpost Policy Violation') ? 'text-red-600' : 'text-amber-600'} tracking-wide uppercase`}>
                {error.includes('Checkpost Policy Violation') ? 'Blocked by Firewall' : 'Provider Error'}
              </span>
            </div>
            <div className="p-5">
              <span className={`text-sm ${error.includes('Checkpost Policy Violation') ? 'text-red-900' : 'text-amber-900'} font-mono leading-relaxed break-words whitespace-pre-wrap block max-h-64 overflow-y-auto`}>
                {error}
              </span>
            </div>
          </div>
        )}

        {response && (
          <div className="mt-6 flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest text-[var(--app-muted)] uppercase">
              Agent Response
            </span>
            <div className="p-5 bg-[var(--app-soft)] border border-[var(--app-hairline)] rounded-xl text-sm text-[var(--app-ink)] leading-relaxed whitespace-pre-wrap font-mono">
              {response}
            </div>
          </div>
        )}
      </MotionCard>
    </div>
  );
}
