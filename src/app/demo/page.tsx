"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, ShieldCheck, CheckCircle2, Link as LinkIcon, Key, Bot } from 'lucide-react';
import { guessLogo } from '@/lib/guessLogo';

export default function DemoClientApp() {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [proxyUrl, setProxyUrl] = useState('https://api.checkpost.app/v1/proxy');
  const [apiKey, setApiKey] = useState('');
  const [botName, setBotName] = useState('Customer Support Bot');
  
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proxyUrl || !apiKey || !botName) return;
    setMessages([{ role: 'bot', content: `Connection established. I am ${botName}, securely routed through the Checkpost Firewall. How can I help you today?` }]);
    setIsSetupComplete(true);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !apiKey) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Intercept display URLs to actually hit our real Next.js proxy route on Vercel
      let activeEndpoint = proxyUrl;
      if (activeEndpoint.includes('checkpost.app') || activeEndpoint.includes('localhost')) {
        activeEndpoint = '/api/proxy';
      }

      const response = await fetch(activeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ prompt: userMessage })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to connect to proxy');
      }

      setMessages(prev => [...prev, { role: 'bot', content: data.result || data.response || data.text || JSON.stringify(data) }]);
    } catch (err: any) {
      // Clean up the error message by removing redundant text if present from the proxy
      let cleanMessage = err.message.replace('Agent blocked by Checkpost Firewall. Policy triggered: ', '')
                                    .replace('Agent blocked by Blast Radius Firewall. Policy triggered: ', '');
      
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: `🚨 Checkpost Firewall Interception:\n\n${cleanMessage}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isSetupComplete) {
    return (
      <div className="min-h-screen bg-[var(--app-canvas)] flex items-center justify-center p-6 font-sans selection:bg-black/10">
        <div className="w-full max-w-md bg-white border border-[var(--app-hairline)] rounded-[24px] p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] animate-fade-in">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[var(--app-soft)] border border-[var(--app-hairline)] flex items-center justify-center shadow-sm mb-5 p-3">
              <img src="/checkpost-icon.png" alt="Checkpost" className="w-full h-full object-contain opacity-80" />
            </div>
            <h1 className="text-2xl font-bold text-[var(--app-ink)] tracking-tight">Initialize Demo Sandbox</h1>
            <p className="text-sm text-[var(--app-muted)] mt-2 font-medium">Configure your connection details.</p>
          </div>
          
          <form onSubmit={handleConnect} className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[11px] font-bold text-[var(--app-muted)] uppercase tracking-wider ml-1">
                <Bot className="w-3.5 h-3.5" /> Bot Name
              </label>
              <input
                type="text"
                value={botName}
                onChange={e => setBotName(e.target.value)}
                placeholder="E.g., Sales Assistant (OpenAI)"
                className="w-full bg-[var(--app-canvas)] border border-[var(--app-hairline)] rounded-xl px-4 py-3.5 text-[14px] font-medium text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] focus:ring-1 focus:ring-[var(--app-ink)] transition-all shadow-sm"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[11px] font-bold text-[var(--app-muted)] uppercase tracking-wider ml-1">
                <LinkIcon className="w-3.5 h-3.5" /> Proxy Endpoint
              </label>
              <input
                type="text"
                value={proxyUrl}
                onChange={e => setProxyUrl(e.target.value)}
                placeholder="https://api.checkpost.app/v1/..."
                className="w-full bg-[var(--app-canvas)] border border-[var(--app-hairline)] rounded-xl px-4 py-3.5 text-[14px] font-medium text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] focus:ring-1 focus:ring-[var(--app-ink)] transition-all shadow-sm"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[11px] font-bold text-[var(--app-muted)] uppercase tracking-wider ml-1">
                <Key className="w-3.5 h-3.5" /> Checkpost API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                placeholder="cp_..."
                className="w-full bg-[var(--app-canvas)] border border-[var(--app-hairline)] rounded-xl px-4 py-3.5 text-[14px] font-medium text-[var(--app-ink)] focus:outline-none focus:border-[var(--app-ink)] focus:ring-1 focus:ring-[var(--app-ink)] transition-all shadow-sm font-mono tracking-widest"
                required
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full cta-btn-dark text-on-dark rounded-xl py-4 font-semibold text-[15px] transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                Establish Secure Link
              </button>
            </div>
          </form>
          
          <div className="mt-8 flex items-center justify-center gap-2 opacity-60">
            <ShieldCheck className="w-4 h-4 text-[var(--app-ink)]" />
            <span className="text-[10px] font-bold text-[var(--app-ink)] tracking-[0.15em] uppercase">Secured by Checkpost Firewall</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--app-canvas)] text-[var(--app-ink)] font-sans selection:bg-black/10 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col h-screen relative bg-white border-x border-[var(--app-hairline)] shadow-2xl">
        {/* Header */}
        <header className="h-[80px] flex items-center px-6 sm:px-8 border-b border-[var(--app-hairline)] bg-white shrink-0 sticky top-0 z-20 shadow-sm">
          <div className="flex items-center justify-between w-full mx-auto">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-[48px] h-[48px] rounded-full bg-[var(--app-soft)] border border-[var(--app-hairline)] flex items-center justify-center p-2.5 shadow-sm overflow-hidden">
                  <img 
                    src={guessLogo(botName).provider === 'Custom' ? 'https://www.svgrepo.com/show/48151/team-support.svg' : guessLogo(botName).logo} 
                    alt={botName} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#10b981] border-2 border-white rounded-full shadow-sm"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-[var(--app-ink)] text-[18px] tracking-tight">{botName}</h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span className="text-[11px] text-[#10b981] font-bold uppercase tracking-widest">Secured by Checkpost</span>
                </div>
              </div>
            </div>
            {/* Disconnect button removed as requested */}
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8 scroll-smooth bg-[#f8fafc]">
          <div className="text-center py-6">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">Secure Session Started</span>
          </div>
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 sm:gap-4 w-full group animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {msg.role === 'bot' && (
                <div className={`w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full border border-[var(--app-hairline)] flex items-center justify-center p-2 sm:p-2.5 shrink-0 mt-1 shadow-sm overflow-hidden ${msg.content.includes('🚨') ? 'bg-red-50' : 'bg-white'}`}>
                  <img 
                    src={msg.content.includes('🚨') ? '/checkpost-icon.png' : (guessLogo(botName).provider === 'Custom' ? 'https://www.svgrepo.com/show/48151/team-support.svg' : guessLogo(botName).logo)} 
                    alt={msg.content.includes('🚨') ? 'Checkpost Firewall' : 'Bot'} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              )}
              
              <div className={`px-5 py-4 max-w-[85%] sm:max-w-[75%] shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-[#0f172a] text-white rounded-[20px] rounded-tr-[4px]' 
                  : msg.content.includes('🚨') 
                    ? 'bg-red-50 border border-red-100 text-red-900 rounded-[20px] rounded-tl-[4px]'
                    : 'bg-white border border-[var(--app-hairline)] text-[var(--app-ink)] rounded-[20px] rounded-tl-[4px] shadow-sm'
              }`}>
                <p className="text-[15px] font-medium leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>

              {msg.role === 'user' && (
                <div className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-[var(--app-soft)] border border-[var(--app-hairline)] flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--app-ink)]" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-4 w-full justify-start animate-fade-in">
              <div className="w-[42px] h-[42px] rounded-full bg-white border border-[var(--app-hairline)] flex items-center justify-center p-2.5 shrink-0 mt-1 shadow-sm overflow-hidden">
                <img 
                  src={guessLogo(botName).provider === 'Custom' ? 'https://www.svgrepo.com/show/48151/team-support.svg' : guessLogo(botName).logo} 
                  alt="Bot" 
                  className="w-full h-full object-contain opacity-50" 
                />
              </div>
              <div className="px-6 py-5 bg-white border border-[var(--app-hairline)] rounded-[20px] rounded-tl-[4px] flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 bg-white border-t border-[var(--app-hairline)] shrink-0 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto relative group">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="w-full bg-[#f8fafc] border border-[var(--app-hairline)] text-[var(--app-ink)] rounded-2xl pl-6 pr-[4.5rem] py-4 font-medium placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-inner text-[15px]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-3 bg-[#0f172a] hover:bg-black disabled:bg-gray-100 disabled:text-gray-400 text-white rounded-xl transition-all shadow-md disabled:shadow-none hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-center gap-1.5 opacity-70">
            <span className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">Powered by</span>
            <img src="/checkpost-icon.png" alt="Checkpost Logo" className="w-3.5 h-3.5 object-contain opacity-80" />
            <span className="text-[11px] font-bold text-[var(--app-ink)] tracking-wide uppercase">Checkpost</span>
          </div>
        </div>
      </div>
    </div>
  );
}
