'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center px-4 py-3 justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold">DevPortfolio</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition">Home</Link>
          <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-primary transition">Projects</Link>
          <Link href="/experience" className="text-slate-600 dark:text-slate-400 hover:text-primary transition">Experience</Link>
          <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
          <div className="flex flex-col items-center gap-4 p-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-slate-600 dark:text-slate-400 hover:text-primary">Home</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-slate-600 dark:text-slate-400 hover:text-primary">Projects</Link>
            <Link href="/experience" onClick={() => setMenuOpen(false)} className="text-slate-600 dark:text-slate-400 hover:text-primary">Experience</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-slate-600 dark:text-slate-400 hover:text-primary">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
