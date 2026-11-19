import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Madhumitha Nandagopal — Medical Student Portfolio',
  description: 'Personal academic portfolio of Madhumitha Nandagopal, a Year 1 Doctor of Medicine (MD Program) student at Gulf Medical University, documenting learning, research, and a growing interest in thoughtful, human-centered care.',
  generator: 'Next.js',
  openGraph: {
    title: 'Madhumitha Nandagopal — Medical Student Portfolio',
    description: 'An evolving portfolio of medical education, academic projects, research, and interests.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f1e9' },
    { media: '(prefers-color-scheme: dark)', color: '#f1f1e9' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
