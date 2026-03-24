import React, { useMemo } from 'react'
import { Code, ExternalLink, ArrowRight } from 'lucide-react'

 import ecommerceImg from '../assets/Eccomerce1.png'
import clothingImg from '../assets/clothing world.jpg'
import salonImg from '../assets/beautysaloon.jpeg'
import realEstateImg from '../assets/Real state.jpg'
import gymImg from '../assets/Gym website.png'
import nexusImg from '../assets/nexus.png'

export default function ProjectsSection() {
  // Project data
  const projects = useMemo(
    () => [
      {
        id: 'p-ecom',
        title: 'Custom Ecommerce Store',
        desc: 'A modern ecommerce storefront with product browsing, cart, checkout flow, and a fast, responsive UI.',
        category: 'Ecommerce',
        image: ecommerceImg,
        code: 'https://github.com/sakhawatashnaiy/eccomerce-fullstack-design.git',
        demo: 'https://eccomerce-fullstack-design.vercel.app/',
      },
      {
        id: 'p-chat',
        title: 'NEXSUS Platform',
        desc: 'An investor-ready collaboration platform that unifies projects, documents, meetings, and payments in one audit-friendly workspace with clear status and compliance-friendly history.',
        category: 'Platform',
        image: nexusImg,
        code: 'https://github.com/sakhawatashnaiy/Nexsus-Github-Repo.git',
        demo: 'https://nexsus-github-repo.vercel.app/',
      },
      {
        id: 'p-clothing',
        title: 'Clothing Website',
        desc: 'A modern clothing brand website with a clean catalog, product pages, and a mobile-first shopping experience.',
        category: 'Frontend',
        image: clothingImg,
        code: '#',
        demo: '#',
      },
      {
        id: 'p-salon',
        title: 'Beauty Salon Website',
        desc: 'A premium salon landing page with services, pricing, gallery, testimonials, and an online appointment CTA.',
        category: 'Business',
        image: salonImg,
        code: 'https://github.com/sakhawatashnaiy/myfronentendprojects.git',
        demo: 'https://myluxebeauty99.netlify.app/',
      },
      {
        id: 'p-realestate',
        title: 'Real Estate Website',
        desc: 'A real estate showcase site with property listings, filters, featured properties, and inquiry contact flow.',
        category: 'Business',
        image: realEstateImg,
        code: 'https://github.com/sakhawatashnaiy/Realstaesite.git',
        demo: 'https://glowing-paprenjak-3ac923.netlify.app/',
      },
      {
        id: 'p-gym',
        title: 'Gym Website',
        desc: 'A high-energy fitness website with class schedules, trainer profiles, membership plans, and strong call-to-action sections.',
        category: 'Business',
        image: gymImg,
        code: '#',
        demo: '#',
      },
    ],
    []
  )

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-24"
    >
      <div className="container mx-auto px-3 sm:px-5 lg:px-12">
        <div className="rounded-3xl bg-white/70 dark:bg-[#050505]/95 border border-slate-200/70 dark:border-slate-900/80 shadow-xl p-4 sm:p-6 lg:p-10 transition-colors">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white">Project Gallery</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A selection of work focused on performance, UX, and production-ready quality.
              </p>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {projects.map((p, i) => {
              const reversed = i % 2 === 1
			  const show = true
				const hasDemo = !!p.demo && p.demo !== '#'
				const hasCode = !!p.code && p.code !== '#'
              return (
                <article
                  key={p.id}
                  className={`group relative flex flex-col gap-6 sm:gap-8 lg:gap-12 ${
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
                  <div className="lg:w-2/5 lg:sticky lg:top-24 self-start space-y-3 sm:space-y-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{p.category}</p>
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>

                    <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
						onClick={(e) => {
							if (!hasDemo) e.preventDefault()
						}}
						aria-disabled={!hasDemo}
						className={`inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-[0_18px_40px_rgba(8,_112,_184,_0.7)] transition-all duration-300 ${
							hasDemo
								? 'bg-sky-500 text-slate-950 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(8,_112,_184,_0.9)]'
								: 'bg-slate-800/60 text-slate-300 opacity-60 cursor-not-allowed'
						}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
						onClick={(e) => {
							if (!hasCode) e.preventDefault()
						}}
						aria-disabled={!hasCode}
						className={`group/cta inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
							hasCode
									? 'border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 hover:border-indigo-500/60 hover:bg-white dark:hover:bg-slate-900/60'
								: 'border-slate-800/60 bg-transparent text-slate-400 opacity-60 cursor-not-allowed'
						}`}
                      >
                        <Code className="h-4 w-4" />
                        <span>View Code</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover/cta:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* Image / browser mockup side */}
                  <div className="lg:w-3/5">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-slate-950/80 shadow-2xl shadow-black/10 dark:shadow-black/40 backdrop-blur-xl transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.02] lg:group-hover:-rotate-[0.35deg] transition-colors">
                      {/* Browser chrome */}
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/90 px-4 py-2 transition-colors">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="h-5 flex-1 mx-2 sm:mx-4 rounded-full bg-slate-200 dark:bg-slate-800/80 transition-colors" />
                        <div className="h-3 w-10 rounded-full bg-slate-200 dark:bg-slate-800/80 transition-colors" />
                      </div>

                      {/* Screenshot area */}
                      <div className="relative h-44 sm:h-56 md:h-72 lg:h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 via-indigo-700/40 to-slate-900/90" />
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={`${p.title} preview`}
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                          />
                        ) : (
                          <div className="relative h-full w-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.5),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.6),transparent_55%)] transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                        )}

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
