import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Check } from "lucide-react";
import { NavbarScrollEffect } from "@/app/components/NavbarScrollEffect";

export default function LandingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.6);
        }
      `}} />
      <div hidden={true}>
        {/* $ */}
        {/* /$ */}
      </div>
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        style={
          {
            position: "absolute",
            width: "0",
            height: "0",
            overflow: "hidden",
          } as any
        }
      >
        <defs>
          <filter id="headline-inner-shadow-dark">
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="1.2"
            ></feGaussianBlur>
            <feOffset dx="0" dy="2"></feOffset>
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            ></feComposite>
            <feColorMatrix
              in="shadowDiff"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.75 0"
              result="shadow"
            ></feColorMatrix>
            <feComposite
              in="shadow"
              in2="SourceGraphic"
              operator="over"
            ></feComposite>
          </filter>
          <filter id="headline-inner-shadow-light">
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="1.2"
            ></feGaussianBlur>
            <feOffset dx="0" dy="2"></feOffset>
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            ></feComposite>
            <feColorMatrix
              in="shadowDiff"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.75 0"
              result="shadow"
            ></feColorMatrix>
            <feComposite
              in="shadow"
              in2="SourceGraphic"
              operator="over"
            ></feComposite>
          </filter>
        </defs>
      </svg>
      <header
        id="site-header"
        className="site-header fixed top-0 left-0 right-0 z-[201] flex justify-center bg-transparent border-b border-transparent transition-all duration-300 ease-in-out text-white"
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .site-header.scrolled {
            background-color: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom-color: rgba(0, 0, 0, 0.1);
            color: black;
          }
          .site-header.scrolled .nav-link {
            color: rgba(0, 0, 0, 0.6) !important;
          }
          .site-header.scrolled .nav-link:hover {
            color: black !important;
          }
          .site-header.scrolled .cta-btn-dark {
            background-color: #212121 !important;
            background-image: none !important;
            color: white !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.15) !important;
          }
          .site-header.scrolled .cta-btn-dark:hover {
            background-color: #111 !important;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.2) !important;
          }
          .site-header:not(.scrolled) .cta-btn-dark {
            background-color: white !important;
            background-image: none !important;
            color: black !important;
          }
        `}} />
        <NavbarScrollEffect />
        <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[20px] min-[476px]:px-[32px] md:px-[20px] py-[16px] flex items-center justify-between gap-2">
          <a className="shrink-0 flex items-center" aria-label="Home" href="/">
            <span
              className="text-inherit text-2xl sm:text-3xl md:text-4xl transition-colors duration-300"
              style={{
                fontFamily: "var(--font-geist-pixel-grid, monospace)",
                fontWeight: "bold",
              }}
            >
              Checkpost
            </span>
          </a>

          <nav className="hidden min-[1000px]:flex items-center gap-[24px]">
            <a
              className="nav-link text-[15px] font-[500] text-inherit/80 hover:text-inherit transition-colors"
              href="/login"
            >
              Log in
            </a>
            <a
              className="cta-btn-dark px-[16px] py-[8px] rounded-[8px] text-[14px] font-[500] hover:opacity-90 transition-all"
              href="/signup"
            >
              Sign up
            </a>
          </nav>
          <div className="flex items-center min-[1000px]:hidden gap-2 sm:gap-3">
            <a
              className="nav-link text-[13px] sm:text-[14px] font-[500] text-inherit/80 hover:text-inherit transition-colors px-2 py-1"
              href="/login"
            >
              Log in
            </a>
            <a
              className="cta-btn-dark px-[12px] py-[8px] rounded-[6px] text-[13px] sm:text-[14px] font-[500] hover:opacity-90 transition-all flex items-center justify-center shrink-0"
              href="/signup"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>
      <div
        id="site-hero"
        className="relative w-full [--hero-min-height:720px] md:[--hero-min-height:620px] pixel-bg-hero pb-[69px]"
      >
        <div className="relative w-full h-screen min-h-[720px] md:min-h-[620px] overflow-hidden">
          <video
            aria-hidden="true"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            preload="metadata"
            poster="/hero/cofounder-2-hero-poster.webp"
            className="absolute right-0 top-0 h-full min-w-full max-w-none object-cover object-right translate-x-[50%] sm:translate-x-0"
            style={
              {
                width:
                  "max(100%, calc(max(100dvh, var(--hero-min-height)) * 1.710526))",
              } as any
            }
          >
            <source src="/hero/cofounder-2-hero.webm" type="video/webm" />
            <source src="/hero/cofounder-2-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-[1120px]:hidden">
          <div
            className="hero-notif-position max-[676px]:hidden max-[500px]:hidden"
            style={
              {
                "--notif-top-dvh": "46dvh",
                "--notif-top-min": "350px",
                "--notif-right-image-ratio": "0.22899999999999998",
                "--notif-mid-right-image-ratio": "0.217",
                "--notif-medium-right-image-ratio": "0.24100000000000002",
                "--notif-small-right-image-ratio": "0.23",
                "--notif-font-size": "12px",
                "--notif-translate-y": "-85%",
                "--notif-mid-translate-y": "-84%",
                "--notif-medium-translate-y": "-77%",
                "--notif-small-translate-y": "-74%",
                "--notif-perspective": "300px",
                "--notif-rotate-y": "-12deg",
                "--notif-rotate-x": "-2deg",
                "--notif-rotate-z": "2deg",
                "--notif-scale": "0.88",
                "--notif-skew-y": "0deg",
                "--notif-skew-x": "1deg",
                "--notif-glass-top-alpha": "0.6",
                "--notif-glass-bottom-alpha": "0.8",
                "--notif-glass-highlight-alpha": "0.79",
                "--notif-glass-blur": "16px",
                "--notif-glass-layer-blur": "16px",
                "--notif-glass-saturation": "1.19",
                "--notif-status-text-alpha": "0.65",
                "--notif-label-text-alpha": "1",
              } as any
            }
          >
            <div className="hero-notif-stack relative">
              <div className="hero-notif-stack-list"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-start pt-[max(15dvh,92px)] max-[500px]:pt-[calc(75px+91px)]">
          <div className="w-full max-w-[1440px] mx-auto px-[20px]">
            <div
              style={
                {
                  position: "relative",
                  overflow: "visible",
                  paddingBottom: "50px",
                } as any
              }
            >
              <div>
                <div className="max-w-[720px]">
                  <div
                    className="hero-stagger"
                    style={{ "--stagger": "0" } as any}
                  >
                    <h1 className="m-0 font-normal hero-gradient-text text-left max-w-[20ch] xl:max-w-[780px] text-[46px] leading-[108%] filter-[drop-shadow(0_1px_3px_rgba(0,0,0,0.12))] max-[900px]:text-[38px] max-[500px]:text-[34px] max-[500px]:font-normal max-[500px]:leading-[110%]">
                      Build products and manage your infrastructure with Checkpost
                    </h1>
                  </div>
                  <p
                    className="hero-stagger mt-5 max-w-[640px] pl-[2px] text-left text-[16px] font-[460] leading-[140%] tracking-[0.15px] text-[rgba(255,255,255,0.8)] [text-shadow:0_1px_1px_rgba(0,0,0,0.08)] max-[500px]:mt-4"
                    style={
                      {
                        "--stagger": "1",
                        fontFamily:
                          '"TT Neoris Trial Variable", var(--font-neoris), sans-serif',
                      } as any
                    }
                  >
                    Design, build, and deploy products with engineering agents. Once you're live, infrastructure and security agents monitor and fix issues.
                  </p>
                  <div
                    className="hero-stagger mt-6 flex flex-wrap items-center gap-3 max-[500px]:mt-5"
                    style={{ "--stagger": "2" } as any}
                  >
                    <a
                      className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface"
                      data-analytics-cta="run_a_company"
                      data-analytics-location="hero"
                      data-experiment-key="marketing_homepage_hero_primary_cta"
                      data-experiment-variant="control"
                      href="/signup"
                    >
                      <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                        <span className="text-[15px] font-[460] tracking-[0.15px]">
                          View Dashboard
                        </span>
                      </span>
                    </a>
                    <a
                      className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] glass-pill-btn text-white glass-hero-btn"
                      data-analytics-cta="check_out_the_launch"
                      data-analytics-location="hero_secondary"
                      data-experiment-key="marketing_homepage_hero_primary_cta"
                      data-experiment-variant="control"
                      href="/resources/introducing-cofounder-2"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-btn-blur"
                      ></span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-btn-tint"
                      ></span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 transition-opacity rounded-[8px] glass-pill-hover opacity-0 duration-200 ease-out group-hover:opacity-100"
                      ></span>
                      <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                        <span className="text-[15px] font-[460] tracking-[0.15px] -mt-px text-shadow-[0_1px_1px_rgba(0,0,0,0.2)] sm:text-shadow-none">
                          Check out the launch
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-scroll-blur" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="section-2-start"></div>
      <div
        id="social-proof"
        aria-label="social proof"
        className="w-full bg-surface flex flex-col items-center gap-8 pt-[32px] pb-[72px] max-[700px]:pt-[24px] max-[700px]:pb-[56px]"
      >
        {/* Logo Marquee */}
        <div className="w-full overflow-hidden relative">
          {/* Strong gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-48 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--surface, #FAFAF7) 40%, transparent 100%)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-48 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--surface, #FAFAF7) 40%, transparent 100%)' }} />

          <div className="logo-marquee-track flex py-5">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-[72px] px-[36px] shrink-0">
                {[
                  { file: "anthropic.svg", name: "Anthropic" },
                  { file: "openai.svg", name: "OpenAI" },
                  { file: "google.svg", name: "Google" },
                  { file: "meta.svg", name: "Meta" },
                  { file: "gemini.svg", name: "Gemini" },
                  { file: "cursor.svg", name: "Cursor" },
                  { file: "github.svg", name: "GitHub" },
                  { file: "mistral.svg", name: "Mistral" },
                  { file: "deepseek.svg", name: "DeepSeek" },
                  { file: "ollama.svg", name: "Ollama" },
                  { file: "perplexity.svg", name: "Perplexity" },
                  { file: "huggingface.svg", name: "HuggingFace" },
                  { file: "xai.svg", name: "xAI" },
                  { file: "qwen.svg", name: "Qwen" },
                ].map(({ file, name }) => (
                  <div key={name + i} className="logo-marquee-item flex items-center justify-center" style={{ height: "84px" }}>
                    <img
                      src={`/ai-logos/${file}`}
                      alt={name}
                      style={{ height: "72px", width: "auto", objectFit: "contain", maxWidth: "220px" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes logo-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .logo-marquee-track {
              animation: logo-marquee 32s linear infinite;
            }
            .logo-marquee-track:hover {
              animation-play-state: paused;
            }
            .logo-marquee-item {
              opacity: 0.45;
              filter: grayscale(1);
              transition: opacity 0.25s ease, filter 0.25s ease;
            }
            .logo-marquee-item:hover {
              opacity: 1;
              filter: grayscale(0);
            }
          ` }} />
        </div>

        <p className="m-0 text-[13px] font-[460] leading-[140%] tracking-[0.13px] text-ink-faint text-center max-w-[366px]">
          <span className="shimmer">over 10,650 agents</span>{" "}
          are secured by Checkpost
        </p>
      </div>
<section className="relative w-full min-h-0 flex flex-col bg-[#1a6fd1] text-white overflow-hidden" aria-label="All the tools and systems your company needs" style={{backgroundImage: 'url("/build-ui-bits/section-bg.avif")', backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat'}}><div aria-hidden="true" className="pointer-events-none absolute inset-0 z-2 overflow-hidden select-none pixel-bg"><img aria-hidden="true" alt="Left carousel decor" loading="lazy" width={812} height={725} decoding="async" data-nimg={1} className="absolute h-full max-[767px]:w-[80vw] w-[50vw] max-h-[725px] max-w-[812px] object-contain object-bottom-left bottom-[40px] left-0" style={{color: 'transparent'}} src="/build-ui-bits/left-decor.png?dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Right top carousel decor" loading="lazy" width={694} height={434} decoding="async" data-nimg={1} className="absolute max-[767px]:hidden h-full w-full max-h-[434px] max-w-[694px] object-contain object-bottom-right min-[1280px]:top-[70px] -right-[4vw] min-[1728px]:-right-[2vw] min-[2000px]:right-0 min-[2000px]:top-[50px] min-[2600px]:hidden" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fright-top-decor.png&w=750&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x, /_next/image?url=%2Fbuild-ui-bits%2Fright-top-decor.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2x" src="/_next/image?url=%2Fbuild-ui-bits%2Fright-top-decor.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Right bottom carousel decor" loading="lazy" width={694} height={684} decoding="async" data-nimg={1} className="absolute h-full min-[1440px]:w-[36vw] w-full max-h-[684px] max-w-[694px] object-contain object-bottom-right min-[1440px]:bottom-[3vw] bottom-[40px] right-0 min-[2600px]:bottom-[80px]" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fright-bottom-decor.png&w=750&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x, /_next/image?url=%2Fbuild-ui-bits%2Fright-bottom-decor.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2x" src="/_next/image?url=%2Fbuild-ui-bits%2Fright-bottom-decor.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Left top carousel decor" loading="lazy" width={219} height={317} decoding="async" data-nimg={1} className="absolute h-full w-[16vw] max-h-[317px] max-w-[219px] object-contain object-bottom-left bottom-[70px] right-0" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fright-small-decor.png&w=256&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x, /_next/image?url=%2Fbuild-ui-bits%2Fright-small-decor.png&w=640&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2x" src="/_next/image?url=%2Fbuild-ui-bits%2Fright-small-decor.png&w=640&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Carousel top decor" loading="lazy" width={1920} height={92} decoding="async" data-nimg={1} className="absolute h-full w-full min-w-screen max-h-[92px] object-cover min-[767px]:object-[95%_bottom] min-[1440px]:object-[100%_bottom] top-0 hidden max-[1920px]:block" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-top.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x, /_next/image?url=%2Fbuild-ui-bits%2Fcarousel-top.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2x" src="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-top.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Carousel top decor" loading="lazy" width={2545} height={92} decoding="async" data-nimg={1} className="absolute h-full w-full min-w-screen max-h-[92px] object-cover -top-px hidden min-[1920px]:block min-[2600px]:hidden" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-top-big.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x" src="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-top-big.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Carousel bottom decor - desktop" loading="lazy" width={1920} height={92} decoding="async" data-nimg={1} className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-[80%_bottom] min-[1000px]:block min-[1440px]:hidden" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-1000.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x, /_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-1000.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2x" src="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-1000.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Carousel bottom decor - mobile" loading="lazy" width={1920} height={92} decoding="async" data-nimg={1} className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-[80%_bottom] hidden max-[768px]:block" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-mobile.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x, /_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-mobile.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2x" src="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-mobile.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Carousel bottom decor" loading="lazy" width={1920} height={92} decoding="async" data-nimg={1} className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-top-center hidden min-[1440px]:block min-[2220px]:hidden" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x, /_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2x" src="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /><img aria-hidden="true" alt="Carousel bottom decor" loading="lazy" width={2545} height={92} decoding="async" data-nimg={1} className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-top-center hidden min-[2220px]:block" style={{color: 'transparent'}} srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-big.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1x" src="/_next/image?url=%2Fbuild-ui-bits%2Fcarousel-bottom-big.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /></div><div aria-hidden="true" className="pointer-events-none absolute left-0 bottom-1/3 z-1 w-[50vw] max-w-[391px] select-none will-change-transform"><img alt="" loading="lazy" width={784} height={344} decoding="async" data-nimg={1} className="h-auto w-full" style={{color: 'transparent'}} sizes="150px" srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=32&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 32w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=48&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 48w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=64&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 64w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=96&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 96w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=128&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 128w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=256&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 256w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=384&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 384w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=640&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 640w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=750&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 750w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=828&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 828w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=1080&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1080w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=1200&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1200w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1920w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=2048&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2048w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 3840w" src="/_next/image?url=%2Fbuild-ui-bits%2Fclouds-left.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /></div><div aria-hidden="true" className="pointer-events-none absolute right-0 bottom-1/3 z-1 w-[50vw] max-w-[488px] select-none will-change-transform"><img alt="" loading="lazy" width={960} height={422} decoding="async" data-nimg={1} className="h-auto w-full" style={{color: 'transparent'}} sizes="180px" srcSet="/_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=32&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 32w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=48&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 48w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=64&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 64w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=96&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 96w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=128&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 128w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=256&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 256w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=384&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 384w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=640&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 640w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=750&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 750w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=828&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 828w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=1080&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1080w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=1200&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1200w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1920w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=2048&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2048w, /_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 3840w" src="/_next/image?url=%2Fbuild-ui-bits%2Fclouds-right.png&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /></div><div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pt-[100px] min-[1000px]:pb-[220px] pb-[160px] min-[767px]:pb-[100px]"><div className="mx-auto max-w-[800px] max-[1000px]:w-full shrink-0 px-6 mt-[100px]"><h2 style={{lineHeight: '115%', color: '#FFF', textShadow: '0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)'}} className="m-0 mx-auto text-center text-[28px] min-[768px]:text-[32px] min-[1000px]:text-[40px] max-w-[20ch]">Checkpost is a Web Application Firewall designed exclusively for{/* */} <span style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', textShadow: 'none'}}>autonomous AI agents.</span></h2><p className="m-0 mx-auto mt-5 max-w-[580px] text-center text-[16px] font-[460] leading-[150%] text-white/70">Give agents the context, tools, and approvals they need to keep company work moving.</p></div>
<div className="relative z-20 mt-[40px] w-full min-w-0 max-w-[800px] shrink-0 self-center box-border px-4 md:px-6"><div className="grid w-full min-w-0 grid-cols-1 min-[768px]:grid-cols-2 max-[1000px]:max-w-[500px] gap-6 min-[767px]:gap-y-8! md:gap-4 lg:gap-x-6 min-[1000px]:grid-cols-3"><button type="button" className="group min-w-0 flex items-center gap-3 md:gap-4 text-left rounded-lg md:rounded-none p-2 md:p-0 -m-2 md:m-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white/80 text-white" aria-pressed="true"><span className="shrink-0 loader-bar-after" style={{width: 1, minWidth: 1, maxWidth: 1, height: 44, flex: '0 0 3px', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.35)', transform: 'translateZ(0)'}} aria-hidden="true"><span className="absolute left-0 top-0 bg-white" style={{width: 1, height: '0%', transform: 'translateZ(0)'}} /></span><span className="text-[15px] md:text-[16px] font-[460] leading-[140%] tracking-[0.01em] max-w-[28ch] md:max-w-none">The Deterministic Policy Engine (The Rulebook)</span></button><button type="button" className="group min-w-0 flex items-center gap-3 md:gap-4 text-left rounded-lg md:rounded-none p-2 md:p-0 -m-2 md:m-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white/80 text-white/40 hover:text-white/60" aria-pressed="false"><span className="shrink-0 loader-bar-after" style={{width: 1, minWidth: 1, maxWidth: 1, height: 44, flex: '0 0 3px', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.35)', transform: 'translateZ(0)'}} aria-hidden="true" /><span className="text-[15px] md:text-[16px] font-[460] leading-[140%] tracking-[0.01em] max-w-[28ch] md:max-w-none">Cost Governance and Loop Protection (The Hard Stop)</span></button><button type="button" className="group min-w-0 flex items-center gap-3 md:gap-4 text-left rounded-lg md:rounded-none p-2 md:p-0 -m-2 md:m-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white/80 text-white/40 hover:text-white/60" aria-pressed="false"><span className="shrink-0 loader-bar-after" style={{width: 1, minWidth: 1, maxWidth: 1, height: 44, flex: '0 0 3px', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.35)', transform: 'translateZ(0)'}} aria-hidden="true" /><span className="text-[15px] md:text-[16px] font-[460] leading-[140%] tracking-[0.01em] max-w-[28ch] md:max-w-none">Human-in-the-Loop (HITL) Interruption (The Dashboard)</span></button></div></div><div className="relative z-0 mt-[50px] flex shrink-0 items-center justify-center overflow-hidden px-4 w-full max-[767px]:h-[577px]! max-[1000px]:h-[677px]!" style={{height: 507}}><div className="relative overflow-hidden mx-auto max-[1000px]:max-w-[500px] max-[767px]:max-h-[577px] max-[1000px]:h-[677px]! max-[1000px]:mx-auto max-[1000px]:w-full!" style={{width: 'min(100%, 800px)', height: 507}}><div className="absolute top-0 left-1/2 -translate-x-1/2 will-change-transform max-[1000px]:max-w-[500px] max-[1000px]:mx-auto max-[1000px]:w-full!" style={{width: 800, height: 471}}><div className="flex h-full w-full min-h-0 items-center justify-center"><div className="relative min-[1000px]:w-[800px] w-full h-full rounded-[20px] bg-[rgba(232,231,230,0.32)] p-3"><div className="flex h-full min-h-0 flex-col items-center rounded-xl bg-[rgba(251,251,248,0.95)] backdrop-blur-[45px] [-webkit-backdrop-filter:blur(45px)] shadow-[0_0_0.454px_1.908px_rgba(255,255,255,0.35)_inset,0_2.544px_0_0_#FFF_inset,0_0_2.544px_0_rgba(0,0,0,0.25),0_0_0_5.088px_rgba(232,231,230,0.32)]"><div className="flex min-h-0 px-2 w-full flex-1 rounded-[14px] py-2 items-center justify-center bg-[#F3F7F8]"><svg width={134} height={6} viewBox="0 0 134 6" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.35" x2="130.963" y2="-0.35" transform="matrix(1 0 0 -1 0 2.64697)" stroke="#B7B7B7" strokeWidth="0.7" strokeDasharray="2 2" /><g filter="url(#filter0_dddii_1413_18559)"><circle cx="130.376" cy="2.89903" r="2.00694" fill="#F5F5F2" /><circle cx="130.376" cy="2.89903" r="1.65694" stroke="#BFBFBF" strokeWidth="0.7" /></g><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 122.98 0.668945)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 120.592 3.1543)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 105.578 0.668945)" fill="#69B4E5" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 103.189 3.1543)" fill="#69B4E5" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 106.45 3.1543)" fill="#69B4E5" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 88.0894 0.668945)" fill="#69B4E5" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 22.7896 0.519043)" fill="#69B4E5" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 35.2197 0.519043)" fill="#69B4E5" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 39.2686 2.95752)" fill="#69B4E5" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 85.5322 0.668945)" fill="#A6D9E9" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 31.0762 0.519043)" fill="#A6D9E9" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 18.646 0.519043)" fill="#A6D9E9" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 35.125 2.95752)" fill="#A6D9E9" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 12.5049 0.519043)" fill="#A6D9E9" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 101.435 0.668945)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 99.0464 3.1543)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 71.6812 0.668945)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 59.397 3.13867)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 14.5029 0.519043)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 18.666 2.95947)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 26.9331 0.519043)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 37.6641 0.519043)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 8.36182 0.519043)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 4.99219 0.519043)" fill="#46ABFD" /><rect width="2.48603" height="2.48603" transform="matrix(-1 0 0 1 41.7129 2.95752)" fill="#46ABFD" /><defs><filter id="filter0_dddii_1413_18559" x="127.477" y="0.000117064" width="5.79762" height="5.79762" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="0.445986" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1413_18559" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="0.445986" /><feGaussianBlur stdDeviation="0.222993" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect1_dropShadow_1413_18559" result="effect2_dropShadow_1413_18559" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="0.222993" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" /><feBlend mode="normal" in2="effect2_dropShadow_1413_18559" result="effect3_dropShadow_1413_18559" /><feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1413_18559" result="shape" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="-0.445986" /><feGaussianBlur stdDeviation="0.222993" /><feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" /><feBlend mode="normal" in2="shape" result="effect4_innerShadow_1413_18559" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="0.445986" /><feGaussianBlur stdDeviation="0.222993" /><feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" /><feBlend mode="normal" in2="effect4_innerShadow_1413_18559" result="effect5_innerShadow_1413_18559" /></filter></defs></svg><div className="min-[1000px]:mx-[20px] my-[30px] flex h-[330px] min-h-0 w-full max-w-[500px] flex-col items-stretch rounded-[14px] p-[3px] shadow-[0_5px_14px_0_rgba(0,0,0,0.08),0_0_0.357px_1.5px_rgba(255,255,255,0.35)_inset,0_2px_0_0_#FFF_inset,0_0_3px_0_rgba(0,0,0,0.16),0_0_5px_0_#FFF]"><div className="flex w-full min-h-0 flex-1 flex-col"><nav className="hidden min-[1000px]:flex items-center gap-1 px-2 py-[14px]"><button type="button" style={{height: '17.141px', padding: '2.857px 5.714px', gap: '2.857px'}} className="inline-flex items-center justify-center rounded-[2.857px] transition font-[family-name:var(--font-neoris),sans-serif] border-[0.714px] border-[rgba(32,32,32,0.05)] bg-[rgba(32,32,32,0.05)] text-[10px] font-[430] text-[rgba(32,32,32,0.8)]">Inspect request</button><button type="button" style={{height: '17.141px', padding: '2.857px 5.714px', gap: '2.857px'}} className="inline-flex items-center justify-center rounded-[2.857px] transition font-[family-name:var(--font-neoris),sans-serif] border-[0.714px] border-transparent text-[10px] font-[460] text-[rgba(38,35,35,0.5)] hover:text-[rgba(38,35,35,0.85)]">Check policies</button><button type="button" style={{height: '17.141px', padding: '2.857px 5.714px', gap: '2.857px'}} className="inline-flex items-center justify-center rounded-[2.857px] transition font-[family-name:var(--font-neoris),sans-serif] border-[0.714px] border-transparent text-[10px] font-[460] text-[rgba(38,35,35,0.5)] hover:text-[rgba(38,35,35,0.85)]">Verify budget</button><button type="button" style={{height: '17.141px', padding: '2.857px 5.714px', gap: '2.857px'}} className="inline-flex items-center justify-center rounded-[2.857px] transition font-[family-name:var(--font-neoris),sans-serif] border-[0.714px] border-transparent text-[10px] font-[460] text-[rgba(38,35,35,0.5)] hover:text-[rgba(38,35,35,0.85)]">Approve action</button></nav><div className="relative flex-1 overflow-hidden rounded-[12px] bg-[rgba(255,255,255,0.80)] px-6 pt-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0.357px_1.5px_rgba(255,255,255,0.35)_inset,0_2px_0_0_#FFF_inset,0_0_3px_0_rgba(0,0,0,0.16),0_0_5px_0_#FFF]"><div className="flex items-center justify-between pb-3"><div className="flex items-center gap-2.5"><div className="flex size-[18px] shrink-0 items-center justify-center rounded-[4px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.06)]"><img src="/_assets/static/logo.png" alt="Logo" className="w-[12px] h-[12px] object-contain" /></div><span className="text-[13px] font-[460] leading-none text-[rgba(32,32,32,0.9)] font-[family-name:var(--font-neoris),sans-serif]">Policy Violation Detected</span></div><div className="flex items-center gap-1"><button type="button" className="flex size-6 shrink-0 items-center justify-center rounded-md border-0 bg-transparent text-[rgba(38,35,35,0.5)] hover:text-[rgba(38,35,35,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5D86EE]/50" aria-label="Previous"><svg width={10} height={10} viewBox="0 0 10 10" fill="none" aria-hidden="true" className="block shrink-0"><path d="M6.5 1.5L3 5L6.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></button><button type="button" className="flex size-6 shrink-0 items-center justify-center rounded-md border-0 bg-transparent text-[rgba(38,35,35,0.5)] hover:text-[rgba(38,35,35,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5D86EE]/50" aria-label="Next"><svg width={10} height={10} viewBox="0 0 10 10" fill="none" aria-hidden="true" className="block shrink-0"><path d="M3.5 1.5L7 5L3.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div></div><div className="h-px w-full bg-[rgba(0,0,0,0.06)]" aria-hidden="true" /><div className="flex items-center gap-1 min-[1000px]:gap-10 py-2.5"><span className="w-[68px] shrink-0 text-[10px] font-[430] leading-[160%] text-[rgba(38,35,35,0.7)] font-[family-name:var(--font-neoris),sans-serif]">Agent</span><span className="text-[10px] flex flex-col min-[1000px]:flex-row leading-[160%] text-[rgba(32,32,32,0.8)] font-[family-name:var(--font-neoris),sans-serif]"><span className="font-[500]">Database Admin Agent</span><span className="min-[1000px]:ml-3 font-[430] text-nowrap truncate text-[rgba(38,35,35,0.7)]">dba_agent_01</span></span></div><div className="h-px w-full bg-[rgba(0,0,0,0.06)]" aria-hidden="true" /><div className="flex items-center gap-1 min-[1000px]:gap-10 py-2.5"><span className="w-[68px] shrink-0 text-[10px] font-[430] leading-[160%] text-[rgba(38,35,35,0.7)] font-[family-name:var(--font-neoris),sans-serif]">Target</span><span className="text-[10px] flex flex-col min-[1000px]:flex-row leading-[160%] text-[rgba(32,32,32,0.8)] font-[family-name:var(--font-neoris),sans-serif]"><span className="font-[500]">Production Database</span><span className="min-[1000px]:ml-3 font-[430] text-nowrap truncate text-[rgba(38,35,35,0.7)]">rds-us-east-1-prod</span></span></div><div className="h-px w-full bg-[rgba(0,0,0,0.06)]" aria-hidden="true" /><div className="flex items-center gap-1 min-[1000px]:gap-10 py-2.5"><span className="w-[68px] shrink-0 text-[10px] font-[430] leading-[160%] text-[rgba(38,35,35,0.7)] font-[family-name:var(--font-neoris),sans-serif]">Command</span><span className="text-[10px] flex flex-col min-[1000px]:flex-row leading-[160%] text-[rgba(32,32,32,0.8)] font-[family-name:var(--font-neoris),sans-serif]"><span className="font-[500]">DROP TABLE users CASCADE;</span></span></div><div className="h-px w-full bg-[rgba(0,0,0,0.06)]" aria-hidden="true" /><div className="mt-3 flex flex-col gap-2.5 text-[10px] font-[430] leading-[160%] text-[rgba(38,35,35,0.7)] font-[family-name:var(--font-neoris),sans-serif]"><p className="m-0">Alert: Destructive action intercepted.</p><p className="m-0">The agent 'dba_agent_01' attempted to execute a highly destructive SQL command against the production database.</p><p className="m-0">The deterministic policy engine has paused this action because 'DROP TABLE' is strictly denied in the default policies for this agent. The workflow is paused pending human approval. To resume or kill the process, review the dashboard.</p></div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[rgba(255,255,255,0.95)] to-transparent" /></div></div></div><svg width={134} height={6} viewBox="0 0 134 6" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="133.274" y1="2.99697" x2="2.31177" y2="2.99697" stroke="#B7B7B7" strokeWidth="0.7" strokeDasharray="2 2" /><g filter="url(#filter0_dddii_1435_24113)"><circle cx="2.00694" cy="2.00694" r="2.00694" transform="matrix(-1 0 0 1 4.90576 0.89209)" fill="#F5F5F2" /><circle cx="2.00694" cy="2.00694" r="1.65694" transform="matrix(-1 0 0 1 4.90576 0.89209)" stroke="#BFBFBF" strokeWidth="0.7" /></g><rect x="10.2944" y="0.668945" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="12.6826" y="3.1543" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="27.6968" y="0.668945" width="2.48603" height="2.48603" fill="#69B4E5" /><rect x="30.085" y="3.1543" width="2.48603" height="2.48603" fill="#69B4E5" /><rect x="26.8242" y="3.1543" width="2.48603" height="2.48603" fill="#69B4E5" /><rect x="45.1851" y="0.668945" width="2.48603" height="2.48603" fill="#69B4E5" /><rect x="110.485" y="0.519043" width="2.48603" height="2.48603" fill="#69B4E5" /><rect x="98.0547" y="0.519043" width="2.48603" height="2.48603" fill="#69B4E5" /><rect x="94.0059" y="2.95752" width="2.48603" height="2.48603" fill="#69B4E5" /><rect x="47.7422" y="0.668945" width="2.48603" height="2.48603" fill="#A6D9E9" /><rect x="102.198" y="0.519043" width="2.48603" height="2.48603" fill="#A6D9E9" /><rect x="114.628" y="0.519043" width="2.48603" height="2.48603" fill="#A6D9E9" /><rect x="98.1494" y="2.95752" width="2.48603" height="2.48603" fill="#A6D9E9" /><rect x="120.77" y="0.519043" width="2.48603" height="2.48603" fill="#A6D9E9" /><rect x="31.8398" y="0.668945" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="34.228" y="3.1543" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="61.5933" y="0.668945" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="73.8774" y="3.13867" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="118.771" y="0.519043" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="114.608" y="2.95947" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="106.341" y="0.519043" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="95.6104" y="0.519043" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="124.913" y="0.519043" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="128.282" y="0.519043" width="2.48603" height="2.48603" fill="#46ABFD" /><rect x="91.5615" y="2.95752" width="2.48603" height="2.48603" fill="#46ABFD" /><defs><filter id="filter0_dddii_1435_24113" x="0.000117064" y="0.000117064" width="5.79762" height="5.79762" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="0.445986" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1435_24113" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="0.445986" /><feGaussianBlur stdDeviation="0.222993" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect1_dropShadow_1435_24113" result="effect2_dropShadow_1435_24113" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="0.222993" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" /><feBlend mode="normal" in2="effect2_dropShadow_1435_24113" result="effect3_dropShadow_1435_24113" /><feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1435_24113" result="shape" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="-0.445986" /><feGaussianBlur stdDeviation="0.222993" /><feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" /><feBlend mode="normal" in2="shape" result="effect4_innerShadow_1435_24113" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="0.445986" /><feGaussianBlur stdDeviation="0.222993" /><feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" /><feBlend mode="normal" in2="effect4_innerShadow_1435_24113" result="effect5_innerShadow_1435_24113" /></filter></defs></svg></div><div className="my-3 flex justify-center"><div className="inline-flex min-[1000px]:w-[290px] w-full items-center gap-[8px] rounded-[5px] bg-[#F2F6F7] py-[6px] pl-[11px] pr-px shadow-[0_0_0_1px_#FFF_inset,0_0_0_1px_rgba(0,0,0,0.08),0_0_20px_0_rgba(0,0,0,0.03),0_36px_28px_0_rgba(0,0,0,0.02),0_25px_25px_0_rgba(0,0,0,0.02),0_4px_5px_0_rgba(0,0,0,0.06)]"><svg width={17} height={17} viewBox="0 0 17 17" fill="none" aria-hidden="true" className="block shrink-0"><rect x={15} y="7.5" width={2} height={2} fill="#6AB830" /><rect x="12.5" y="7.5" width={2} height={2} fill="#6AB830" /><rect x={15} y={5} width={2} height={2} fill="#C2E2A3" /><rect x="12.5" y={5} width={2} height={2} fill="#C2E2A3" /><rect x="12.5" y="2.5" width={2} height={2} fill="#C2E2A3" /><rect x="12.5" y={10} width={2} height={2} fill="#6AB830" /><rect x={10} y={10} width={2} height={2} fill="#6AB830" /><rect x="7.5" y={10} width={2} height={2} fill="#6AB830" /><rect x="7.5" y="7.5" width={2} height={2} fill="#6AB830" /><rect x="7.5" y="2.5" width={2} height={2} fill="#6AB830" /><rect x="7.5" y={0} width={2} height={2} fill="#6AB830" /><rect x={5} y={0} width={2} height={2} fill="#6AB830" /><rect x={5} y="2.5" width={2} height={2} fill="#6AB830" /><rect x={5} y={5} width={2} height={2} fill="#6AB830" /><rect x={0} y={5} width={2} height={2} fill="#1F5C00" /><rect x={0} y="7.5" width={2} height={2} fill="#2E7A00" /><rect x={10} y={0} width={2} height={2} fill="#C2E2A3" /><rect x="12.5" y="12.5" width={2} height={2} fill="#6AB830" /><rect x="2.5" y="12.5" width={2} height={2} fill="#2E7A00" /><rect x="7.5" y={15} width={2} height={2} fill="#2E7A00" /></svg><span className="text-[10px] font-[460] leading-[18px] text-[rgba(38,35,35,0.50)] font-[family-name:var(--font-neoris),sans-serif]">Agent execution paused</span><div className="ml-auto flex items-center gap-[2px]"><svg width={2} height={20} viewBox="0 0 2 20" fill="none" aria-hidden="true" className="block shrink-0"><g filter="url(#sliderRowDividerShadow)"><path d="M0.5 0L0.499999 20" stroke="white" /></g><defs><filter id="sliderRowDividerShadow" x={0} y={0} width="1.5" height={20} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dx="0.5" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.2 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="sliderRowDividerEffect" /><feBlend mode="normal" in="SourceGraphic" in2="sliderRowDividerEffect" result="shape" /></filter></defs></svg><button type="button" aria-label="Previous campaign" className="flex size-5 items-center justify-center rounded-md border-0 bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5D86EE]/50"><svg width={10} height={10} viewBox="0 0 10 10" fill="none" aria-hidden="true" className="block shrink-0"><g filter="url(#sliderArrow-left)"><path d="M6.179 7.41494L3.70737 4.94331L6.179 2.47168" stroke="#BFBFBF" strokeWidth="0.823877" strokeLinecap="round" strokeLinejoin="round" /></g><defs><filter id="sliderArrow-left" x="3.29565" y="2.05957" width="3.29541" height="5.76709" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha1" /><feOffset dy="0.274626" /><feComposite in2="hardAlpha1" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" /><feBlend mode="normal" in2="shape" result="effect1" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" /><feOffset dy="-0.274626" /><feComposite in2="hardAlpha2" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" /><feBlend mode="normal" in2="effect1" result="effect2" /></filter></defs></svg></button><span style={{fontVariantNumeric: 'tabular-nums'}} className="inline-block w-[18px] text-center text-[10px] font-[460] leading-[18px] text-[rgba(38,35,35,0.50)] font-[family-name:var(--font-neoris),sans-serif]">1{/* */}/{/* */}3</span><button type="button" aria-label="Next campaign" className="flex size-5 items-center justify-center rounded-md border-0 bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#5D86EE]/50"><svg width={10} height={10} viewBox="0 0 10 10" fill="none" aria-hidden="true" className="block shrink-0"><g filter="url(#sliderArrow-right)"><path d="M3.70752 7.41494L6.17915 4.94331L3.70752 2.47168" stroke="#BFBFBF" strokeWidth="0.823877" strokeLinecap="round" strokeLinejoin="round" /></g><defs><filter id="sliderArrow-right" x="3.29565" y="2.05957" width="3.29541" height="5.76709" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha1" /><feOffset dy="0.274626" /><feComposite in2="hardAlpha1" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" /><feBlend mode="normal" in2="shape" result="effect1" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" /><feOffset dy="-0.274626" /><feComposite in2="hardAlpha2" operator="arithmetic" k2={-1} k3={1} /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" /><feBlend mode="normal" in2="effect1" result="effect2" /></filter></defs></svg></button></div></div></div></div></div></div></div></div></div></div></section>

      <div data-guide-section="true" className="w-full bg-surface pt-24 pb-10">
        <div className="max-w-[1080px] mx-auto px-5 min-[476px]:px-8 min-[768px]:px-6 flex flex-col items-center text-center">
          <h2 className="m-0 text-[28px] min-[767px]:text-[32px] min-[1000px]:text-[40px] font-normal leading-[115%]">
            <span
              className="text-ink"
              style={{ filter: "url(#headline-inner-shadow-dark)" } as any}
            >
              The Three Pillars of the Architecture
            </span>
          </h2>
          <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-4 w-full max-w-[360px] text-ink-muted">
            Read the guide, then let Checkpost turn each step into a roadmap,
            tasks, and agents.
          </p>
          <a
            className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] cta-btn-dark mt-6"
            data-analytics-cta="guide_start_cta"
            data-analytics-location="guide_section"
            href="/signup"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100"
            ></span>
            <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
              <span className="text-[15px] font-[460] tracking-[0.15px] text-on-dark">
                Put the guide to work
              </span>
            </span>
          </a>
        </div>
      </div>
      <div data-guide-books="true" className="relative w-full bg-surface">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div
            className="guide-books-bg h-full w-full max-w-[1400px] self-stretch bg-repeat-y bg-[position:50%_0] bg-[length:200%_auto] md:bg-[length:100%_auto]"
            style={
              {
                backgroundImage:
                  'image-set(url("https://cofounder.co/decor/behind-the-books.avif") type("image/avif"), url("https://cofounder.co/decor/behind-the-books.webp") type("image/webp"), url("https://cofounder.co/decor/behind the books.png") type("image/png"))',
              } as any
            }
          ></div>
        </div>
        <div className="h-[100px]"></div>
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 flex flex-col gap-[60px] items-center">
          <div className="flex flex-col md:flex-row gap-[80px] justify-center">
            <a
              className=" shrink-0 select-none block hover:-translate-y-6 hover:scale-[1.03] transition-all duration-300 ease-out hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] relative hover:z-10"
              draggable="false"
              href="/chapter/deterministic-policy-engine"
            >
              <div className="relative">
                <div style={{ transition: "none" } as any}>
                  <div
                    className="flex items-stretch w-[290px] shrink-0 min-h-[350px]"
                    style={
                      {
                        borderRadius: "4px 12px 12px 4px",
                        background: "#FAFAF7",
                        boxShadow:
                          "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)",
                        overflow: "hidden",
                      } as any
                    }
                  >
                    <div
                      className="w-[16px] shrink-0"
                      style={
                        {
                          background:
                            "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)",
                        } as any
                      }
                    ></div>
                    <div
                      className="flex-1 flex flex-col"
                      style={{ background: "#FAFAF7" } as any}
                    >
                      <div className="px-[20px] pt-[32px] pb-[26px]">
                        <h3
                          style={
                            {
                              margin: "0",
                              maxWidth: "200px",
                              textShadow:
                                "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)",
                              fontFamily: "var(--font-neoris)",
                              fontSize: "20px",
                              fontWeight: "440",
                              lineHeight: "110%",
                              letterSpacing: "-0.4px",
                              color: "rgba(38,35,35,0.85)",
                              whiteSpace: "pre-line",
                            } as any
                          }
                        >
                          Pillar 1 The Deterministic Policy Engine (The
                          Rulebook)
                        </h3>
                      </div>
                      <div className="px-[20px]">
                        <div
                          style={
                            {
                              height: "1px",
                              background: "rgba(38,35,35,0.10)",
                              boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)",
                            } as any
                          }
                        ></div>
                      </div>
                      <div className="px-[20px] mt-[10px]">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "8px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          Chapter I
                        </span>
                      </div>
                      <div className="mt-[12px] px-[20px]">
                        <img
                          alt=""
                          loading="lazy"
                          width="290"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-auto rounded-[6px]"
                          style={{ color: "transparent" } as any}
                          sizes="290px"
                          srcSet="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=32&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 32w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=48&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 48w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=64&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 64w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=96&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 96w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=128&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 128w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=256&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 256w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=384&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 384w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=640&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 640w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=750&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 750w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=828&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 828w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=1080&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1080w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=1200&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1200w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=1920&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1920w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=2048&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 2048w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 3840w"
                          src="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img-2.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj"
                        />
                      </div>
                      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          by Checkpost
                        </span>
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 331 122"
                  preserveAspectRatio="none"
                  fill="none"
                  className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none"
                  style={{ height: "30%" } as any}
                >
                  <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                    <div
                      style={
                        {
                          backdropFilter: "blur(1.5px)",
                          clipPath: "url(#bgblur_chap_clip_path)",
                          height: "100%",
                          width: "100%",
                        } as any
                      }
                    ></div>
                  </foreignObject>
                  <g filter="url(#filter0_chap)" data-figma-bg-blur-radius="5">
                    <path
                      d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z"
                      fill="#CFCFCF"
                      fillOpacity="0.16"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_chap"
                      x="-4"
                      y="-5"
                      width="338.508"
                      height="129.741"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="1 1"
                        stitchTiles="stitch"
                        numOctaves="3"
                        result="noise"
                        seed="2856"
                      ></feTurbulence>
                      <feColorMatrix
                        in="noise"
                        type="luminanceToAlpha"
                        result="alphaNoise"
                      ></feColorMatrix>
                      <feComponentTransfer
                        in="alphaNoise"
                        result="coloredNoise1"
                      >
                        <feFuncA
                          type="discrete"
                          tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                        ></feFuncA>
                      </feComponentTransfer>
                      <feComposite
                        operator="in"
                        in2="shape"
                        in="coloredNoise1"
                        result="noise1Clipped"
                      ></feComposite>
                      <feFlood
                        floodColor="rgba(199, 199, 199, 0.06)"
                        result="color1Flood"
                      ></feFlood>
                      <feComposite
                        operator="in"
                        in2="noise1Clipped"
                        in="color1Flood"
                        result="color1"
                      ></feComposite>
                      <feMerge result="effect2_noise">
                        <feMergeNode in="shape"></feMergeNode>
                        <feMergeNode in="color1"></feMergeNode>
                      </feMerge>
                      <feBlend
                        mode="normal"
                        in="effect2_noise"
                        in2="effect1_dropShadow"
                        result="effect2_noise"
                      ></feBlend>
                    </filter>
                    <clipPath
                      id="bgblur_chap_clip_path"
                      transform="translate(4 5)"
                    >
                      <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-[40px] flex justify-center">
                <div className="relative inline-flex items-center">
                  <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                    Read this chapter (I)
                  </span>
                  <span
                    className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300"
                    style={
                      {
                        transitionTimingFunction:
                          "cubic-bezier(0.23, 1, 0.32, 1)",
                      } as any
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z"
                        fill="currentColor"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
            <a
              className=" shrink-0 select-none block hover:-translate-y-6 hover:scale-[1.03] transition-all duration-300 ease-out hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] relative hover:z-10"
              draggable="false"
              href="/chapter/cost-governance"
            >
              <div className="relative">
                <div style={{ transition: "none" } as any}>
                  <div
                    className="flex items-stretch w-[290px] shrink-0 min-h-[350px]"
                    style={
                      {
                        borderRadius: "4px 12px 12px 4px",
                        background: "#FAFAF7",
                        boxShadow:
                          "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)",
                        overflow: "hidden",
                      } as any
                    }
                  >
                    <div
                      className="w-[16px] shrink-0"
                      style={
                        {
                          background:
                            "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)",
                        } as any
                      }
                    ></div>
                    <div
                      className="flex-1 flex flex-col"
                      style={{ background: "#FAFAF7" } as any}
                    >
                      <div className="px-[20px] pt-[32px] pb-[26px]">
                        <h3
                          style={
                            {
                              margin: "0",
                              maxWidth: "200px",
                              textShadow:
                                "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)",
                              fontFamily: "var(--font-neoris)",
                              fontSize: "20px",
                              fontWeight: "440",
                              lineHeight: "110%",
                              letterSpacing: "-0.4px",
                              color: "rgba(38,35,35,0.85)",
                              whiteSpace: "pre-line",
                            } as any
                          }
                        >
                          Pillar 2 Cost Governance and Loop Protection (The Hard
                          Stop)
                        </h3>
                      </div>
                      <div className="px-[20px]">
                        <div
                          style={
                            {
                              height: "1px",
                              background: "rgba(38,35,35,0.10)",
                              boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)",
                            } as any
                          }
                        ></div>
                      </div>
                      <div className="px-[20px] mt-[10px]">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "8px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          Chapter II
                        </span>
                      </div>
                      <div className="mt-[12px] px-[20px]">
                        <img
                          alt=""
                          loading="lazy"
                          width="290"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-auto rounded-[6px]"
                          style={{ color: "transparent" } as any}
                          sizes="290px"
                          srcSet="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=32&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 32w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=48&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 48w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=64&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 64w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=96&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 96w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=128&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 128w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=256&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 256w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=384&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 384w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=640&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 640w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=750&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 750w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=828&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 828w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=1080&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1080w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=1200&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1200w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=1920&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1920w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=2048&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 2048w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 3840w"
                          src="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239728.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj"
                        />
                      </div>
                      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          by Checkpost
                        </span>
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 331 122"
                  preserveAspectRatio="none"
                  fill="none"
                  className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none"
                  style={{ height: "30%" } as any}
                >
                  <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                    <div
                      style={
                        {
                          backdropFilter: "blur(1.5px)",
                          clipPath: "url(#bgblur_chap_clip_path)",
                          height: "100%",
                          width: "100%",
                        } as any
                      }
                    ></div>
                  </foreignObject>
                  <g filter="url(#filter0_chap)" data-figma-bg-blur-radius="5">
                    <path
                      d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z"
                      fill="#CFCFCF"
                      fillOpacity="0.16"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_chap"
                      x="-4"
                      y="-5"
                      width="338.508"
                      height="129.741"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="1 1"
                        stitchTiles="stitch"
                        numOctaves="3"
                        result="noise"
                        seed="2856"
                      ></feTurbulence>
                      <feColorMatrix
                        in="noise"
                        type="luminanceToAlpha"
                        result="alphaNoise"
                      ></feColorMatrix>
                      <feComponentTransfer
                        in="alphaNoise"
                        result="coloredNoise1"
                      >
                        <feFuncA
                          type="discrete"
                          tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                        ></feFuncA>
                      </feComponentTransfer>
                      <feComposite
                        operator="in"
                        in2="shape"
                        in="coloredNoise1"
                        result="noise1Clipped"
                      ></feComposite>
                      <feFlood
                        floodColor="rgba(199, 199, 199, 0.06)"
                        result="color1Flood"
                      ></feFlood>
                      <feComposite
                        operator="in"
                        in2="noise1Clipped"
                        in="color1Flood"
                        result="color1"
                      ></feComposite>
                      <feMerge result="effect2_noise">
                        <feMergeNode in="shape"></feMergeNode>
                        <feMergeNode in="color1"></feMergeNode>
                      </feMerge>
                      <feBlend
                        mode="normal"
                        in="effect2_noise"
                        in2="effect1_dropShadow"
                        result="effect2_noise"
                      ></feBlend>
                    </filter>
                    <clipPath
                      id="bgblur_chap_clip_path"
                      transform="translate(4 5)"
                    >
                      <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-[40px] flex justify-center">
                <div className="relative inline-flex items-center">
                  <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                    Read this chapter (II)
                  </span>
                  <span
                    className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300"
                    style={
                      {
                        transitionTimingFunction:
                          "cubic-bezier(0.23, 1, 0.32, 1)",
                      } as any
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z"
                        fill="currentColor"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-[80px] justify-center">
            <a
              className=" shrink-0 select-none block hover:-translate-y-6 hover:scale-[1.03] transition-all duration-300 ease-out hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] relative hover:z-10"
              draggable="false"
              href="/chapter/hitl"
            >
              <div className="relative">
                <div style={{ transition: "none" } as any}>
                  <div
                    className="flex items-stretch w-[290px] shrink-0 min-h-[350px]"
                    style={
                      {
                        borderRadius: "4px 12px 12px 4px",
                        background: "#FAFAF7",
                        boxShadow:
                          "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)",
                        overflow: "hidden",
                      } as any
                    }
                  >
                    <div
                      className="w-[16px] shrink-0"
                      style={
                        {
                          background:
                            "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)",
                        } as any
                      }
                    ></div>
                    <div
                      className="flex-1 flex flex-col"
                      style={{ background: "#FAFAF7" } as any}
                    >
                      <div className="px-[20px] pt-[32px] pb-[26px]">
                        <h3
                          style={
                            {
                              margin: "0",
                              maxWidth: "200px",
                              textShadow:
                                "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)",
                              fontFamily: "var(--font-neoris)",
                              fontSize: "20px",
                              fontWeight: "440",
                              lineHeight: "110%",
                              letterSpacing: "-0.4px",
                              color: "rgba(38,35,35,0.85)",
                              whiteSpace: "pre-line",
                            } as any
                          }
                        >
                          Pillar 3 Human-in-the-Loop (HITL) Interruption (The
                          Dashboard)
                        </h3>
                      </div>
                      <div className="px-[20px]">
                        <div
                          style={
                            {
                              height: "1px",
                              background: "rgba(38,35,35,0.10)",
                              boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)",
                            } as any
                          }
                        ></div>
                      </div>
                      <div className="px-[20px] mt-[10px]">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "8px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          Chapter III
                        </span>
                      </div>
                      <div className="mt-[12px] px-[20px]">
                        <img
                          alt=""
                          loading="lazy"
                          width="290"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-auto rounded-[6px]"
                          style={{ color: "transparent" } as any}
                          sizes="290px"
                          srcSet="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=32&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 32w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=48&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 48w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=64&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 64w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=96&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 96w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=128&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 128w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=256&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 256w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=384&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 384w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=640&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 640w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=750&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 750w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=828&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 828w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=1080&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1080w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=1200&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1200w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=1920&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1920w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=2048&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 2048w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 3840w"
                          src="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727test-img.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj"
                        />
                      </div>
                      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          by Checkpost
                        </span>
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 331 122"
                  preserveAspectRatio="none"
                  fill="none"
                  className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none"
                  style={{ height: "30%" } as any}
                >
                  <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                    <div
                      style={
                        {
                          backdropFilter: "blur(1.5px)",
                          clipPath: "url(#bgblur_chap_clip_path)",
                          height: "100%",
                          width: "100%",
                        } as any
                      }
                    ></div>
                  </foreignObject>
                  <g filter="url(#filter0_chap)" data-figma-bg-blur-radius="5">
                    <path
                      d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z"
                      fill="#CFCFCF"
                      fillOpacity="0.16"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_chap"
                      x="-4"
                      y="-5"
                      width="338.508"
                      height="129.741"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="1 1"
                        stitchTiles="stitch"
                        numOctaves="3"
                        result="noise"
                        seed="2856"
                      ></feTurbulence>
                      <feColorMatrix
                        in="noise"
                        type="luminanceToAlpha"
                        result="alphaNoise"
                      ></feColorMatrix>
                      <feComponentTransfer
                        in="alphaNoise"
                        result="coloredNoise1"
                      >
                        <feFuncA
                          type="discrete"
                          tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                        ></feFuncA>
                      </feComponentTransfer>
                      <feComposite
                        operator="in"
                        in2="shape"
                        in="coloredNoise1"
                        result="noise1Clipped"
                      ></feComposite>
                      <feFlood
                        floodColor="rgba(199, 199, 199, 0.06)"
                        result="color1Flood"
                      ></feFlood>
                      <feComposite
                        operator="in"
                        in2="noise1Clipped"
                        in="color1Flood"
                        result="color1"
                      ></feComposite>
                      <feMerge result="effect2_noise">
                        <feMergeNode in="shape"></feMergeNode>
                        <feMergeNode in="color1"></feMergeNode>
                      </feMerge>
                      <feBlend
                        mode="normal"
                        in="effect2_noise"
                        in2="effect1_dropShadow"
                        result="effect2_noise"
                      ></feBlend>
                    </filter>
                    <clipPath
                      id="bgblur_chap_clip_path"
                      transform="translate(4 5)"
                    >
                      <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-[40px] flex justify-center">
                <div className="relative inline-flex items-center">
                  <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                    Read this chapter (III)
                  </span>
                  <span
                    className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300"
                    style={
                      {
                        transitionTimingFunction:
                          "cubic-bezier(0.23, 1, 0.32, 1)",
                      } as any
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z"
                        fill="currentColor"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
            <a
              className=" shrink-0 select-none block hover:-translate-y-6 hover:scale-[1.03] transition-all duration-300 ease-out hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] relative hover:z-10"
              draggable="false"
              href="/chapter/enterprise-ready"
            >
              <div className="relative">
                <div style={{ transition: "none" } as any}>
                  <div
                    className="flex items-stretch w-[290px] shrink-0 min-h-[350px]"
                    style={
                      {
                        borderRadius: "4px 12px 12px 4px",
                        background: "#FAFAF7",
                        boxShadow:
                          "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)",
                        overflow: "hidden",
                      } as any
                    }
                  >
                    <div
                      className="w-[16px] shrink-0"
                      style={
                        {
                          background:
                            "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)",
                        } as any
                      }
                    ></div>
                    <div
                      className="flex-1 flex flex-col"
                      style={{ background: "#FAFAF7" } as any}
                    >
                      <div className="px-[20px] pt-[32px] pb-[26px]">
                        <h3
                          style={
                            {
                              margin: "0",
                              maxWidth: "200px",
                              textShadow:
                                "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)",
                              fontFamily: "var(--font-neoris)",
                              fontSize: "20px",
                              fontWeight: "440",
                              lineHeight: "110%",
                              letterSpacing: "-0.4px",
                              color: "rgba(38,35,35,0.85)",
                              whiteSpace: "pre-line",
                            } as any
                          }
                        >
                          Enterprise Ready & Secure
                        </h3>
                      </div>
                      <div className="px-[20px]">
                        <div
                          style={
                            {
                              height: "1px",
                              background: "rgba(38,35,35,0.10)",
                              boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)",
                            } as any
                          }
                        ></div>
                      </div>
                      <div className="px-[20px] mt-[10px]">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "8px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          Chapter IV
                        </span>
                      </div>
                      <div className="mt-[12px] px-[20px]">
                        <img
                          alt=""
                          loading="lazy"
                          width="290"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-auto rounded-[6px]"
                          style={{ color: "transparent" } as any}
                          sizes="290px"
                          srcSet="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=32&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 32w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=48&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 48w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=64&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 64w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=96&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 96w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=128&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 128w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=256&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 256w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=384&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 384w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=640&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 640w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=750&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 750w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=828&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 828w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=1080&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1080w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=1200&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1200w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=1920&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 1920w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=2048&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 2048w, https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj 3840w"
                          src="https://cofounder.co/_next/image?url=%2Fbooks-covers%2FUI%2004%2FFrame%202147239727.png&w=3840&q=75&dpl=dpl_3zXpeVy7Nm78WHWZexnxVcbxyBhj"
                        />
                      </div>
                      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          by Checkpost
                        </span>
                        <span
                          style={
                            {
                              color: "rgba(38,35,35,0.50)",
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: "7px",
                              fontWeight: "500",
                              lineHeight: "11.611px",
                            } as any
                          }
                        >
                          2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 331 122"
                  preserveAspectRatio="none"
                  fill="none"
                  className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none"
                  style={{ height: "30%" } as any}
                >
                  <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                    <div
                      style={
                        {
                          backdropFilter: "blur(1.5px)",
                          clipPath: "url(#bgblur_chap_clip_path)",
                          height: "100%",
                          width: "100%",
                        } as any
                      }
                    ></div>
                  </foreignObject>
                  <g filter="url(#filter0_chap)" data-figma-bg-blur-radius="5">
                    <path
                      d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z"
                      fill="#CFCFCF"
                      fillOpacity="0.16"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_chap"
                      x="-4"
                      y="-5"
                      width="338.508"
                      height="129.741"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="1 1"
                        stitchTiles="stitch"
                        numOctaves="3"
                        result="noise"
                        seed="2856"
                      ></feTurbulence>
                      <feColorMatrix
                        in="noise"
                        type="luminanceToAlpha"
                        result="alphaNoise"
                      ></feColorMatrix>
                      <feComponentTransfer
                        in="alphaNoise"
                        result="coloredNoise1"
                      >
                        <feFuncA
                          type="discrete"
                          tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                        ></feFuncA>
                      </feComponentTransfer>
                      <feComposite
                        operator="in"
                        in2="shape"
                        in="coloredNoise1"
                        result="noise1Clipped"
                      ></feComposite>
                      <feFlood
                        floodColor="rgba(199, 199, 199, 0.06)"
                        result="color1Flood"
                      ></feFlood>
                      <feComposite
                        operator="in"
                        in2="noise1Clipped"
                        in="color1Flood"
                        result="color1"
                      ></feComposite>
                      <feMerge result="effect2_noise">
                        <feMergeNode in="shape"></feMergeNode>
                        <feMergeNode in="color1"></feMergeNode>
                      </feMerge>
                      <feBlend
                        mode="normal"
                        in="effect2_noise"
                        in2="effect1_dropShadow"
                        result="effect2_noise"
                      ></feBlend>
                    </filter>
                    <clipPath
                      id="bgblur_chap_clip_path"
                      transform="translate(4 5)"
                    >
                      <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-[40px] flex justify-center">
                <div className="relative inline-flex items-center">
                  <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                    Read this chapter (IV)
                  </span>
                  <span
                    className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300"
                    style={
                      {
                        transitionTimingFunction:
                          "cubic-bezier(0.23, 1, 0.32, 1)",
                      } as any
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z"
                        fill="currentColor"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="h-[100px]"></div>
        <div
          className="sticky bottom-[32px] z-[90] mx-auto w-fit"
          style={
            {
              transform: "translateY(100px)",
              opacity: "0",
              transition: "transform 400ms ease-in, opacity 300ms ease-in",
              pointerEvents: "none",
            } as any
          }
        >
          <a
            href="/guides/cofounder-founder-guide.pdf"
            download="cofounder-founder-guide.pdf"
            className="btn-light-surface no-underline flex items-center justify-center overflow-hidden"
            style={
              {
                width: "44px",
                height: "44px",
                padding: "0",
                transition:
                  "width 700ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease-out, box-shadow 200ms ease-out",
                cursor: "pointer",
                gap: "10px",
                whiteSpace: "nowrap",
              } as any
            }
          >
            <span
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  opacity: "0",
                  transform: "scale(0.9)",
                  transition:
                    "opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)",
                } as any
              }
            >
              <span
                style={
                  {
                    fontFamily: "var(--font-neoris)",
                    fontSize: "15px",
                    fontWeight: "460",
                    lineHeight: "140%",
                    letterSpacing: "0.15px",
                    color: "rgba(32, 32, 32, 0.80)",
                  } as any
                }
              >
                Download full guide
              </span>
              <span
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    borderRadius: "2.5px",
                    background: "#B2E7FF",
                    boxShadow:
                      "0 1px 1px 0 rgba(0, 126, 183, 0.70), 0 0.5px 0.2px 0 #FFF inset, 0 0 0 1.5px #96DEFF",
                    flexShrink: "0",
                  } as any
                }
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <g clipPath="url(#clip0_dl_icon)">
                    <g filter="url(#filter0_dl_icon)">
                      <path
                        d="M11.3411 8.14307C11.5895 8.14307 11.7911 8.34491 11.7913 8.59326V11.3872C11.7912 11.6357 11.5895 11.8374 11.3411 11.8374H3.65845C3.41 11.8374 3.20834 11.6356 3.20825 11.3872V8.59326C3.20846 8.34493 3.41007 8.1431 3.65845 8.14307C3.90685 8.14307 4.10844 8.34491 4.10864 8.59326V10.937H10.8918V8.59326C10.8921 8.34503 11.0928 8.14325 11.3411 8.14307ZM7.50024 3.25439C7.74868 3.2545 7.95044 3.45613 7.95044 3.70459V7.50635L8.92798 6.52881C9.10369 6.35342 9.38905 6.35332 9.5647 6.52881C9.74034 6.70445 9.74014 6.98977 9.5647 7.16553L7.8186 8.91162C7.64287 9.08736 7.35762 9.08736 7.18188 8.91162L5.43579 7.16553C5.26019 6.98978 5.2601 6.7045 5.43579 6.52881C5.61151 6.35341 5.89686 6.3533 6.07251 6.52881L7.05005 7.50635V3.70459C7.05005 3.45606 7.25172 3.25439 7.50024 3.25439Z"
                        fill="#0086C2"
                        fillOpacity="0.9"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_dl_icon"
                      x="3.20825"
                      y="3.25439"
                      width="8.58301"
                      height="8.58301"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="0.5"></feOffset>
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      ></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow"
                      ></feBlend>
                    </filter>
                    <clipPath id="clip0_dl_icon">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </span>
          </a>
        </div>
        <div className="h-[100px]"></div>
      </div>
      {/* ──────────────────────────────────────────────────────────
         TOOLS AND SYSTEMS SECTION
      ────────────────────────────────────────────────────────── */}
      <section 
        className="relative w-full min-h-0 flex flex-col bg-[#1a6fd1] text-white overflow-hidden" 
        style={{
          backgroundImage: "url('/build-ui-bits/section-bg.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <img alt="Top border" src="/build-ui-bits/carousel-top.png" className="absolute h-full w-full min-w-full max-h-[92px] object-cover md:object-[95%_bottom] lg:object-[100%_bottom] top-0 hidden max-[1920px]:block" />
          <img alt="Bottom border" src="/build-ui-bits/carousel-bottom.png" className="absolute bottom-0 h-full w-full min-w-full max-h-[92px] object-cover object-top hidden lg:block" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute left-0 bottom-1/3 z-[1] w-[50vw] max-w-[391px] select-none">
          <img alt="Left clouds" src="/build-ui-bits/clouds-left.png" className="h-auto w-full" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute right-0 bottom-1/3 z-[1] w-[50vw] max-w-[488px] select-none">
          <img alt="Right clouds" src="/build-ui-bits/clouds-right.png" className="h-auto w-full" />
        </div>
        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center pt-[180px] pb-[200px] md:pt-[220px] md:pb-[240px] lg:pt-[240px] lg:pb-[280px]">
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <h2 
              style={{ lineHeight: '115%', textShadow: '0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)' }}
              className="m-0 mx-auto text-center text-[28px] min-[768px]:text-[32px] min-[1000px]:text-[40px] max-w-[35ch] text-white"
            >
              Ready to secure your AI agents?
            </h2>
            <p className="m-0 mx-auto mt-5 max-w-[800px] text-center text-[16px] font-[460] leading-[150%] text-white/70">
              Join Checkpost today and deploy autonomous workflows with enterprise-grade governance.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <a
                className="bg-gray-600 text-white inline-flex items-center justify-center gap-[10px] px-[20px] py-[12px] rounded-[8px] text-[15px] font-[500] hover:bg-gray-700 transition-colors cursor-pointer no-underline shadow-lg"
                href="/signup"
              >
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                className="text-white border border-white/30 hover:bg-white/10 inline-flex items-center justify-center gap-[10px] px-[20px] py-[12px] rounded-[8px] text-[15px] font-[500] transition-all cursor-pointer no-underline"
                href="https://github.com/pradhan-not-found/vibeforge-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
         PRICING SECTION
      ────────────────────────────────────────────────────────── */}
      

      
      <section id="pricing" className="w-full bg-[#FAFAFA] py-24 border-t border-border-divider">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-12 mt-12 mb-12 relative z-20">
  <div className="text-center">
    <div className="max-w-[1080px] mx-auto px-5 min-[476px]:px-8 min-[768px]:px-6 flex flex-col items-center gap-4 pt-[140px]"><h1 className="m-0 text-[40px] font-normal leading-[115%] text-center whitespace-nowrap max-md:text-[32px] max-md:whitespace-normal"><span className="text-ink-muted" style={{filter: 'url(#headline-inner-shadow-light)'}}>Start simple. </span><span className="text-ink" style={{filter: 'url(#headline-inner-shadow-dark)'}}>Grow without limits.</span></h1><p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] px-1 text-center text-ink-muted max-md:max-w-[240px]">Build and scale without managing the systems behind it.</p></div>
  </div>
  <div className="flex items-stretch gap-3 max-md:gap-4 max-md:flex-col max-md:items-center md:w-fit md:mx-auto px-5 min-[476px]:px-8 min-[768px]:px-6"><a href="/login" aria-label="Get started for Free Trial" className="pricing-card-group group relative flex min-w-0 self-stretch flex-[1_0_0] md:flex-none md:w-[350px] min-[1650px]:w-[450px] max-md:self-center max-md:w-full max-md:max-w-[400px] cursor-pointer text-current no-underline"><div className="pricing-card relative flex w-full flex-col items-start gap-6 pt-4 px-3 pb-8 rounded-2xl border border-border-card bg-surface-raised overflow-hidden will-change-transform transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] group-hover:-translate-y-[10px]"><div className="flex flex-col items-start w-full gap-4"><div className="flex items-center justify-between w-full h-[29px] px-3"><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Free Trial</span><div className="opacity-0 pointer-events-none transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:pointer-events-auto" style={{transform: 'translateZ(0)', isolation: 'isolate', willChange: 'opacity', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}}><span aria-hidden="true" className="cta-btn-dark relative inline-flex items-center justify-center shrink-0 cursor-pointer gap-[6px] min-w-8 py-[6px] px-3"><span className="relative z-10 font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px] text-white whitespace-nowrap">Get started</span></span></div></div><div className="relative w-full h-[220px] shrink-0 rounded-lg border border-border-card bg-surface overflow-hidden "><img alt="Checkpost Free Trial plan preview" loading="lazy" decoding="async" data-nimg="fill" className="object-cover pointer-events-none" style={{position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent", objectFit: "cover"}} sizes="(max-width: 1080px) 33vw, 352px" srcSet="/_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=256&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 256w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=384&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 384w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=640&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 640w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=750&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 750w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=828&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 828w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=1080&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1080w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=1200&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1200w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1920w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=2048&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2048w, /_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 3840w" src="/_next/image?url=%2Fassets%2Fpricing%2FFree.avif&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /></div></div><div className="flex flex-col items-start w-full gap-6 px-3 "><div className="flex flex-col items-start gap-[10px]"><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">7 day free trial</span><p className="m-0 font-[family-name:var(--font-departure)] font-normal leading-[110%] text-center text-ink-strongest text-[50px] max-[1000px]:text-[42px] tracking-[-2.5px] max-[1000px]:tracking-[-2.1px]">Free</p></div><ul className="flex flex-col items-start w-full m-0 p-0 list-none"><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-neutral)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-neutral)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-neutral)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-neutral)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-neutral)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-neutral)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">$10 in usage included</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-neutral)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-neutral)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-neutral)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-neutral)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-neutral)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-neutral)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">7 days of Checkpost Pro</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-neutral)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-neutral)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-neutral)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-neutral)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-neutral)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-neutral)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Monitor single agent</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-neutral)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-neutral)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-neutral)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-neutral)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-neutral)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-neutral)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Real-time policy evaluation</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-neutral)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-neutral)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-neutral)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-neutral)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-neutral)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-neutral)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-neutral)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-neutral)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Basic Audit Logs</span></li></ul></div><div className="md:hidden w-full px-3"><span aria-hidden="true" className="cta-btn-dark relative flex w-full items-center justify-center cursor-pointer gap-[6px] py-[10px] px-4"><span className="relative z-10 font-[family-name:var(--font-neoris)] text-[14px] font-[460] leading-[140%] tracking-[0.14px] text-white whitespace-nowrap">Get started</span></span></div></div></a><a href="/login" aria-label="Get started for Checkpost Pro" className="pricing-card-group group relative flex min-w-0 self-stretch flex-[1_0_0] md:flex-none md:w-[350px] min-[1650px]:w-[450px] max-md:self-center max-md:w-full max-md:max-w-[400px] cursor-pointer text-current no-underline"><div className="pricing-card relative flex w-full flex-col items-start gap-6 pt-4 px-3 pb-8 rounded-2xl border border-border-card bg-surface-raised overflow-hidden will-change-transform transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] group-hover:-translate-y-[10px]"><div className="flex flex-col items-start w-full gap-4"><div className="flex items-center justify-between w-full h-[29px] px-3"><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Checkpost Pro</span><div className="opacity-0 pointer-events-none transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:pointer-events-auto" style={{transform: 'translateZ(0)', isolation: 'isolate', willChange: 'opacity', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}}><span aria-hidden="true" className="cta-btn-dark relative inline-flex items-center justify-center shrink-0 cursor-pointer gap-[6px] min-w-8 py-[6px] px-3"><span className="relative z-10 font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px] text-white whitespace-nowrap">Get started</span></span></div></div><div className="relative w-full h-[220px] shrink-0 rounded-lg border border-border-card bg-surface overflow-hidden "><img alt="Checkpost Pro plan preview" loading="lazy" decoding="async" data-nimg="fill" className="object-cover pointer-events-none" style={{position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent", objectFit: "cover"}} sizes="(max-width: 1080px) 33vw, 352px" srcSet="/_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=256&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 256w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=384&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 384w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=640&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 640w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=750&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 750w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=828&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 828w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=1080&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1080w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=1200&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1200w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1920w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=2048&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2048w, /_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 3840w" src="/_next/image?url=%2Fassets%2Fpricing%2FPro.avif&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /></div></div><div className="flex flex-col items-start w-full gap-6 px-3 "><div className="flex flex-col items-start gap-[10px]"><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Starting at</span><div className="flex items-end gap-3"><div className="flex items-center text-center gap-[7px] font-[family-name:var(--font-departure)] font-normal leading-[110%]"><span className="text-[32px] text-ink-muted">$</span><span className="font-[family-name:var(--font-departure)] font-normal leading-[110%] text-center text-ink-strongest text-[50px] max-[1000px]:text-[42px] tracking-[-2.5px] max-[1000px]:tracking-[-2.1px]">20</span></div><div className="m-0 text-[15px] font-[460] tracking-[0.15px] flex items-center justify-center gap-[6px] pb-3 leading-[160%] text-ink-muted whitespace-nowrap"><span>/</span><span className="pt-[2px]">month usage included</span></div></div></div><ul className="flex flex-col items-start w-full m-0 p-0 list-none"><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Everything in the Free Plan</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Support for multiple agents</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Custom policy enforcement</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Threat simulation</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Advanced Analytics</span></li></ul></div><div className="md:hidden w-full px-3"><span aria-hidden="true" className="cta-btn-dark relative flex w-full items-center justify-center cursor-pointer gap-[6px] py-[10px] px-4"><span className="relative z-10 font-[family-name:var(--font-neoris)] text-[14px] font-[460] leading-[140%] tracking-[0.14px] text-white whitespace-nowrap">Get started</span></span></div></div></a><a href="/login" aria-label="Join waitlist for Team Plan" className="pricing-card-group group relative flex min-w-0 self-stretch flex-[1_0_0] md:flex-none md:w-[350px] min-[1650px]:w-[450px] max-md:self-center max-md:w-full max-md:max-w-[400px] cursor-pointer text-current no-underline"><div className="pricing-card relative flex w-full flex-col items-start gap-6 pt-4 px-3 pb-8 rounded-2xl border border-border-card bg-surface-raised overflow-hidden will-change-transform transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] group-hover:-translate-y-[10px]"><div className="flex flex-col items-start w-full gap-4"><div className="flex items-center justify-between w-full h-[29px] px-3"><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap opacity-50">Team Plan</span><div className="opacity-0 pointer-events-none transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:pointer-events-auto" style={{transform: 'translateZ(0)', isolation: 'isolate', willChange: 'opacity', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}}><span aria-hidden="true" className="cta-btn-dark relative inline-flex items-center justify-center shrink-0 cursor-pointer gap-[6px] min-w-8 py-[6px] px-3"><span className="relative z-10 font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px] text-white whitespace-nowrap">Join waitlist</span></span></div></div><div className="relative w-full h-[220px] shrink-0 rounded-lg border border-border-card bg-surface overflow-hidden opacity-50"><img alt="Checkpost Team Plan preview" loading="lazy" decoding="async" data-nimg="fill" className="object-cover pointer-events-none" style={{position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent", objectFit: "cover"}} sizes="(max-width: 1080px) 33vw, 352px" srcSet="/_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=256&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 256w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=384&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 384w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=640&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 640w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=750&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 750w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=828&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 828w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=1080&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1080w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=1200&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1200w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=1920&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 1920w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=2048&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 2048w, /_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R 3840w" src="/_next/image?url=%2Fassets%2Fpricing%2FTeam.avif&w=3840&q=75&dpl=dpl_FTBpn9qYsVusvLL3QpJUksmSJz7R" /></div></div><div className="flex flex-col items-start w-full gap-6 px-3 opacity-50"><div className="flex flex-col items-start gap-[10px]"><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Coming soon</span><div className="flex items-end gap-3"><div className="flex items-center text-center gap-[7px] font-[family-name:var(--font-departure)] font-normal leading-[110%]"><span className="text-[32px] text-ink-muted">$</span><span className="font-[family-name:var(--font-departure)] font-normal leading-[110%] text-center text-ink-strongest text-[50px] max-[1000px]:text-[42px] tracking-[-2.5px] max-[1000px]:tracking-[-2.1px]">50</span></div><div className="m-0 text-[15px] font-[460] tracking-[0.15px] flex items-center justify-center gap-[6px] pb-3 leading-[160%] text-ink-muted whitespace-nowrap"><span>/</span><span className="pt-[2px]">month usage included</span></div></div></div><ul className="flex flex-col items-start w-full m-0 p-0 list-none"><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Everything in the Pro Plan</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Multi-tenant support</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">SOC 2 Compliance</span></li><li className="flex items-center w-full gap-[10px] py-1"><svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M8.75 11.375V9.62504H7V11.375H8.75Z" fill="var(--color-feature-success)" /><path d="M10.5 11.375L8.75 11.375L8.75 13.125H10.5V11.375Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504V11.375H10.5V9.62504H12.25Z" fill="var(--color-feature-success)" /><path d="M12.25 9.62504H14V7.87504H12.25L12.25 9.62504Z" fill="var(--color-feature-success)" /><path d="M13.125 2.625L7.875 2.625V4.375L13.125 4.375L13.125 6.125L14.875 6.125V7.875L16.625 7.875L16.625 4.375L13.125 4.375V2.625Z" fill="var(--color-feature-success)" /><path d="M4.375 4.375L7.875 4.375V6.125H6.125V7.875H4.375L4.375 4.375Z" fill="var(--color-feature-success)" /><path d="M4.375 7.875L4.375 13.125H2.625L2.625 7.875L4.375 7.875Z" fill="var(--color-feature-success)" /><path fillRule="evenodd" clipRule="evenodd" d="M13.125 16.625V18.375L7.875 18.375L7.875 16.625H13.125ZM13.125 16.625V14.875L14.875 14.875L14.875 13.125H16.625V16.625H13.125Z" fill="var(--color-feature-success)" /><path d="M16.625 13.125V7.875L18.375 7.875L18.375 13.125H16.625Z" fill="var(--color-feature-success)" /><path d="M4.375 13.125L4.375 16.625L7.875 16.625L7.875 14.875L6.125 14.875V13.125L4.375 13.125Z" fill="var(--color-feature-success)" /></svg><span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-muted whitespace-nowrap">Priority support</span></li></ul></div><div className="md:hidden w-full px-3"><span aria-hidden="true" className="cta-btn-dark relative flex w-full items-center justify-center cursor-pointer gap-[6px] py-[10px] px-4"><span className="relative z-10 font-[family-name:var(--font-neoris)] text-[14px] font-[460] leading-[140%] tracking-[0.14px] text-white whitespace-nowrap">Join waitlist</span></span></div></div></a></div>
</div>



      </section>
<div className="w-full bg-white py-24 flex flex-col items-center justify-center border-t border-border-divider">
        <div className="text-center mb-16">
          <h2
            className="text-[40px] md:text-[48px] text-ink font-medium tracking-tight mb-4"
          >
            Meet the Devs
          </h2>
          <p className="text-[16px] text-ink-muted">
            Made with ❤️ for devs by devs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center max-w-5xl mx-auto px-6">
          {/* Profile 1 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-border-pill shadow-sm shrink-0 bg-white">
              <img
                src="/teams/anirudhhadas.png"
                alt="Aniruddha Das"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] text-ink font-medium tracking-tight mb-1 whitespace-nowrap">
                Aniruddha Das
              </h3>
              <p className="text-[13px] text-ink-muted mb-3 whitespace-nowrap">
                Full Stack Developer
              </p>
              <div className="flex items-center gap-3 text-ink-muted">
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-border-pill shadow-sm shrink-0 bg-white">
              <img
                src="/teams/sattwikdas.png"
                alt="Sattwik Das"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] text-ink font-medium tracking-tight mb-1 whitespace-nowrap">
                Sattwik Das
              </h3>
              <p className="text-[13px] text-ink-muted mb-3 whitespace-nowrap">
                Full Stack Developer
              </p>
              <div className="flex items-center gap-3 text-ink-muted">
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Profile 3 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-border-pill shadow-sm shrink-0 bg-white">
              <img
                src="/teams/souradeeppradhan.png"
                alt="Souradeep Pradhan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] text-ink font-medium tracking-tight mb-1 whitespace-nowrap">
                Souradeep Pradhan
              </h3>
              <p className="text-[13px] text-ink-muted mb-3 whitespace-nowrap">
                Full Stack Developer
              </p>
              <div className="flex items-center gap-3 text-ink-muted">
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile 4 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-border-pill shadow-sm shrink-0 bg-white">
              <img
                src="/teams/sampurnachandra.png"
                alt="Sampurna Chandra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] text-ink font-medium tracking-tight mb-1 whitespace-nowrap">
                Sampurna Chandra
              </h3>
              <p className="text-[13px] text-ink-muted mb-3 whitespace-nowrap">
                Full Stack Developer
              </p>
              <div className="flex items-center gap-3 text-ink-muted">
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="hover:text-ink transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full footer-bg relative overflow-x-hidden">
        <picture className="pointer-events-none absolute inset-x-0 bottom-0 h-[75px]">
          <source srcSet="/footer/footer-bg.avif" type="image/avif" />
          <source srcSet="/footer/footer-bg.webp" type="image/webp" />
          <img
            src="/footer/footer-bg.jpg"
            alt=""
            width="5760"
            height="225"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
            className="h-full w-full object-cover object-bottom"
          />
        </picture>
        <div className="mx-auto max-w-[1100px] px-6 pt-[80px] pb-[64px] relative z-10">
          <div className="relative">
            <div className="hidden md:block absolute -top-1/5 -right-[30%] w-full h-[120%] z-1 bg-pattern-footer">
              <div className="absolute inset-0 radial-bg-gradient"></div>
            </div>
            <div className="flex flex-col gap-[48px] md:flex-row md:gap-[80px] relative z-10">
              <div className="flex-1 flex flex-col">
                <h2 className="m-0 min-[767px]:text-[32px] min-[1000px]:text-[40px] font-normal text-[28px] leading-[115%] tracking-[0.28px] md:text-[40px] md:leading-[115%] md:tracking-normal max-w-[335px] md:max-w-[404px]">
                  <span
                    className="text-ink-navy md:text-ink"
                    style={
                      { filter: "url(#headline-inner-shadow-dark)" } as any
                    }
                  >
                    Run an entire company
                  </span>
                  <span
                    className="text-ink-navy/50 md:text-ink-faint"
                    style={
                      { filter: "url(#headline-inner-shadow-light)" } as any
                    }
                  >
                    {" "}
                    with AI agents
                  </span>
                </h2>
                <div className="mt-[32px] md:hidden max-w-[312px]">
                  <div
                    suppressHydrationWarning
                    className="footer-card-2-tilt"
                    data-shadow=""
                    data-scale-factor="1"
                    data-glare-mask="url(https://cofounder.co/footer/Holo-bg-card.png)"
                    data-glare-mask-mode="luminance"
                    data-glare-intensity="3.2"
                    data-glare-hue="240"
                    data-blend-mode="hard-light"
                    data-tilt-factor-y="0.42"
                    data-tilt-factor="0.42"
                  >
                    <div
                      className="block p-[12px] rounded-[16px] h-[475px]"
                      style={
                        {
                          background: "rgba(251, 251, 248, 0.80)",
                          boxShadow:
                            "0 0 0.357px 1.5px rgba(255, 255, 255, 0.35) inset, 0 2px 0 0 #FFF inset, 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(232, 231, 230, 0.32)",
                        } as any
                      }
                    >
                      <img
                        src="/footer/img-footer-1.avif"
                        alt="Checkpost product preview"
                        className="w-full h-full block rounded-[8px] object-cover"
                        style={{ display: "block" }}
                      />
                      <div
                        className="-mt-[232px] md:-mt-[200px] mx-[12px] p-[16px] flex flex-col items-start gap-[10px]"
                        style={
                          {
                            borderRadius: "8px",
                            background:
                              "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)",
                            boxShadow:
                              "0 -1px 0 0 rgba(0, 0, 0, 0.12) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.10) inset, 0 1px 1px 0 rgba(255, 255, 255, 0.24) inset",
                            backdropFilter: "blur(25px)",
                          } as any
                        }
                      >
                        <p
                          className="m-0"
                          style={
                            {
                              fontSize: "24px",
                              fontWeight: "460",
                              lineHeight: "115%",
                              letterSpacing: "0.24px",
                              textShadow:
                                "0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)",
                            } as any
                          }
                        >
                          <span className="text-white">
                            Checkpost is an agent orchestration platform
                          </span>{" "}
                          <span
                            style={
                              {
                                backgroundImage:
                                  "linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              } as any
                            }
                          >
                            designed to run an entire business.
                          </span>
                        </p>
                        <a
                          className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface"
                          data-analytics-cta="run_a_company"
                          data-analytics-location="footer_card"
                          href="/signup"
                        >
                          <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                            <span className="text-[15px] font-[460] tracking-[0.15px]">
                              Run a company
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="mt-[48px] flex flex-col gap-[32px]">
                  <div className="flex items-center gap-[12px]">
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-faint">
                      How to
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a
                        href="/how-to/start"
                        className="footer-link text-ink no-underline"
                      >
                        How to start
                      </a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a
                        href="/how-to/build"
                        className="footer-link text-ink no-underline"
                      >
                        How to build
                      </a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a
                        href="/how-to/sell"
                        className="footer-link text-ink no-underline"
                      >
                        How to sell
                      </a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a
                        href="/how-to/scale"
                        className="footer-link text-ink no-underline"
                      >
                        How to scale
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-[80px]">
                    <div className="flex flex-col items-start gap-[10px]">
                      <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                        <a
                          className="footer-link text-ink no-underline"
                          href="/"
                        >
                          Homepage
                        </a>
                      </span>
                      <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                        <a
                          href="/resources"
                          className="footer-link text-ink no-underline"
                        >
                          Resources
                        </a>
                      </span>
                      <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                        <a
                          href="/pricing"
                          className="footer-link text-ink no-underline"
                        >
                          Pricing
                        </a>
                      </span>
                      <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                        <a
                          href="https://generalintelligencecompany.com/careers"
                          className="footer-link text-ink no-underline"
                        >
                          Careers
                        </a>
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-[10px]">
                      <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                        <a
                          href="/privacy-policy"
                          className="footer-link text-ink no-underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                      <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                        <a
                          href="https://cofounder.co/terms"
                          className="footer-link text-ink no-underline"
                        >
                          Terms of Service
                        </a>
                      </span>
                      <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                        <a
                          href="https://docs.cofounder.co/"
                          className="footer-link text-ink no-underline"
                        >
                          Docs
                        </a>
                      </span>
                    </div>
                  </div>
                </nav>
                <div className="mt-[40px] flex items-center gap-[10px]">
                  <a
                    className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[36px] w-[36px] rounded-full btn-light-surface text-ink-faint hover:text-[#e1e8e7]"
                    aria-label="X"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.com/intelligenceco"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        aria-hidden="true"
                      >
                        <g filter="url(#filter0_i_642_8678)">
                          <path
                            d="M11.4539 1.19043H13.5624L8.95607 6.45511L14.375 13.6192H10.132L6.80877 9.2742L3.00622 13.6192H0.89652L5.8234 7.98799L0.625 1.19043H4.97569L7.97962 5.16189L11.4539 1.19043ZM10.7139 12.3572H11.8822L4.34087 2.38614H3.08716L10.7139 12.3572Z"
                            fill="#262323"
                            fillOpacity="0.8"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_642_8678"
                            x="0.625"
                            y="1.19043"
                            width="13.75"
                            height="13.5266"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset dy="1.09792"></feOffset>
                            <feGaussianBlur stdDeviation="0.548958"></feGaussianBlur>
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            ></feComposite>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_642_8678"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </a>
                  <a
                    className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[36px] w-[36px] rounded-full btn-light-surface text-ink-faint hover:text-[#e1e8e7]"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/the-general-intelligence-company-of-new-york/"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        aria-hidden="true"
                      >
                        <g clipPath="url(#clip0_642_8680)">
                          <g filter="url(#filter0_i_642_8680)">
                            <path
                              d="M11.6062 4.38379C13.4656 4.58517 14.5202 5.80673 14.5203 7.88086V13.9434H11.6062V8.52539C11.6062 8.38999 11.572 6.93457 9.96167 6.93457C9.41821 6.93464 8.93528 7.17626 8.66675 7.65918C8.35127 8.23644 8.39819 8.90809 8.39819 9.53906V13.9023H5.48413V4.6123H8.27026V5.85352C8.27294 5.84909 8.31392 5.78305 8.39819 5.67285C8.72043 5.25664 9.64003 4.28932 11.2712 4.35645C11.3851 4.36315 11.499 4.3704 11.6062 4.38379ZM3.72534 13.876H0.812256V4.58496H3.72534V13.876ZM2.26831 0C3.2025 0 3.96056 0.757245 3.96069 1.69141C3.96069 2.62568 3.20259 3.38379 2.26831 3.38379C1.33415 3.38365 0.576904 2.6256 0.576904 1.69141C0.577041 0.757328 1.33423 0.00013546 2.26831 0Z"
                              fill="#262323"
                              fillOpacity="0.8"
                            ></path>
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_642_8680"
                            x="0.576904"
                            y="0"
                            width="13.9434"
                            height="14.4434"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset dy="0.5"></feOffset>
                            <feGaussianBlur stdDeviation="0.25"></feGaussianBlur>
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            ></feComposite>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_642_8680"
                            ></feBlend>
                          </filter>
                          <clipPath id="clip0_642_8680">
                            <rect width="15" height="15" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="mt-[40px] flex flex-col">
                  <p className="m-0 flex items-center gap-[6px] text-ink-faint font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                    Automate with
                    <span className="footer-soc2-badge inline-flex items-center gap-[3px] rounded-[17px] py-[4px] pr-[8px] pl-[7px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <g filter="url(#filter0_i_642_8691)">
                          <path
                            d="M7.08329 4.16667V3.33333C7.08329 2.18274 6.15054 1.25 4.99996 1.25C3.84937 1.25 2.91663 2.18274 2.91663 3.33333V4.16667M4.99996 6.04167V6.875M3.66663 8.75H6.33329C7.03338 8.75 7.38338 8.75 7.65079 8.61375C7.886 8.49392 8.07721 8.30271 8.19704 8.0675C8.33329 7.80008 8.33329 7.45008 8.33329 6.75V6.16667C8.33329 5.46658 8.33329 5.11658 8.19704 4.84917C8.07721 4.61396 7.886 4.42275 7.65079 4.30292C7.38338 4.16667 7.03338 4.16667 6.33329 4.16667H3.66663C2.96656 4.16667 2.61653 4.16667 2.34914 4.30292C2.11393 4.42275 1.92271 4.61396 1.80287 4.84917C1.66663 5.11658 1.66663 5.46658 1.66663 6.16667V6.75C1.66663 7.45008 1.66663 7.80008 1.80287 8.0675C1.92271 8.30271 2.11393 8.49392 2.34914 8.61375C2.61653 8.75 2.96656 8.75 3.66663 8.75Z"
                            stroke="#BFBFBF"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_642_8691"
                            x="1.06665"
                            y="0.650391"
                            width="7.8667"
                            height="9.19922"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset dy="0.5"></feOffset>
                            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            ></feComposite>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_642_8691"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                      <span className="footer-soc2-label">SOC 2</span>
                    </span>
                    compliant security
                  </p>
                  <p className="m-0 pt-[10px] text-[#BFBFBF] font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                    Copyright © 2026 Fantastic 4
                  </p>
                  <p className="m-0 pt-[24px] font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                    <span className="text-[#BFBFBF]">Design by </span>
                    <a
                      href="https://souradeep.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-faint no-underline hover:underline"
                    >
                      Souradeep
                    </a>
                  </p>
                </div>
              </div>
              <div className="hidden md:relative md:block md:w-full md:max-w-[350px] md:shrink-0">
                <div
                  suppressHydrationWarning
                  className="footer-card-2-tilt"
                  data-shadow=""
                  data-scale-factor="1"
                  data-glare-mask="url(/footer/Holo-bg-card.png)"
                  data-glare-mask-mode="luminance"
                  data-glare-intensity="3.2"
                  data-glare-hue="240"
                  data-blend-mode="hard-light"
                  data-tilt-factor-y="0.42"
                  data-tilt-factor="0.42"
                >
                  <div
                    className="block p-[12px] rounded-[16px] h-[475px]"
                    style={
                      {
                        background: "rgba(251, 251, 248, 0.80)",
                        boxShadow:
                          "0 0 0.357px 1.5px rgba(255, 255, 255, 0.35) inset, 0 2px 0 0 #FFF inset, 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(232, 231, 230, 0.32)",
                      } as any
                    }
                  >
                    <img
                      src="/footer/img-footer-1.avif"
                      alt="Checkpost product preview"
                      className="w-full h-full block rounded-[8px] object-cover"
                      style={{ display: "block" }}
                    />
                    <div
                      className="-mt-[232px] md:-mt-[200px] mx-[12px] p-[16px] flex flex-col items-start gap-[10px]"
                      style={
                        {
                          borderRadius: "8px",
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)",
                          boxShadow:
                            "0 -1px 0 0 rgba(0, 0, 0, 0.12) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.10) inset, 0 1px 1px 0 rgba(255, 255, 255, 0.24) inset",
                          backdropFilter: "blur(25px)",
                        } as any
                      }
                    >
                      <p
                        className="m-0"
                        style={
                          {
                            fontSize: "24px",
                            fontWeight: "460",
                            lineHeight: "115%",
                            letterSpacing: "0.24px",
                            textShadow:
                              "0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)",
                          } as any
                        }
                      >
                        <span className="text-white">
                          Checkpost is an agent orchestration platform
                        </span>{" "}
                        <span
                          style={
                            {
                              backgroundImage:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            } as any
                          }
                        >
                          designed to run an entire business.
                        </span>
                      </p>
                      <a
                        className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface"
                        data-analytics-cta="run_a_company"
                        data-analytics-location="footer_card"
                        href="/signup"
                      >
                        <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                          <span className="text-[15px] font-[460] tracking-[0.15px]">
                            Run a company
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          {/* Pixel grass strip */}
          <div
            className="relative w-full h-[92px] overflow-hidden"
            style={{ zIndex: 10 }}
          >
            <img
              src="/footer/footer-bg.avif"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "92px",
                objectFit: "cover",
                objectPosition: "bottom",
                pointerEvents: "none",
              }}
            />
            {/* "Made with" text centered over the grass */}
            <div
              className="absolute inset-0 flex items-end justify-center pb-[14px]"
              style={{ zIndex: 2 }}
            >
              <div className="flex flex-col items-center justify-center min-[1000px]:items-end min-[1000px]:justify-end">
                <div className="flex flex-wrap items-center justify-center gap-[4px] min-[1000px]:justify-end">
                  <span className="footer-made-with font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px] text-[rgba(38,35,35,0.7)]">
                    Made with
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 10.5s-5-3.2-5-6.2a2.8 2.8 0 015-1.8 2.8 2.8 0 015 1.8c0 3-5 6.2-5 6.2z"
                      fill="#e05252"
                    />
                  </svg>
                  <span className="footer-made-with font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px] text-[rgba(38,35,35,0.7)]">
                    by Fantastic 4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
