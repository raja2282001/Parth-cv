'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-4 py-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-primary font-semibold text-sm hover:underline">← Back to home</Link>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white">Get in Touch</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Have a project in mind or just want to chat? Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-7xl mx-auto w-full px-4 py-12 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bento-card rounded-2xl p-8 space-y-6">
                {submitted && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      ✓ Message sent successfully! I&apos;ll be in touch shortly.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                    <p className="text-red-600 dark:text-red-400 font-medium">
                      ✗ {error}
                    </p>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bento-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                </div>
                <a href="mailto:patelparth1803@gmail.com" className="text-primary hover:underline">patelparth1803@gmail.com</a>
              </div>

              {/* Phone */}
              <div className="bento-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">phone</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">WhatsApp</h3>
                </div>
                <a href="https://wa.me/919510636476" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+91 9510636476</a>
              </div>

              {/* Location */}
              <div className="bento-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">India</p>
              </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-primary hover:underline font-semibold">
                      +91 987 654 3210
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Location</p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bento-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">share</span>
                  Connect
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg py-3 hover:bg-primary hover:text-white transition font-semibold text-sm"
                  >
                    <span className="material-symbols-outlined">code</span>
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg py-3 hover:bg-primary hover:text-white transition font-semibold text-sm"
                  >
                    <span className="material-symbols-outlined">work</span>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210?text=Hi!%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card rounded-2xl p-6 bg-green-500/10 border-green-500/30 hover:border-green-500/60 transition flex items-center gap-4"
              >
                <span className="material-symbols-outlined text-green-500 text-3xl">chat</span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Quick Chat</p>
                  <p className="font-semibold text-green-600 dark:text-green-400">WhatsApp me</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto w-full px-4 py-12 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'How long does it take to respond?', a: 'I usually respond within 24 hours on business days.' },
              { q: 'Do you take freelance projects?', a: 'Yes! I am always open to interesting freelance projects and collaborations.' },
              { q: 'What is your rate?', a: 'Rates depend on project scope and complexity. Let\'s discuss your specific needs.' },
              { q: 'Can you sign an NDA?', a: 'Absolutely! I can sign any required agreements for your peace of mind.' },
            ].map((faq, idx) => (
              <div key={idx} className="bento-card rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
