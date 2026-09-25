'use client';

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Zap, Hand, CheckCircle2, ShieldCheck, Database, Code, XCircle } from 'lucide-react';

const slides = [
  {
    id: 'sql',
    title: 'Policy Violation',
    task: 'Optimize the database by clearing old users',
    agentLogo: '/ai-logos/openai.svg',
    agentColor: '#10a37f',
    agentName: 'GPT-4 Agent',
    codeSnippet: 'DROP TABLE users;',
    codeLang: 'sql',
    evaluations: [
      { rule: 'deny_destructive_sql', status: 'Matched', time: '0.2ms', fail: true },
      { rule: 'require_where_clause', status: 'Matched', time: '0.1ms', fail: true }
    ],
    result: 'Blocked',
    resultColor: 'text-red-500',
    resultBg: 'bg-red-500/10 border-red-500/20'
  },
  {
    id: 'cost',
    title: 'Cost Governance',
    task: 'Research competitors by scraping 100 pages',
    agentLogo: '/ai-logos/meta.svg',
    agentColor: '#0668E1',
    agentName: 'Llama-3 Agent',
    codeSnippet: '{\n  "tool": "web_scrape",\n  "urls": [...100 items],\n  "retry_count": 15\n}',
    codeLang: 'json',
    evaluations: [
      { rule: 'max_retries_exceeded', status: 'Matched', time: '0.4ms', fail: true },
      { rule: 'budget_limit_$50', status: 'Exceeded', time: '0.1ms', fail: true }
    ],
    result: 'API Revoked',
    resultColor: 'text-orange-500',
    resultBg: 'bg-orange-500/10 border-orange-500/20'
  },
  {
    id: 'hitl',
    title: 'Synchronous Hold',
    task: 'Process refund for customer #8912',
    agentLogo: '/ai-logos/claude.png',
    agentColor: '#D97757',
    agentName: 'Claude-3 Agent',
    codeSnippet: '{\n  "action": "stripe_refund",\n  "amount": 500.00,\n  "currency": "usd"\n}',
    codeLang: 'json',
    evaluations: [
      { rule: 'financial_action_risk', status: 'High', time: '0.5ms', fail: true },
      { rule: 'manager_approval', status: 'Required', time: '0.1ms', fail: true }
    ],
    result: 'Awaiting Operator',
    resultColor: 'text-blue-500',
    resultBg: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    id: 'normal',
    title: 'Execution Allowed',
    task: 'Analyze Q3 metrics from the data warehouse',
    agentLogo: '/ai-logos/perplexity.svg',
    agentColor: '#20B8CD',
    agentName: 'Custom Agent',
    codeSnippet: 'SELECT metric, value\nFROM q3_results\nWHERE region = "US";',
    codeLang: 'sql',
    evaluations: [
      { rule: 'read_only_query', status: 'Passed', time: '0.3ms', fail: false },
      { rule: 'table_allowlist', status: 'Passed', time: '0.2ms', fail: false }
    ],
    result: 'System Safe',
    resultColor: 'text-emerald-500',
    resultBg: 'bg-emerald-500/10 border-emerald-500/20'
  }
];

interface HeroSlideshowProps {
  onSlideChange?: (index: number) => void;
}

export default function HeroSlideshow({ onSlideChange }: HeroSlideshowProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const onSlideChangeRef = React.useRef(onSlideChange);
  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  }, [onSlideChange]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (onSlideChangeRef.current) {
      onSlideChangeRef.current(currentSlide);
    }
  }, [currentSlide]);

  const slide = slides[currentSlide];

  const handleDotClick = (i: number) => {
    setCurrentSlide(i);
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto animate-fade-down pt-2">
      {/* Outer Glass Container */}
      <div
        className="flex w-full overflow-hidden rounded-[20px] transition-all duration-500 ease-in-out"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.6) inset',
        }}
      >
        {/* Left Panel: Agent Context */}
        <div className="flex-1 p-5 bg-white/50 border-r border-white/40 flex flex-col gap-4 relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="px-3 py-1 bg-white/80 rounded-full border border-black/5 text-[10px] font-mono text-black/60 shadow-sm backdrop-blur-md transition-all duration-300">
              Agent Context
            </div>
          </div>
          
          <div className="flex-1 rounded-xl bg-white shadow-sm border border-black/5 flex flex-col overflow-hidden relative">
             {/* Header */}
             <div className="px-4 py-3 border-b border-black/5 flex items-center gap-3 bg-gray-50/50">
                <div className="w-[24px] h-[24px] rounded-[6px] flex items-center justify-center shadow-sm overflow-hidden border border-black/10 bg-white p-[2px]">
                   <img key={slide.agentLogo} src={slide.agentLogo} alt="" className="w-full h-full object-contain animate-fade-in" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold text-black/80 leading-none">{slide.agentName}</span>
                  <span className="text-[10px] text-black/40 mt-1">{slide.task}</span>
                </div>
             </div>

             {/* Code Block */}
             <div className="flex-1 bg-white p-4 relative font-mono text-[11px] leading-relaxed overflow-hidden border-t border-black/5 shadow-inner">
                <div className="absolute top-2 right-3 text-black/30 font-medium text-[10px] uppercase tracking-wider">{slide.codeLang}</div>
                <pre key={slide.codeSnippet} className="text-gray-700 font-semibold animate-fade-in mt-2 whitespace-pre-wrap">
                  {slide.codeSnippet}
                </pre>
             </div>
          </div>
        </div>

        {/* Right Panel: Checkpost Evaluation */}
        <div className="w-[420px] bg-white/70 flex flex-col relative shrink-0 h-[400px]">
          {/* Header */}
          <div className="px-5 py-4 border-b border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <div className="w-[22px] h-[22px] rounded-[5px] bg-white flex items-center justify-center shadow-sm border border-black/10 overflow-hidden p-0.5">
                 <img src="/checkpost-icon.png" alt="Checkpost" className="w-full h-full object-contain" />
               </div>
               <div 
                 className="text-[15px] text-black/80 mt-0.5"
                 style={{ fontFamily: 'var(--font-geist-pixel-grid), monospace', letterSpacing: '0.15em' }}
               >
                 Checkpost
               </div>
            </div>
          </div>

          <div className="flex-1 p-5 flex flex-col overflow-hidden">
            <h3 className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-4">Policy Evaluation</h3>
            
            <div className="flex flex-col gap-3">
              {slide.evaluations.map((ev, idx) => (
                <div key={slide.id + idx} className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="flex items-center gap-3">
                    {ev.fail ? <XCircle className="w-4 h-4 text-red-500" /> : <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                    <div className="flex flex-col">
                      <span className="text-[12px] font-medium text-black/80">{ev.rule}</span>
                      <span className="text-[10px] text-black/40 mt-0.5">{ev.status}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-black/40 bg-gray-100 px-2 py-0.5 rounded-md">{ev.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4">
               <h3 className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-3">Intercept Result</h3>
               <div key={slide.result} className={`w-full py-3 rounded-xl border ${slide.resultBg} flex flex-col items-center justify-center gap-1 animate-fade-in-up`} style={{ animationDelay: '300ms' }}>
                 <span className={`text-[14px] font-bold tracking-tight ${slide.resultColor}`}>{slide.result}</span>
                 <span className="text-[10px] text-black/50 font-medium uppercase tracking-wider">{slide.title}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-[6px] mt-6 relative z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className="h-[6px] w-[6px] rounded-full transition-all duration-300 cursor-pointer"
            style={{ background: i === currentSlide ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.15)', transform: i === currentSlide ? 'scale(1.2)' : 'scale(1)' }}
          />
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
}