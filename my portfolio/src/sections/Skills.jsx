import React, { useEffect, useRef, useState } from 'react'
import { Code, Layers, Cloud, Database, Zap, Terminal } from 'lucide-react'

export default function SkillsSection() {
  const ref = useRef(null)
  const cardRefs = useRef({})
  const [inView, setInView] = useState(false)
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const skills = [
    { id: 's1', name: 'React', cat: 'Frontend', icon: Code, level: 92, tags: ['TypeScript', 'Tailwind'] , desc: 'Component-driven UI, hooks, state management and performance tuning.'},
    { id: 's2', name: 'TypeScript', cat: 'Frontend', icon: Layers, level: 90, tags: ['Types', 'Generics'] , desc: 'Strongly-typed code, safer APIs, and better DX.'},
    { id: 's3', name: 'Node.js', cat: 'Backend', icon: Terminal, level: 88, tags: ['Express', 'APIs'] , desc: 'Event-driven servers, efficient APIs, and service wiring.'},
    { id: 's4', name: 'Databases', cat: 'Backend', icon: Database, level: 82, tags: ['Postgres', 'Prisma'] , desc: 'Relational data modeling, queries, and migrations.'},
    { id: 's5', name: 'Cloud', cat: 'DevOps', icon: Cloud, level: 76, tags: ['AWS', 'Deploy'] , desc: 'Deployments, serverless patterns, and infra as code.'},
    { id: 's6', name: 'Performance', cat: 'Tools', icon: Zap, level: 78, tags: ['Profiling', 'Lighthouse'] , desc: 'Optimizing rendering, bundles, and runtime performance.'},
  ]

  const filters = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools']

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const filtered = skills.filter((s) => filter === 'All' || s.cat === filter)

  const onCardMove = (e, id) => {
    if (e.pointerType && e.pointerType !== 'mouse') return
    const el = cardRefs.current[id]
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const rotY = x * 8
    const rotX = -y * 6
    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`
  }

  const onCardLeave = (id) => {
    const el = cardRefs.current[id]
    if (!el) return
    el.style.transform = ''
  }

  return (
    <section id="skills" ref={ref} className={`py-16 lg:py-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-cyan-300">Skills & Tools</h2>
            <p className="text-sm text-white/70 mt-1">Technical skills showcased with proficiency and focused filters.</p>
          </div>

          <div className="-mx-6 px-6 md:mx-0 md:px-0 flex gap-2 items-center overflow-x-auto py-2 touch-pan-x snap-x snap-mandatory scroll-px-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`snap-start whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium transition ${filter === f ? 'bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20' : 'text-white/70 hover:bg-white/5'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((s, i) => {
            const Icon = s.icon
            return (
              <article
                key={s.id}
                ref={(el) => (cardRefs.current[s.id] = el)}
                onPointerMove={(e) => onCardMove(e, s.id)}
                onPointerLeave={() => onCardLeave(s.id)}
                onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                className={`group cursor-pointer select-none backdrop-blur-2xl bg-slate-950/60 border border-cyan-400/20 rounded-2xl p-4 transition-all duration-300 active:scale-[0.99] sm:hover:-translate-y-3 hover:shadow-2xl overflow-hidden will-change-transform`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/5">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                    <div className="text-xs text-white/60">{s.cat}</div>
                  </div>
                  <div className="ml-auto text-sm text-white/60">{s.level}%</div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-white/6 rounded-full h-2 overflow-hidden">
                    <div className={`h-2 bg-cyan-400 transition-all duration-1000 ease-out`} style={{ width: inView ? `${s.level}%` : '0%' }} />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/3 px-2 py-1 rounded-full">
                      <span className="w-2 h-2 bg-cyan-300 rounded-full" />
                      <span className="whitespace-nowrap">{t}</span>
                    </span>
                  ))}
                </div>

                <div className={`mt-4 overflow-hidden transition-all duration-300 ${expanded === s.id ? 'max-h-48 sm:max-h-40' : 'max-h-0'}`}>
                  <p className="text-sm text-white/70">{s.desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
