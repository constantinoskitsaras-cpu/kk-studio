import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: `Store — ${site.name}`,
  description:
    'A small run of studio tees and goods — same restraint, same eye for detail. The first drop is coming soon.',
}

// Placeholder collection — no product data yet, so each reads as a held slot.
// Drop a render at public/images/store/<image> and set `image` to display it;
// until then each tile keeps the dark gradient monogram fallback.
const collection: { name: string; detail: string; image?: string }[] = [
  { name: 'Monogram Tee', detail: 'Heavyweight cotton · Lime mark' },
  { name: 'Studio Tee', detail: 'Heavyweight cotton · Warm white' },
  { name: 'Dark Edition Tee', detail: 'Heavyweight cotton · Near-black' },
]

export default function StorePage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero — coming-soon statement */}
        <div
          className="px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <ScrollReveal>
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-6 label-text"
              style={{ color: '#AAEE00' }}
            >
              ── Store · Tees &amp; Goods
            </p>
            <h1
              className="font-display font-extrabold text-[#EDEAE4] leading-[0.94] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            >
              The first
              <br />
              drop is coming.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p
              className="font-body text-[1rem] md:text-[1.125rem] leading-[1.65] max-w-prose mt-8"
              style={{ color: '#7A7A7A' }}
            >
              A small run of studio tees and goods — same restraint, same eye for
              detail. Made in limited quantities and released when they’re right,
              not before.
            </p>
          </ScrollReveal>
        </div>

        {/* Collection preview — placeholder tees, each marked coming soon */}
        <div
          className="px-6 md:px-10 pb-24 md:pb-32 border-t border-[#1A1A1A]"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-16 md:pt-24">
            {collection.map((item, i) => (
              <ScrollReveal key={item.name} variant="frame" delay={i * 60}>
                <div className="group">
                  {/* Garment — real render when present, dark gradient fallback otherwise */}
                  <div
                    className="w-full overflow-hidden relative"
                    style={{ aspectRatio: '4 / 5' }}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        quality={90}
                        className="object-cover transition-[filter] duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:brightness-[0.92]"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 transition-[filter] duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:brightness-[0.92]"
                          style={{
                            background:
                              'linear-gradient(148deg, #0F0F0F 0%, #1A1A1A 38%, #0D0D0D 65%, #090909 100%)',
                          }}
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                          aria-hidden="true"
                        >
                          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" opacity="0.06">
                            <line x1="6" y1="4" x2="6" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
                            <line x1="6" y1="16" x2="26" y2="4" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
                            <line x1="6" y1="16" x2="26" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
                            <rect x="24" y="15" width="4" height="2" fill="#AAEE00" />
                          </svg>
                        </div>
                      </>
                    )}
                    {/* Coming soon tag */}
                    <span
                      className="absolute top-4 left-4 font-ui font-medium uppercase tracking-[0.1em] text-[0.625rem] px-3 py-1.5 label-text"
                      style={{
                        color: '#AAEE00',
                        backgroundColor: 'rgba(9,9,9,0.6)',
                        border: '1px solid #1A1A1A',
                      }}
                    >
                      Coming soon
                    </span>
                  </div>

                  {/* Meta row — mirrors the project frame meta rhythm */}
                  <div
                    className="flex items-baseline justify-between gap-6 pt-5 mt-0"
                    style={{ borderTop: '1px solid #1A1A1A' }}
                  >
                    <h2
                      className="font-display font-bold leading-[1.1] tracking-[-0.01em]"
                      style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', color: '#EDEAE4' }}
                    >
                      {item.name}
                    </h2>
                    <p
                      className="font-ui font-medium uppercase tracking-[0.08em] whitespace-nowrap flex-shrink-0 text-[0.625rem] label-text"
                      style={{ color: '#3D3D3D' }}
                    >
                      Drop 01
                    </p>
                  </div>
                  <p className="font-body text-[0.875rem] mt-2" style={{ color: '#7A7A7A' }}>
                    {item.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Notify CTA — mirrors the home Contact CTA pattern, surface band */}
        <section
          className="py-24 md:py-32 px-6 md:px-10 text-center"
          style={{ backgroundColor: '#111111' }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <ScrollReveal variant="headline" trace traceCenter>
              <h2
                className="font-display font-extrabold text-[#EDEAE4] leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
              >
                Be first to know.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="label" delay={120}>
              <p
                className="font-body mt-6 md:mt-8 text-[1rem] md:text-[1.125rem]"
                style={{ color: '#7A7A7A' }}
              >
                One email when the first drop lands. Nothing else.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="label" delay={220}>
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href={`mailto:${site.email}?subject=Notify%20me%20%E2%80%94%20Store%20Drop%2001`}
                  variant="primary"
                >
                  → Notify me
                </Button>
                <Link
                  href="/work"
                  className="font-ui text-[0.8125rem] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-[#EDEAE4]"
                  style={{ color: '#7A7A7A' }}
                >
                  See the work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
