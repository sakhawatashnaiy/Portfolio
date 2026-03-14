import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const timeline = [
	{
		year: '2025',
		title: 'Principal Frontend Engineer Forma',
		desc: 'Led the redesign of the enterprise analytics suite, shipping a flexible layout engine and improving time-to-insight by 27%.',
	},
	{
		year: '2024',
		title: 'Fullstack Developer Hub Corporation',
		desc: 'Built and shipped full-stack features across web apps, designing REST APIs, integrating databases, and delivering responsive UIs end-to-end.',
	},
	{
		year: '2023',
		title: 'Founding UI Engineer Studio Labs',
		desc: 'Scaled component systems, introduced performance budgets, and championed accessibility-first design reviews.',
	},
]

const skills = [
	{ name: 'React', hover: 'hover:text-[#61DAFB] hover:border-[#61DAFB]/50 hover:shadow-[0_0_20px_rgba(97,218,251,0.4)]' },
	{ name: 'TypeScript', hover: 'hover:text-[#3178C6] hover:border-[#3178C6]/50 hover:shadow-[0_0_20px_rgba(49,120,198,0.4)]' },
	{ name: 'Tailwind', hover: 'hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]' },
	{ name: 'Node.js', hover: 'hover:text-[#6CC24A] hover:border-[#6CC24A]/50 hover:shadow-[0_0_20px_rgba(108,194,74,0.4)]' },
	{ name: 'Next.js', hover: 'hover:text-white hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]' },
	{ name: 'GraphQL', hover: 'hover:text-[#E535AB] hover:border-[#E535AB]/50 hover:shadow-[0_0_20px_rgba(229,53,171,0.4)]' },
	{ name: 'Figma', hover: 'hover:text-[#F24E1E] hover:border-[#F24E1E]/50 hover:shadow-[0_0_20px_rgba(242,78,30,0.4)]' },
	{ name: 'AWS', hover: 'hover:text-[#FF9900] hover:border-[#FF9900]/50 hover:shadow-[0_0_20px_rgba(255,153,0,0.4)]' },
]

export default function AboutSection() {
	const [copied, setCopied] = useState(false)

	const handleCopyPortfolioLink = async () => {
		const url = window.location.href

		try {
			await navigator.clipboard.writeText(url)
			setCopied(true)
			window.setTimeout(() => setCopied(false), 1500)
		} catch {
			const textarea = document.createElement('textarea')
			textarea.value = url
			textarea.setAttribute('readonly', '')
			textarea.style.position = 'absolute'
			textarea.style.left = '-9999px'
			document.body.appendChild(textarea)
			textarea.select()
			document.execCommand('copy')
			document.body.removeChild(textarea)
			setCopied(true)
			window.setTimeout(() => setCopied(false), 1500)
		}
	}

	return (
		<section
			id="about"
			className="relative py-16 sm:py-20 lg:py-24 text-neutral-300 [background:radial-gradient(circle_at_top,rgba(15,118,255,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.08),transparent_55%),#0a0a0a]"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
				{/* Intro */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start lg:items-center max-w-5xl mx-auto text-center lg:text-left">
					<div className="lg:col-span-3 flex justify-center lg:justify-start">
						<p className="text-2xl sm:text-3xl font-black tracking-[0.28em] text-transparent [text-stroke:1px_rgba(120,120,120,0.45)]">
							ABOUT
						</p>
					</div>
					<div className="lg:col-span-9 space-y-4 sm:space-y-6 justify-center">
						<p className="text-lg sm:text-2xl uppercase tracking-[0.22em] sm:tracking-[0.4em] text-indigo-300">My Story</p>
						<p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
							Building confident interfaces and systems that feel inevitable.
						</p>
						<p className="text-base sm:text-xl text-neutral-200/90 text-balance">
							I design and engineer experiences for ambitious teams blending product strategy, interaction design, and systems
							thinking to ship digital products that scale.
						</p>
						<div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-neutral-300/90">
							<p>
								From design ops to DX tooling, I lean on thoughtful process and technical rigor. My work spans multi brand design
								systems, enterprise dashboards, and immersive collaboration suites.
							</p>
							<p>
								Today, I partner with founders and product orgs to deliver polished, measurable outcomes mentoring teams along the
								way so craft becomes a shared habit, not a bottleneck.
							</p>
						</div>

						<button
							type="button"
							onClick={handleCopyPortfolioLink}
							className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-5 py-2 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.65,_0,_0.35,_1)] hover:border-indigo-400/60 hover:bg-neutral-900"
						>
							{copied ? 'Copied!' : 'Copy Portfolio Link'}
							<span className="relative inline-flex overflow-hidden">
								<ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1" />
							</span>
						</button>
					</div>
				</div>

				{/* Timeline */}
				<section className="mt-16 sm:mt-24 space-y-8 sm:space-y-10 text-white sm:italic">
					<header className="text-center">
						<p className="text-xl sm:text-4xl uppercase tracking-[0.22em] sm:tracking-[0.35em] text-white">Trajectory</p>
						<h3 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
							Where craft met impact
						</h3>
					</header>

					<div className="relative max-w-3xl mx-auto">
						<span
							className="hidden sm:block absolute top-0 bottom-0 w-px bg-white left-4 sm:left-1/2 sm:-translate-x-1/2"
							aria-hidden
						/>

						<div className="space-y-6 sm:space-y-10">
							{timeline.map((item) => (
								<article
									key={item.year}
									className="group relative w-full max-w-none sm:max-w-xl mx-0 sm:mx-auto pt-2 sm:pt-4"
								>
									<span className="hidden sm:block absolute left-4 top-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full border border-white bg-white transition-all duration-500 sm:left-1/2 sm:-translate-x-1/2" />
									<div className="transition-all duration-500">
										<div className="rounded-2xl border border-white/5 bg-neutral-900/30 backdrop-blur-md p-4 sm:p-6 shadow-lg text-center">
											<p className="text-sm uppercase tracking-[0.25em] sm:tracking-[0.4em] text-white">{item.year}</p>
											<h4 className="mt-2 sm:mt-3 text-xl sm:text-3xl font-semibold text-white">{item.title}</h4>
											<p className="mt-2 text-base sm:text-lg leading-relaxed text-white/90">{item.desc}</p>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Capabilities */}
				<section className="mt-16 sm:mt-24">
					<header className="space-y-2 text-center">
						<p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Expertise</p>
						<h3 className="text-3xl font-bold tracking-tight text-white text-balance">Technical capabilities</h3>
						<p className="text-sm sm:text-base text-neutral-500">The tools and platforms I use to deliver reliable, expressive interfaces.</p>
					</header>

					<div className="mt-8 flex flex-wrap justify-center gap-3">
						{skills.map((skill) => (
							<span
								key={skill.name}
								className={`px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 transition-all duration-300 ease-out hover:-translate-y-1 ${skill.hover}`}
							>
								{skill.name}
							</span>
						))}
					</div>
				</section>
			</div>
		</section>
	)
}
 