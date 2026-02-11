import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Parth Patel | React Developer & UI Specialist',
  description: 'Full-stack developer building high-performance web applications with React, Next.js, and modern technologies.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#135bec',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  )
}
