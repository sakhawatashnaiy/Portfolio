import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Code, ExternalLink, Tag, ArrowRight } from 'lucide-react'

export default function ProjectsSection() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const itemRefs = useRef({})
  const [seen, setSeen] = useState({})

  // High-level project data (images can be wired later)
  const projects = useMemo(
    () => [
      {
        id: 'p-ecom',
        title: 'Custom Ecommerce Store',
        desc: 'A modern ecommerce storefront with product browsing, cart, checkout flow, and a fast, responsive UI.',
        tech: ['React', 'Vite', 'Tailwind'],
        category: 'Ecommerce',
        code: '#',
        demo: '#',
      },
      {
        id: 'p-chat',
        title: 'Realtime Chat',
        desc: 'Fast, resilient WebSocket chat with presence and media handling.',
        tech: ['Node.js', 'Socket.io', 'React'],
        category: 'Full Stack',
        code: '#',
        demo: '#',
      },
      {
        id: 'p-clothing',
        title: 'Clothing Website',
        desc: 'A modern clothing brand website with a clean catalog, product pages, and a mobile-first shopping experience.',
        tech: ['React', 'Vite', 'Tailwind'],
        category: 'Frontend',
        code: '#',
        demo: '#',
      },
      {
        id: 'p-salon',
        title: 'Beauty Salon Website',
        desc: 'A premium salon landing page with services, pricing, gallery, testimonials, and an online appointment CTA.',
        tech: ['React', 'Vite', 'Tailwind'],
        category: 'Business',
        code: '#',
        demo: '#',
      },
      {
        id: 'p-realestate',
        title: 'Real Estate Website',
        desc: 'A real estate showcase site with property listings, filters, featured properties, and inquiry contact flow.',
        tech: ['React', 'Vite', 'Tailwind'],
        category: 'Business',
        code: '#',
        demo: '#',
      },
      {
        id: 'p-gym',
        title: 'Gym Website',
        desc: 'A high-energy fitness website with class schedules, trainer profiles, membership plans, and strong call-to-action sections.',
        tech: ['React', 'Vite', 'Tailwind'],
        category: 'Business',
        code: '#',
        demo: '#',
      },
    ],
    []
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setInView(true)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const elements = Object.values(itemRefs.current).filter(Boolean)
    if (elements.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          const id = en.target?.dataset?.pid
          if (!id) return
          setSeen((prev) => (prev[id] ? prev : { ...prev, [id]: true }))
          obs.unobserve(en.target)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    elements.forEach((node) => obs.observe(node))
    return () => obs.disconnect()
  }, [projects])

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 lg:py-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-[#050505]/95 border border-slate-900/80 shadow-xl p-6 lg:p-10">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white">Project Gallery</h2>
              <p className="mt-2 text-sm text-slate-300">
                A selection of work focused on performance, UX, and production-ready quality.
              </p>
            </div>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {projects.map((p, i) => {
              const reversed = i % 2 === 1
              const show = !!seen[p.id]
              return (
                <article
                  key={p.id}
                  ref={(node) => {
                    if (node) itemRefs.current[p.id] = node
                  }}
                  data-pid={p.id}
                  className={`group relative flex flex-col gap-8 lg:gap-12 ${
                    reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                    show
                      ? 'opacity-100 translate-y-0 blur-0'
                      : `opacity-0 translate-y-8 blur-[2px] ${
                          reversed ? 'lg:translate-x-6' : 'lg:-translate-x-6'
                        }`
                  }`}
                  style={{ transitionDelay: show ? `${i * 90}ms` : '0ms' }}
                >
                  {/* Text side (sticky on lg) */}
                  <div className="lg:w-2/5 lg:sticky lg:top-24 self-start space-y-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{p.category}</p>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white">{p.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 rounded-full border border-slate-800/80 bg-white/5/50 px-3 py-1 text-xs text-slate-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                        >
                          <Tag className="h-3 w-3 text-slate-400" />
                          <span className="whitespace-nowrap">{t}</span>
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(8,_112,_184,_0.7)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(8,_112,_184,_0.9)]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-2 rounded-full border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-indigo-500/60 hover:bg-slate-900/60"
                      >
                        <Code className="h-4 w-4" />
                        <span>View Code</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover/cta:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* Image / browser mockup side */}
                  <div className="lg:w-3/5">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.02] lg:group-hover:-rotate-[0.35deg]">
                      {/* Browser chrome */}
                      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="h-5 flex-1 mx-4 rounded-full bg-slate-800/80" />
                        <div className="h-3 w-10 rounded-full bg-slate-800/80" />
                      </div>

                      {/* Screenshot area */}
                      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 via-indigo-700/40 to-slate-900/90" />
                        <div
                          className="relative h-full w-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.5),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.6),transparent_55%)] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />

                        {/* Mask overlay fades on hover */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-0" />

                        {/* Subtle shine */}
                        <div className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[220%]" />
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
