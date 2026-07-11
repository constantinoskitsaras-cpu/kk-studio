import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, Inter, Advent_Pro, IBM_Plex_Sans } from 'next/font/google'
import { site } from '@/lib/site'
import { IntroLoader } from '@/components/ui/IntroLoader'
import { LocaleProvider } from '@/lib/i18n/context'
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
  subsets: ['latin', 'greek'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

// Neither Bebas Neue nor Space Grotesk ship Greek glyphs — these two stand
// in for display headings and UI labels only when the site is in Greek
// (swapped in via the `html[lang="el"]` override in globals.css).
const adventPro = Advent_Pro({
  variable: '--font-advent-pro',
  subsets: ['latin', 'greek'],
  weight: ['700', '800'],
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  subsets: ['latin', 'greek'],
  weight: ['500', '600'],
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
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} ${adventPro.variable} ${ibmPlexSans.variable}`}
    >
      <body>
        <LocaleProvider>
          <IntroLoader />
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
