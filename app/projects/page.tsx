import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'LEARNVE',
      description: 'Online learning platform similar to Udemy with video-based courses and seamless navigation.',
      longDescription: 'LEARNVE is an online learning platform providing a user-friendly interface for accessing educational courses and resources. The platform facilitates video-based learning with tools for seamless course navigation, developed to deliver high-quality content to learners worldwide.',
      tags: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop',
      link: 'https://learnve.vercel.app/',
      github: 'https://github.com/raja2282001',
    },
    {
      id: 2,
      title: 'Openwayz-hazel',
      description: 'Fast and seamless e-commerce platform with modern design and optimal performance.',
      longDescription: 'OpenWayz is an innovative e-commerce platform built with Next.js, offering a fast, seamless, and modern shopping experience. Designed for efficiency and scalability, it enables users to explore and purchase products with ease while prioritizing performance.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
      link: 'https://openwayz-hazel.vercel.app/',
      github: 'https://github.com/raja2282001',
    },
    {
      id: 3,
      title: 'TecheinHub Technologies',
      description: 'Frontend development showcasing React and Next.js expertise with responsive design.',
      longDescription: 'Specialized frontend development using React and Next.js, creating dynamic and responsive web applications. TecheinHub Technologies focuses on delivering efficient and scalable solutions for modern user interfaces with attention to performance and UX.',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      link: 'https://techein.com/index.html',
      github: 'https://github.com/raja2282001',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-4 py-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-primary font-semibold text-sm hover:underline">← Back to home</Link>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white">Projects Portfolio</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              A collection of my recent work showcasing full-stack development, UI/UX design, and problem-solving abilities.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto w-full px-4 py-12 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col overflow-hidden bento-card rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg">
                {/* Image */}
                <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-800 aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/80 transition"
                      >
                        <span className="material-symbols-outlined text-[18px]">link</span>
                        View
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-600 transition"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                    <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                      View Case Study
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto w-full px-4 py-20 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative z-10">
              Let&apos;s discuss your ideas and bring them to life. Contact me today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
                Get In Touch
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi!%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
