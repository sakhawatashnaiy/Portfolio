import React from 'react';
import { ArrowRight } from 'lucide-react';
import img1 from '../assets/professional.jpeg.jpg';

export default function HeroSection() {
  const primaryBtn = (
    <a
      href="#projects"
      className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-400 to-emerald-400 px-6 py-1.5 text-sm sm:text-base font-semibold text-slate-900 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.9)] group"
      aria-label="View Projects"
    >
      View Projects
      <span className="transform transition-transform duration-200 group-hover:translate-x-2">
        <ArrowRight className="w-4 h-4 text-slate-900" />
      </span>
    </a>
  );

  return (
    <section
      id="home"
      className={`relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-sky-100 to-indigo-100 dark:from-black dark:via-blue-900 dark:to-indigo-900 transition-colors`}
    >
      {/* Subtle abstract background svg/pattern */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-[600px] mix-blend-overlay opacity-10 dark:opacity-10 opacity-0 transition-opacity"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="100%" stopColor="#05204a" />
            <stop offset="100%" stopColor="#071427" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#g1)" />
      </svg>

      <div className="relative z-10 flex items-center pb-10 lg:pb-16">
        <div className="container mx-auto px-3 sm:px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left column: content */}
            <div className="col-span-1 lg:col-span-6 pt-4">
              <div
                className="backdrop-blur-md bg-white/70 dark:bg-white/10 border border-slate-200/70 dark:border-white/20 rounded-3xl p-8 sm:p-12 max-w-6xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.25)] dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] anim-fade-up transition-colors"
              >
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 dark:bg-white/10 backdrop-blur-md border border-slate-200/70 dark:border-white/20 px-3 py-1 text-[11px] sm:text-xs font-medium text-sky-700 dark:text-sky-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available for work</span>
                  </div>

                  <h4
                    className="hero-title-glow italic font-extrabold leading-tight tracking-tight text-3xl sm:text-4xl lg:text-4xl text-slate-900 dark:text-white anim-fade-up anim-delay-120"
                  >
                    Hi I am Sakhawat Ashnaiy,A  Mern Stack Developer
                  </h4>

                  <p
                    className="hidden sm:block text-base sm:text-lg max-w-4xl leading-relaxed text-slate-700 dark:text-white/90 anim-fade-up anim-delay-340"
                  >
                    In 2026, users expect fast, accessible, and smooth experiences. I build modern MERN
                    applications with clean UI, responsive design, secure APIs, and performance-first
                    engineering  ready for production.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3 anim-fade-up anim-delay-640">
                    {primaryBtn}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: visual asset (responsive + centered on small screens) */}
            <div className="col-span-1 lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-md lg:max-w-lg mx-auto transform anim-fade-up anim-delay-120">
                <div className="relative w-full flex justify-center">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 rounded-2xl w-64 h-80 lg:w-96 lg:h-[28rem] bg-gradient-to-br from-blue-500/20 via-indigo-700/10 to-black/20 blur-3xl -z-10 lg:left-auto lg:translate-x-0 lg:-right-12" />
                  <div
                    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-400/20 via-blue-500/12 to-transparent border border-cyan-400/30 flex items-center justify-center overflow-hidden backdrop-blur-md anim-hero-asset-float"
                  >
                    <img
                      src={img1}
                      alt="profile picture"
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
