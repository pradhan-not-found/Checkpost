'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const CHAPTERS = [
  {
    id: 'deterministic-policy-engine',
    numeral: 'I',
    title: 'Deterministic Policy Engine',
    label: 'Policy Engine',
    sections: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'architecture', label: 'Architecture Flow' },
      { id: 'api-boundaries', label: 'Absolute Boundaries' },
      { id: 'state-transitions', label: 'State Transitions' },
    ],
  },
  {
    id: 'cost-governance',
    numeral: 'II',
    title: 'Cost Governance',
    label: 'Governance',
    sections: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'budget-enforcement', label: 'Budget Enforcement' },
      { id: 'loop-detection', label: 'Loop Detection' },
      { id: 'rate-limiting', label: 'Rate Limiting' },
    ],
  },
  {
    id: 'hitl',
    numeral: 'III',
    title: 'Human-in-the-Loop',
    label: 'HITL',
    sections: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'workflow', label: 'HITL Workflow' },
      { id: 'operator-review', label: 'Operator Review' },
      { id: 'dynamic-feedback', label: 'Dynamic Feedback' },
    ],
  },
  {
    id: 'enterprise-ready',
    numeral: 'IV',
    title: 'Enterprise Ready',
    label: 'Enterprise',
    sections: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'zero-trust', label: 'Zero-Trust Security' },
      { id: 'audit-logs', label: 'Immutable Audit Logs' },
      { id: 'ephemeral-environments', label: 'Ephemeral Environments' },
    ],
  },
];

/* ─── Scroll minimap — vertical tick bar, exactly like cofounder ─── */
function ScrollMinimap() {
  const [scrollPct, setScrollPct] = useState(0);
  const TICK_COUNT = 50;

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setScrollPct(max > 0 ? el.scrollTop / max : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeIdx = scrollPct * (TICK_COUNT - 1);

  return (
    <div
      className="flex flex-col items-end cursor-pointer touch-none"
      style={{ gap: '5px', width: '14px' }}
    >
      {Array.from({ length: TICK_COUNT }).map((_, i) => {
        const tickP = i / (TICK_COUNT - 1);
        const diff = tickP - scrollPct; // positive if tick is below scroll

        let width = 7;
        let bg = 'rgba(32, 32, 32, 0.16)';

        if (diff <= 0) {
          width = 14;
          bg = 'rgb(0, 176, 255)';
        } else if (diff <= 0.015) {
          width = 12.25;
          bg = 'rgb(52, 184, 244)';
        } else if (diff <= 0.03) {
          width = 8.75;
          bg = 'rgb(156, 201, 221)';
        } else if (diff <= 0.045) {
          width = 7;
          bg = 'rgb(208, 209, 210)';
        }

        return (
          <span
            key={i}
            className="shrink-0 rounded-full"
            style={{
              width: `${width}px`,
              height: '2px',
              background: bg,
              transition: 'background 120ms linear, width 120ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── Divider between nav items ─── */
function NavDivider() {
  return (
    <span className="relative mx-[6px] self-center shrink-0 w-[1px] h-[14px] translate-y-[4px]">
      <span
        className="absolute inset-0"
        style={{ background: 'rgba(32,32,32,0.12)' }}
      />
    </span>
  );
}

export default function ChapterLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = (id: string) => pathname.includes(`/chapter/${id}`);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const currentChapter = CHAPTERS.find(c => pathname.includes(`/chapter/${c.id}`));
    if (!currentChapter) return;

    if (currentChapter.sections.length > 0) {
      setActiveSection(currentChapter.sections[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const timeout = setTimeout(() => {
      currentChapter.sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div
      className="min-h-screen flex flex-col antialiased selection:bg-black selection:text-white"
      style={{ background: '#F5F5F2' }}
    >
      {/* ── HEADER ── exact clone of cofounder header */}
      <header
        className="site-header fixed top-0 left-0 right-0 z-[201] flex justify-center"
        style={{
          background: '#F5F5F2',
          borderBottom: '1px solid #E8E7E6',
          boxShadow: '0 1px 0 0 #fff',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-[20px] min-[476px]:px-[32px] md:px-[20px] py-[18px] min-[1000px]:py-0 min-[1000px]:pt-[26px] min-[1000px]:pb-[23px] flex items-center justify-between">
          {/* Logo */}
          <Link className="shrink-0 flex items-center gap-2.5" aria-label="Home" href="/">
            <img src="/checkpost-icon.png" alt="Checkpost Logo" className="w-7 h-7 object-contain" />
            <span
              className="text-black transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-geist-pixel-grid, monospace)',
                fontWeight: 'bold',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
              }}
            >
              Checkpost
            </span>
          </Link>

          {/* Desktop nav — empty center, CTA on right */}
          <div className="hidden min-[1000px]:block">
            <nav className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-[14px] font-[500] text-black/60 hover:text-black transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="cta-btn-dark bg-black !text-white inline-flex items-center justify-center gap-[10px] px-[16px] h-[36px] rounded-[8px] text-[13px] font-[500] hover:opacity-90 transition-opacity no-underline whitespace-nowrap"
              >
                Sign up
              </Link>
            </nav>
          </div>

          {/* Mobile: just the CTA */}
          <div className="flex items-center min-[1000px]:hidden gap-3">
            <Link
              href="/login"
              className="text-[13px] sm:text-[14px] font-[500] text-black/60 hover:text-black transition-colors px-2 py-1"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="cta-btn-dark bg-black !text-white inline-flex items-center justify-center gap-[10px] px-[16px] h-[32px] rounded-[8px] text-[13px] sm:text-[14px] font-[500] hover:opacity-90 transition-opacity no-underline whitespace-nowrap"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* ── BODY: sidebar + content + minimap ── */}
      <div className="w-full flex-1 pt-[73px] min-[1000px]:pt-[69px] flex justify-center">
        <div className="w-full max-w-[1440px] flex flex-row items-stretch px-0 min-[1000px]:px-[32px] relative" suppressHydrationWarning>

          {/* LEFT SIDEBAR */}
          <aside className="shrink-0 w-[260px] xl:w-[280px] hidden min-[1000px]:flex flex-col sticky top-[89px] h-[calc(100vh-89px)] overflow-y-auto z-10 pt-[40px] pl-[0px] pr-[8px] pb-[40px]">

            {/* CTA block */}
            <div className="mb-[56px]">
              <p
                className="text-[13px] leading-[150%] font-[440] mb-[12px]"
                style={{ color: 'rgba(32,32,32,0.50)' }}
              >
                How to run secure agents
                <br />
                with Checkpost
              </p>
              <Link
                href="/signup"
                className="cta-btn-dark bg-[#262323] !text-white inline-flex items-center justify-center gap-[10px] px-[16px] h-[36px] rounded-[8px] text-[13px] font-[500] hover:opacity-90 transition-opacity no-underline w-fit"
              >
                Try in Checkpost <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Chapter nav */}
            <nav className="flex flex-col gap-[40px]">
              {CHAPTERS.map((chapter) => {
                const active = isActive(chapter.id);
                return (
                  <div key={chapter.id} className="flex flex-col gap-[20px]">
                    {/* Chapter title */}
                    <Link
                      href={`/chapter/${chapter.id}`}
                      className="flex items-center gap-[12px] no-underline group"
                    >
                      <span
                        className="font-mono text-[12px] shrink-0 transition-colors duration-150"
                        style={{ color: active ? 'rgba(32,32,32,0.55)' : 'rgba(32,32,32,0.28)' }}
                      >
                        ({chapter.numeral})
                      </span>
                      <span
                        className="text-[15px] leading-[140%] font-[520] transition-colors duration-150 group-hover:text-[#111]"
                        style={{ color: active ? '#111' : 'rgba(32,32,32,0.48)' }}
                      >
                        {chapter.title}
                      </span>
                    </Link>

                    {/* Sub-sections — only rendered when active */}
                    {active && (
                      <div className="flex flex-col gap-[16px] ml-[34px]">
                        {chapter.sections.map((sec) => {
                          const isSecActive = sec.id === activeSection;
                          return (
                            <Link
                              key={sec.id}
                              href={`/chapter/${chapter.id}#${sec.id}`}
                              className="flex items-center gap-[16px] no-underline group transition-colors duration-150"
                              style={{ color: '#5B5B5B' }}
                            >
                              {/* Sidebar bullet */}
                              {isSecActive ? (
                                <div className="w-[8px] h-[8px] rounded-[5.5px] shrink-0 transition-all duration-200 bg-[#B2E7FF] shadow-[0_1px_1px_0_rgba(0,126,183,0.70),inset_0_0.5px_0.2px_0_#FFF,0_0_0_3px_#96DEFF]"></div>
                              ) : (
                                <span
                                  className="w-[8px] h-[8px] rounded-full shrink-0 transition-all duration-150"
                                  style={{
                                    border: '1.5px solid rgba(32,32,32,0.12)',
                                  }}
                                />
                              )}
                              <span className="text-[14px] leading-[140%] group-hover:text-[#111] transition-colors duration-150">
                                {sec.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 w-full min-w-0 px-[20px] sm:px-[32px] min-[1000px]:px-[40px] xl:px-[64px] py-[40px] min-[1000px]:py-[32px] pb-[120px] md:pb-[200px] flex justify-center">
            <div className="w-full max-w-[680px]">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* RIGHT MINIMAP (Fixed to viewport) */}
      <div className="hidden min-[1000px]:flex flex-col items-end pr-[20px] xl:pr-[40px] fixed right-0 top-[89px] h-[calc(100vh-89px)] justify-center z-[100] pointer-events-none">
        <div className="pointer-events-auto">
          <ScrollMinimap />
        </div>
      </div>
    </div>
  );
}
