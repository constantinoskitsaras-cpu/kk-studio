'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { site } from '@/lib/site'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { useT } from '@/lib/i18n/context'

// Client credibility band now lives on the homepage as <LogoMarquee /> (a single
// logo marquee), so the footer no longer carries its own collaborations strip.
export function Footer() {
  const [showBackTop, setShowBackTop] = useState(false)
  const t = useT()

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer
      className="border-t border-[#1A1A1A] mt-32 md:mt-48"
      style={{ paddingTop: '48px', paddingBottom: '48px' }}
    >
      <div
        className="mx-auto px-6 md:px-10"
        style={{ maxWidth: '1280px' }}
      >

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Monogram — studio logo */}
          <Image
            src="/images/logo.svg"
            alt="KK Studio"
            width={60}
            height={60}
            unoptimized
            className="h-10 w-auto opacity-60 transition-opacity duration-200 hover:opacity-100"
          />

          {/* Copyright */}
          <p className="font-ui text-[0.75rem] tracking-[0.06em]" style={{ color: '#3D3D3D' }}>
            © {new Date().getFullYear()} {site.name}. {t('footer.rights')}
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="font-ui text-[0.75rem] tracking-[0.06em] transition-colors duration-200 hover:text-[#AAEE00]"
              style={{ color: '#7A7A7A' }}
            >
              {site.email}
            </a>
            <SocialLinks size={17} gap="gap-5" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-ui text-[0.75rem] uppercase tracking-[0.08em] transition-all duration-200"
              style={{
                color: showBackTop ? '#AAEE00' : '#3D3D3D',
                opacity: showBackTop ? 1 : 0.4,
              }}
              aria-label={t('footer.backToTopAriaLabel')}
            >
              ↑ {t('footer.backToTop')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
