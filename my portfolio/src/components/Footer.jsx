import React, { useState, useEffect } from 'react'
 import {Instagram,Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  function validateEmail(v) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)
  }

  async function onSubmit(e) {
    e?.preventDefault()
    if (!validateEmail(email)) {
      setStatus('error')
      return
    }
    setStatus('sending')
    // simulate network
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 1600)
  }

  return (
    <footer className={`w-full mt-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} aria-labelledby="footer-heading">
      <div className="relative overflow-hidden">
        {/* decorative soft blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div aria-hidden className="pointer-events-none absolute -top-10 -right-20 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl animate-pulse delay-75" />

  <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 backdrop-blur-2xl bg-slate-950/60 border border-cyan-400/20 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Brand + blurb */}
            <div className="space-y-4">
              <a href="#home" className="flex items-center gap-3">
                <span className="text-2xl font-semibold tracking-tight text-slate-100">Portfolio</span>
                <span className="w-3 h-3 bg-cyan-400 rounded-full block" />
              </a>
              <p className="text-sm text-slate-300 max-w-sm">This portfolio is build at the time of my react journey!</p>

              <div className="flex items-center gap-3 mt-2">
                <a aria-label="GitHub" href="#" className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition transform hover:-translate-y-1">
                  <Instagram className="w-5 h-5 text-slate-100" />
                </a>
                <a aria-label="LinkedIn" href="#" className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition transform hover:-translate-y-1">
                  <Linkedin className="w-5 h-5 text-slate-100" />
                </a>
                <a aria-label="Twitter" href="#" className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition transform hover:-translate-y-1">
                  <Twitter className="w-5 h-5 text-slate-100" />
                </a>
                <a aria-label="Email" href="#contact" className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition transform hover:-translate-y-1">
                  <Mail className="w-5 h-5 text-slate-100" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-1 flex justify-between md:justify-center">
              <div>
                <h3 className="text-sm font-medium text-slate-200 mb-3">Explore</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
                  <li><a href="#projects" className="hover:text-cyan-300 transition">Projects</a></li>
                  <li><a href="#skills" className="hover:text-cyan-300 transition">Skills</a></li>
                  <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
                </ul>
              </div>
              <div className="hidden sm:block">
                <h3 className="text-sm font-medium text-slate-200 mb-3">Resources</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="#" className="hover:text-cyan-300 transition">Resume</a></li>
                  <li><a href="#" className="hover:text-cyan-300 transition">Blog</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter / CTA */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-medium text-slate-200 mb-3">Stay in touch</h3>
              <p className="text-sm text-slate-300 mb-4">Get occasional updates about projects and posts. No spam — unsubscribe anytime.</p>

              <form onSubmit={onSubmit} className="flex gap-2 max-w-md">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="min-w-0 flex-1 rounded-full bg-white/4 placeholder:text-slate-400 text-slate-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400/90 hover:bg-cyan-400/100 text-black px-4 py-2 font-semibold transition-shadow focus:ring-2 focus:ring-cyan-300"
                >
                  {status === 'sending' ? (
                    <svg className="w-4 h-4 animate-spin text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="3" strokeOpacity="0.4" /><path d="M22 12a10 10 0 00-10-10" strokeWidth="3" strokeLinecap="round" /></svg>
                  ) : status === 'success' ? (
                    <span>✓</span>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-black" />
                  )}
                </button>
              </form>

              {status === 'error' && <p className="mt-2 text-xs text-rose-400">Please enter a valid email address.</p>}
              {status === 'success' && <p className="mt-2 text-xs text-emerald-400">Thanks — you’re subscribed!</p>}
            </div>
          </div>

          <div className="mt-8 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} @Portfolio sakhawatashnaiy.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
