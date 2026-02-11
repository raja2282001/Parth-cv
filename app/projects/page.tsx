import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A high-performance storefront with real-time inventory management, Stripe integration, and advanced product filtering.',
      longDescription: 'Built a complete e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory tracking, secure payment processing with Stripe, user authentication, order management, and admin dashboard.',
      tags: ['React', 'Tailwind', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Flow SaaS',
      description: 'Productivity tool featuring drag-and-drop kanban boards, team collaboration, and real-time updates.',
      longDescription: 'A full-featured SaaS platform for team productivity with drag-and-drop interface, real-time collaboration, task tracking, and team management. Built with Next.js and PostgreSQL for optimal performance.',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'TypeScript', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Crypto Dashboard',
      description: 'Real-time cryptocurrency tracking with interactive charts, price alerts, and portfolio management.',
      longDescription: 'A comprehensive crypto analytics dashboard with real-time price tracking, interactive charts using D3.js, price alerts, and portfolio management features. Integrated with multiple crypto APIs.',
      tags: ['Vite', 'D3.js', 'React', 'API Integration', 'Charts'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'AI Content Generator',
      description: 'Intelligent content generation tool using OpenAI API with multiple templates and customization options.',
      longDescription: 'Built an AI-powered content generation platform that helps users create marketing copy, blog posts, and social media content. Integrated with OpenAI API and features a clean, intuitive interface.',
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1677442d019cecf8895e5d392ed90e6c0b2d4d40?w=800&h=400&fit=crop',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media metrics across multiple platforms with detailed insights.',
      longDescription: 'A comprehensive social media analytics tool that aggregates data from Twitter, Instagram, and Facebook. Features include performance tracking, audience insights, and trend analysis with beautiful visualizations.',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'APIs'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=400&fit=crop',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobile-first web application for tracking workouts, nutrition, and fitness goals with community features.',
      longDescription: 'A progressive web app for fitness enthusiasts featuring workout tracking, nutrition logging, goal setting, and community challenges. Built with React, Firebase, and responsive design for mobile and desktop.',
      tags: ['React', 'Firebase', 'Tailwind', 'PWA', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=400&fit=crop',
      link: '#',
      github: '#',
    },
  ]

  return (
    <>
      <Navbar />
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

      <Footer />
      <WhatsAppFab />
    </>
  )
}
