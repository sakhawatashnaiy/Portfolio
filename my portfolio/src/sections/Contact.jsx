import React, { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Send, ExternalLink } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

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
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      // Simple client-side validation
      return
    }
    setSending(true)
    setSuccess(false)
    // fake sending delay
    await new Promise((r) => setTimeout(r, 900))
    setSending(false)
    setSuccess(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <section id="contact" ref={ref} className={`py-16 lg:py-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: contact card/form */}
          <div className="col-span-1 lg:col-span-7">
            <div className="backdrop-blur-2xl bg-slate-950/60 border border-cyan-400/20 rounded-3xl p-6 lg:p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5">
                  <Mail className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-cyan-300">Get In Touch</h2>
                  <p className="text-sm text-white/70 mt-1">Whether you have a project idea or want to say hi, my inbox is open.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex flex-col">
                    <span className="text-xs text-white/70 mb-1">Name</span>
                    <input value={form.name} onChange={update('name')} placeholder="Your name" className="bg-white/3 placeholder:text-white/40 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition" />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-xs text-white/70 mb-1">Email</span>
                    <input value={form.email} onChange={update('email')} placeholder="you@domain.com" className="bg-white/3 placeholder:text-white/40 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition" />
                  </label>
                </div>

                <label className="flex flex-col">
                  <span className="text-xs text-white/70 mb-1">Message</span>
                  <textarea value={form.message} onChange={update('message')} rows={6} placeholder="Tell me about your project..." className="bg-white/3 placeholder:text-white/40 px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition resize-none" />
                </label>

                <div className="flex items-center gap-3">
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-2 bg-cyan-400 text-slate-900 px-4 py-2 rounded-full font-semibold hover:scale-105 transition transform disabled:opacity-60">
                    {sending ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4 text-slate-900" />
                  </button>

                  {success && (
                    <div className="text-sm text-cyan-300 font-medium">Message sent — thanks!</div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right: contact info & map */}
          <div className="col-span-1 lg:col-span-5">
            <div className="backdrop-blur-2xl bg-slate-950/60 border border-cyan-400/20 rounded-3xl p-6 shadow-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white/90">Contact Info</h3>
                <p className="text-sm text-white/70 mt-2">Prefer email? Use the form, or reach out on socials below.</p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-white/5"><Mail className="w-5 h-5 text-cyan-300" /></div>
                    <div className="text-sm text-white/90">Sakhawatashnaiy@09gmail.com</div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-white/5"><MapPin className="w-5 h-5 text-cyan-300" /></div>
                    <div className="text-sm text-white/90">Remote • Available Worldwide</div>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm text-white/80 mb-3">Socials</h4>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/sakhawatashnaiy/React-js-project.git " className="inline-flex items-center gap-2 px-3 py-2 bg-white/3 rounded-full text-white/90 hover:bg-white/5 transition"><ExternalLink className="w-4 h-4 text-cyan-300" /> GitHub</a>
                  <a href="https://www.linkedin.com/in/sakhawat-hussain-897aa9289?utm_source=share_via&utm_content=profile&utm_medium=member_android " className="inline-flex items-center gap-2 px-3 py-2 bg-white/3 rounded-full text-white/90 hover:bg-white/5 transition"><ExternalLink className="w-4 h-4 text-cyan-300" /> LinkedIn</a>
                </div>

                <div className="mt-6">
                  {/*
                    Responsive map iframe.
                    Replace `defaultQuery` with your address or coordinates.
                    Example: const defaultQuery = 'Lahore, Pakistan' or '40.7128,-74.0060'
                  */}
                  {(() => {
                    const defaultQuery = 'Lahore, Pakistan'
                    const q = encodeURIComponent(defaultQuery)
                    const mapSrc = `https://www.google.com/maps?q=${q}&output=embed`
                    return (
                      <div className="w-full overflow-hidden rounded-xl border border-white/6">
                        <iframe
                          title="Location map"
                          src={mapSrc}
                          className="w-full h-40 sm:h-48 md:h-56 lg:h-44"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    )
                  })()}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
