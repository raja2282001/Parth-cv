import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 bg-slate-50 dark:bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary text-white p-1 rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
          </div>
          <span className="text-slate-900 dark:text-white font-bold text-xl">Parth.dev</span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-8">
          <Link href="/" className="text-slate-500 hover:text-primary font-medium">Home</Link>
          <Link href="/projects" className="text-slate-500 hover:text-primary font-medium">Projects</Link>
          <Link href="/experience" className="text-slate-500 hover:text-primary font-medium">Experience</Link>
          <Link href="/contact" className="text-slate-500 hover:text-primary font-medium">Contact</Link>
        </nav>

        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined">work</span>
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>

        <p className="text-slate-400 text-sm text-center">
          © 2024 Parth Patel. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
