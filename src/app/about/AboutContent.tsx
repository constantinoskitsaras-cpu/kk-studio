'use client'

import Image from 'next/image'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { useT } from '@/lib/i18n/context'

// Portrait asset — drop a file at public/images/about.webp. Until it exists the
// dark gradient fallback shows.
const PORTRAIT_SRC: string | undefined = '/images/about.webp'

// Software — the working toolset, shown as a quiet credential strip.
const software = [
  'Unreal Engine 5',
  '3ds Max',
  'V-Ray',
  'Houdini',
  'Maya',
  'Substance Painter',
  'DaVinci Resolve',
  'TyFlow',
]

export function AboutContent() {
  const t = useT()
  const bio = t<string[]>('about.bio')
  const practice = t<{ title: string; body: string }[]>('about.practice')

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero — leads with the name, profile-style */}
        <div
          className="px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <ScrollReveal>
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-6 label-text"
              style={{ color: '#AAEE00' }}
            >
              {t('about.eyebrow')}
            </p>
            <h1
              className="font-display font-bold text-[#EDEAE4] leading-[0.95] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.5rem)' }}
            >
              {t('about.titleLine1')}
              <br />
              {t('about.titleLine2')}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p
              className="font-body text-[1rem] md:text-[1.125rem] leading-[1.65] max-w-prose mt-8"
              style={{ color: '#7A7A7A' }}
            >
              {t('about.intro')}
            </p>
          </ScrollReveal>
        </div>

        {/* Profile — portrait placeholder + bio */}
        <div
          className="px-6 md:px-10 pb-24 md:pb-32"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 pt-24 md:pt-32">

            {/* Portrait — compact 4:5 that dissolves softly at every edge (no hard frame) */}
            <ScrollReveal variant="frame" className="md:col-span-4">
              <div className="w-full overflow-hidden relative aspect-[4/5] rounded-3xl">

                {PORTRAIT_SRC ? (
                  <Image
                    src={PORTRAIT_SRC}
                    alt={t('about.portraitAlt')}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    quality={100}
                    className="object-cover"
                    style={{
                      WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 45%, #000 78%, transparent 100%)',
                      maskImage: 'radial-gradient(ellipse 100% 100% at 50% 45%, #000 78%, transparent 100%)',
                    }}
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(148deg, #0F0F0F 0%, #1A1A1A 38%, #0D0D0D 65%, #090909 100%)',
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" opacity="0.06">
                        <line x1="6" y1="4" x2="6" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
                        <line x1="6" y1="16" x2="26" y2="4" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
                        <line x1="6" y1="16" x2="26" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
                        <rect x="24" y="15" width="4" height="2" fill="#AAEE00" />
                      </svg>
                    </div>
                    <span className="sr-only">{t('about.portraitAlt')}</span>
                  </>
                )}
                {/* Soft dark vignette — eases the portrait into the page, no hard frame */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 45%, transparent 68%, rgba(9,9,9,0.45) 100%)' }}
                />
              </div>
            </ScrollReveal>

            {/* Bio */}
            <div className="md:col-span-8 md:pt-2">
              <ScrollReveal trace>
                <p
                  className="font-body text-[#EDEAE4] leading-[1.4] tracking-[-0.01em] max-w-[52ch]"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.625rem)' }}
                >
                  {bio[0]}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="flex flex-col gap-5 mt-8 max-w-prose">
                  {bio.slice(1).map((paragraph, i) => (
                    <p key={i} className="font-body text-[1rem] leading-[1.55]" style={{ color: '#7A7A7A' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>

        {/* Software — toolset credential strip */}
        <div
          className="px-6 md:px-10 pb-24 md:pb-32"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <ScrollReveal trace>
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] pt-16 md:pt-24 mb-2 label-text"
              style={{ color: '#AAEE00' }}
            >
              {t('about.softwareLabel')}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="label" delay={80}>
            <div className="mt-8 md:mt-10">
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {software.map((s) => (
                  <span
                    key={s}
                    className="font-ui font-medium uppercase tracking-[0.08em] text-[0.8125rem]"
                    style={{ color: '#7A7A7A' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Practice — hairline-led list, mirrors the Studio Brief pillars */}
        <div
          className="px-6 md:px-10 pb-24 md:pb-40"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <ScrollReveal trace>
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] pt-16 md:pt-24 mb-2 label-text"
              style={{ color: '#AAEE00' }}
            >
              {t('about.practiceLabel')}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="label" delay={120}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-16 mt-12">
              {practice.map((p) => (
                <div key={p.title}>
                  <h2
                    className="font-display font-bold text-[#EDEAE4] leading-[1.1] tracking-[-0.01em]"
                    style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.5rem)' }}
                  >
                    {p.title}
                  </h2>
                  <p
                    className="font-body text-[#7A7A7A] leading-[1.6] mt-3"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Quiet CTA — no second hero, just a clean handoff */}
          <ScrollReveal variant="label" delay={80}>
            <div className="mt-20 md:mt-28">
              <Button href="/contact" variant="primary">
                {t('about.ctaButton')}
              </Button>
            </div>
          </ScrollReveal>
        </div>

      </main>
      <Footer />
    </>
  )
}
