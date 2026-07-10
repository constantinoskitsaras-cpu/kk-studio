import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, Inter } from 'next/font/google'
import { site } from '@/lib/site'
import { IntroLoader } from '@/components/ui/IntroLoader'
import './globals.css'

// Condensed display face for headings. Single weight (400) by design — see the
// `.font-display { font-synthesis: none }` rule in globals.css that stops the
// browser faux-bolding it where heading classes request 700/800.
const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const description =
  'VFX Generalist & 3D Artist — Real-time rendering, look development, and cinematic visualization.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Konstantinos Kitsaras',
  description,
  openGraph: {
    title: 'Konstantinos Kitsaras',
    description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konstantinos Kitsaras',
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <IntroLoader />
        {children}
      </body>
    </html>
  )
}
