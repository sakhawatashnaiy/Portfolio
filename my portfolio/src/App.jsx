import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import ProjectsSection from './sections/Projects.jsx'
import SkillsSection from './sections/Skills.jsx'
import ContactSection from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      // ignore
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    const isDark = theme === 'dark'
    root.classList.toggle('dark', isDark)
    document.body.classList.toggle('dark', isDark)

    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  // enable smooth scrolling for anchor links
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = prev
    }
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
  <div className="min-h-screen w-full relative overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      {/* Floating decorative orb (glowy accent) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-12 left-8 w-44 h-44 rounded-full bg-cyan-400/20 blur-3xl -z-10 anim-orb-float"
      />

      {/* Optional subtle overlay pattern to enhance depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 pointer-events-none opacity-70 dark:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.10),transparent_55%)]"
      />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-10 anim-fade-up">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-4 lg:px-6 pt-20">
          {/* Main glassy wrapper */}
          <div className="backdrop-blur-2xl bg-white/70 dark:bg-slate-950/60 border border-slate-200/70 dark:border-cyan-400/20 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-6 lg:p-8 transition-colors">
            <Hero />

            {/* Small spacer for separation, About and Projects appear within the same glass container for continuity */}
            <div className="mt-5">
              <About />
            </div>

            <div className="mt-5">
              <ProjectsSection />
            </div>

            <div className="mt-5">
              <SkillsSection />
            </div>

            <div className="mt-5">
              <ContactSection />
            </div>

            <div className="mt-5">
              <Footer />
            </div>
          </div>
        </div>
      </main>

      {/* Back to top button */}
      <BackToTop />
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      const next = window.scrollY > 400
      setVisible((prev) => (prev === next ? prev : next))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed right-6 bottom-8 z-50 rounded-full bg-cyan-600/90 hover:bg-cyan-500 text-white p-3 shadow-lg focus:outline-none transition-colors"
    >
      ↑
    </button>
  )
}

export default App
 