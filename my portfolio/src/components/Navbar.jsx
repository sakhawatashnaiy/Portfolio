import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const t = setTimeout(() => setMounted(true), 60);
		return () => clearTimeout(t);
	}, []);

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const links = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Skills", href: "#skills" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<>
			<style>{`
				.nav-float { animation: navFloat 6s ease-in-out infinite; }
				@keyframes navFloat { 0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)} }
				.ska-brand { font-style: italic; font-weight: 800; letter-spacing: -0.02em; animation: skaBrand 2.6s ease-in-out infinite; text-shadow: 0 0 0 rgba(56,189,248,0); }
				@keyframes skaBrand { 0%{transform:translateY(0) scale(1); text-shadow: 0 0 0 rgba(56,189,248,0), 0 0 0 rgba(129,140,248,0);} 50%{transform:translateY(-2px) scale(1.02); text-shadow: 0 0 26px rgba(56,189,248,0.25), 0 0 46px rgba(129,140,248,0.18);} 100%{transform:translateY(0) scale(1); text-shadow: 0 0 0 rgba(56,189,248,0), 0 0 0 rgba(129,140,248,0);} }
				.lets-talk { animation: letsTalkPulse 2.4s ease-in-out infinite; }
				@keyframes letsTalkPulse { 0%, 100%{ box-shadow: 0 0 0 rgba(56,189,248,0); } 50%{ box-shadow: 0 0 26px rgba(56,189,248,0.22); } }
				@media (prefers-reduced-motion: reduce) { .nav-float, .ska-brand, .lets-talk { animation: none; } }
				.link-underline { position: relative; }
				.link-underline::after { content: ''; position: absolute; left: 50%; transform: translateX(-50%); bottom: -8px; width: 0%; height: 3px; border-radius: 6px; background: linear-gradient(90deg, rgba(59,130,246,0.95), rgba(99,102,241,0.85)); transition: width 260ms cubic-bezier(.2,.9,.25,1); }
				.link-underline:hover::after, .link-underline.active::after { width: 72%; }
			`}</style>

			<nav
				ref={navRef}
				aria-label="Main Navigation"
				className={`fixed left-4 right-4 top-4 z-50 transform transition-all duration-700 ease-out ${
					mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
				}`}
			>
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex items-center justify-between gap-4 px-3 py-3 nav-float backdrop-blur-2xl bg-gradient-to-r from-white/5 via-white/3 to-white/5 dark:from-black/50 dark:via-black/40 dark:to-black/50 border border-white/8 dark:border-white/6 rounded-2xl shadow-2xl">
						<a href="#home" className="flex items-center gap-3 select-none" aria-label="SKA Home">
								<div className="flex items-center gap-3">
								<span className="ska-brand text-white text-xl sm:text-2xl tracking-tight">SKA</span>
								<span className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_16px_rgba(59,130,246,0.35)] block" />
							</div>
						</a>

						<ul className="hidden lg:flex items-center gap-6">
							{links.map((l) => (
								<li key={l.name}>
									<a
										href={l.href}
										className={`italic text-base lg:text-lg text-white px-3 py-2 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/25 link-underline`}
									>
										{l.name}
									</a>
								</li>
							))}
						</ul>

						<div className="flex items-center gap-3">
							<a
								href="#contact"
								className="lets-talk hidden md:inline-flex items-center gap-2 bg-blue-400/10 text-blue-300 px-4 py-2 rounded-full text-sm font-bold italic hover:scale-105 transition"
							>
								Let's talk
							</a>

							<button
								aria-label={open ? "Close menu" : "Open menu"}
								aria-expanded={open}
								onClick={() => setOpen((s) => !s)}
								className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-slate-100 hover:bg-white/6 transition"
							>
								{open ? <X className="w-6 h-6 text-blue-300" /> : <Menu className="w-6 h-6 text-slate-100" />}
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Panel */}
			<div
				aria-hidden={!open}
				className={`fixed inset-0 z-40 flex items-start justify-center pt-24 px-6 text-center transition-all duration-400 ease-in-out ${
					open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
			>
				<div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />

				<div className={`relative w-full max-w-md mx-auto transform transition-transform ${open ? 'translate-y-0' : '-translate-y-6'}`}>
					<div className="mx-4 backdrop-blur-2xl bg-white/6 dark:bg-black/40 border border-white/8 dark:border-white/6 rounded-2xl p-6 shadow-2xl">
						<div className="flex items-center justify-between mb-4">
							<div className="text-lg font-semibold text-white/95">Menu</div>
							<button onClick={() => setOpen(false)} className="p-2 rounded-md text-slate-100 hover:bg-white/6 transition">
								<X className="w-6 h-6 text-blue-300" />
							</button>
						</div>

						<ul className="flex flex-col gap-4">
							{links.map((l) => (
								<li key={l.name}>
									<a
										href={l.href}
										onClick={() => setOpen(false)}
										className={`block italic text-3xl font-semibold text-white py-2 rounded transition hover:text-cyan-300`}
									>
										{l.name}
									</a>
								</li>
							))}
						</ul>

						<div className="mt-6">
							<a href="#contact" onClick={() => setOpen(false)} className="inline-block w-full text-center bg-cyan-400/10 text-cyan-300 px-4 py-3 rounded-full font-medium transition hover:bg-cyan-400/20">
								Let's connect
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

