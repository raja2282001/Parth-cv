'use client'

interface ProjectCardProps {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
}

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
  return (
    <div className="group relative flex flex-col gap-4 bento-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded bg-black/60 backdrop-blur text-[10px] text-white font-bold uppercase">{tag}</span>
          ))}
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div>
        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
        <div className="flex gap-3">
          <button 
            onClick={() => window.open(`#project-${project.id}`, '_blank')}
            className="text-slate-400 hover:text-primary transition cursor-pointer"
            title="View project"
          >
            <span className="material-symbols-outlined text-xl">link</span>
          </button>
          <button 
            onClick={() => navigator.clipboard.writeText(`Project: ${project.title}`)}
            className="text-slate-400 hover:text-primary transition cursor-pointer"
            title="Copy project name"
          >
            <span className="material-symbols-outlined text-xl">terminal</span>
          </button>
        </div>
        <button className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">CASE STUDY →</button>
      </div>
    </div>
  )
}
