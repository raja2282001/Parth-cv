'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CTASection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('patelparth1803@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Start a Project Together</h2>
      <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative z-10">
        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
          Send Message
        </Link>
        <button
          onClick={handleCopyEmail}
          className="bg-primary-dark/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          {copied ? '✓ Copied!' : 'Copy Email'}
        </button>
      </div>
    </div>
  )
}
