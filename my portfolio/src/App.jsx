import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import ProjectsSection from './sections/Projects.jsx'
import SkillsSection from './sections/Skills.jsx'
import ContactSection from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  const orbRef = useRef(null)

  // enable smooth scrolling for anchor links
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = prev
    }
  }, [])

  // Animated floating orb using RAF
  useEffect(() => {
    let raf = null
    let start = performance.now()
    const el = orbRef.current
    function loop(now) {
      const t = (now - start) * 0.001
      if (el) {
        const x = Math.cos(t * 0.6) * 60
        const y = Math.sin(t * 0.8) * 36
        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`
        el.style.opacity = `${0.55 + Math.sin(t * 0.9) * 0.12}`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
	<div className="min-h-screen w-full relative overflow-hidden">
      {/* Floating decorative orb (glowy accent) */}
      <div
        ref={orbRef}
        aria-hidden
        className="pointer-events-none absolute top-12 left-8 w-44 h-44 rounded-full bg-cyan-400/20 blur-3xl -z-10"
        style={{ transform: 'translate3d(0,0,0)', transition: 'opacity 300ms linear' }}
      />

      {/* Optional subtle overlay pattern to enhance depth */}
      <svg className="absolute inset-0 w-full h-full mix-blend-overlay opacity-10 pointer-events-none -z-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="a" x1="0" x2="1">
            <stop offset="0%" stopColor="#0b1120" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#a)" />
      </svg>

      <Navbar />

      <main className="relative z-10 anim-fade-up">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 pt-20">
          {/* Main glassy wrapper */}
          <div className="backdrop-blur-2xl bg-slate-950/60 border border-cyan-400/20 rounded-3xl shadow-2xl shadow-black/40 p-6 lg:p-8">
            <section id="home"><Hero /></section>

            {/* Small spacer for separation, About and Projects appear within the same glass container for continuity */}
            <div className="mt-5">
              <section id="about"><About /></section>
            </div>

            <div className="mt-5">
              <section id="projects"><ProjectsSection /></section>
            </div>

            <div className="mt-5">
              <section id="skills"><SkillsSection /></section>
            </div>

            <div className="mt-5">
              <section id="contact"><ContactSection /></section>
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
      className="fixed right-6 bottom-8 z-50 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-white p-3 shadow-lg focus:outline-none"
    >
      ↑
    </button>
  )
}

export default App
 