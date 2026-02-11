import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'LEARNVE',
      description: 'An online learning platform similar to Udemy with video-based learning and seamless course navigation.',
      tags: ['Next.js', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Openwayz-hazel',
      description: 'Fast and seamless e-commerce platform built with Next.js prioritizing performance and user engagement.',
      tags: ['Next.js', 'Tailwind', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'TecheinHub Technologies',
      description: 'Frontend development using React and Next.js, creating dynamic and responsive web applications.',
      tags: ['React', 'Next.js', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <header className="relative overflow-hidden flex-1">
          <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for hire
                </div>
                <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-[1.1] tracking-[-0.03em] md:text-7xl">
                  Hi, I&apos;m <span className="text-primary">Parth Patel</span>
                </h1>
                <div className="flex items-center gap-2">
                  <h2 className="text-slate-600 dark:text-slate-400 text-xl font-medium">
                    Frontend &amp; Backend Developer <span className="text-primary">|</span> Web Developer (7 months experience)
                  </h2>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-lg">
                  Building high-performance web applications with React, Next.js, and modern technologies. Focused on creating seamless user experiences with responsive design and robust architectures.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/projects"
                    className="flex-1 md:flex-none min-w-[140px] text-center items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98] neon-glow"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 md:flex-none min-w-[140px] text-center items-center justify-center rounded-xl h-12 px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold border border-slate-200 dark:border-slate-700 transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-full max-w-[600px] bento-card rounded-2xl overflow-hidden aspect-video relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
                  alt="Web development workspace"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background-dark/80 backdrop-blur p-4 rounded-xl border border-white/10 z-20">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-slate-800 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-xs text-blue-400">code</span>
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-slate-800 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-xs text-purple-400">palette</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 font-medium tracking-wide">DESIGN • DEVELOP • DEPLOY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Projects */}
        <div className="max-w-7xl mx-auto px-4 w-full mt-12">
          <div className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-1">Portfolio</p>
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-primary font-bold text-sm hover:underline hidden md:block">View All</Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-7xl mx-auto px-4 w-full mt-16">
          <div className="flex flex-col gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <p className="text-primary text-sm font-bold uppercase tracking-widest">Capabilities</p>
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Tech Stack</h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Frontend */}
            <div className="col-span-2 md:row-span-2 bento-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">desktop_windows</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-slate-500 text-sm font-medium">Expert in building responsive, accessible, and performant web interfaces.</p>
              </div>
            </div>

            {/* Backend */}
            <div className="col-span-2 bento-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-500 text-2xl">database</span>
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'GraphQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="col-span-1 bento-card rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-orange-500 text-2xl">build</span>
              </div>
              <h3 className="text-lg font-bold">Tools</h3>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Git / GitHub</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Docker</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Vercel</li>
              </ul>
            </div>

            {/* Design */}
            <div className="col-span-1 bento-card rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-500 text-2xl">brush</span>
              </div>
              <h3 className="text-lg font-bold">Design</h3>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>Figma</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>UI/UX</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>SVG</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 w-full">
          <CTASection />
        </section>
      </div>
    </div>
  )
}
