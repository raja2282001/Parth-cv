import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Experience() {
  const experience = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'Tech Startup',
      period: '2022 - Present',
      description: 'Leading frontend development initiatives, building scalable React applications and mentoring junior developers.',
      achievements: [
        'Architected and built 5+ production applications using React and Next.js',
        'Improved application performance by 40% through optimization techniques',
        'Mentored 3 junior developers, helping them grow their skills',
        'Established best practices and code standards for the team',
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed end-to-end solutions for clients, working on both frontend and backend technologies.',
      achievements: [
        'Delivered 15+ projects on time and within budget',
        'Built RESTful APIs serving 1M+ requests monthly',
        'Implemented responsive designs reaching 98% Google PageSpeed score',
        'Collaborated with design team to bring UI/UX concepts to life',
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'E-commerce Company',
      period: '2019 - 2020',
      description: 'Built responsive and interactive user interfaces for e-commerce platform serving thousands of users.',
      achievements: [
        'Created reusable component library used across 10+ projects',
        'Reduced bundle size by 35% through code splitting',
        'Implemented PWA features increasing mobile conversions by 25%',
        'Optimized checkout flow improving conversion rate by 15%',
      ],
      skills: ['React', 'Redux', 'Tailwind CSS', 'PWA', 'WebGL'],
    },
  ]

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      year: '2019',
      details: 'Graduated with honors, GPA: 3.8/4.0',
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      year: '2018',
      details: 'Comprehensive bootcamp covering JavaScript, React, Node.js, and databases',
    },
  ]

  const skills = {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vue.js'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Supabase', 'Firebase'],
    tools: ['Git/GitHub', 'Docker', 'Vercel', 'AWS', 'VS Code', 'Figma', 'DevTools'],
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-4 py-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-primary font-semibold text-sm hover:underline">← Back to home</Link>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white">Experience & Education</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              My professional journey, key achievements, and continuous learning path in web development.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full px-4 py-12 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              {/* Work Experience */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">work_history</span>
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((job, idx) => (
                    <div key={job.id} className="bento-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                          <p className="text-primary font-semibold">{job.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">{job.period}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                            <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">school</span>
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="bento-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                          <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-semibold text-primary">{edu.year}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Sidebar */}
            <div className="lg:col-span-1">
              <div className="bento-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 sticky top-20">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Skills
                </h2>

                {/* Frontend */}
                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold border border-green-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold border border-orange-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto w-full px-4 py-20 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">Let&apos;s Work Together</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative z-10">
              Interested in collaborating? I&apos;m always excited about new opportunities and challenges.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors relative z-10">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
