'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useT } from '@/lib/i18n/context'

/*
  ── LOGO MARQUEE ──────────────────────────────────────────────────
  Real client / marque logos as monochrome warm-white SVGs. The
  brightness(0)+invert(1) filter forces any source artwork to a single
  light tone so the band stays cohesive on the dark surface.
  Logo files live in /public/images/logos/.
  ───────────────────────────────────────────────────────────────────
*/
// Logos are uniform tight-cropped wordmark exports, so a single height keeps
// them all at the same visual scale.
const clients = [
  { name: 'Mercedes-Benz', src: '/images/logos/mercedes.svg', h: 'h-9 md:h-11' },
  { name: 'Bvlgari',       src: '/images/logos/bvlgari.svg',  h: 'h-5 md:h-7' },
  { name: 'Škoda',         src: '/images/logos/skoda.svg',    h: 'h-5 md:h-7' },
  { name: 'Lexus',         src: '/images/logos/lexus.svg',    h: 'h-5 md:h-7' },
  { name: 'Toyota',        src: '/images/logos/toyota.svg',   h: 'h-5 md:h-7' },
]

function MarqueeItem({ name, src, h }: { name: string; src: string; h: string }) {
  return (
    <span
      className="flex items-center"
      style={{ paddingInline: 'clamp(2rem, 4vw, 3.5rem)' }}
    >
      {/* Plain img — decorative monochrome SVG; avoids next/image fixed-dimension warnings */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className={`${h} w-auto object-contain select-none`}
        style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }}
      />
    </span>
  )
}

export function LogoMarquee() {
  const t = useT()
  // Each copy already spans wide viewports; we render FOUR identical copies so the
  // -50% keyframe (which scrolls exactly two copies) loops seamlessly and the track
  // is always wider than the screen — at least 1-2 logos are visible at all times.
  const oneCopy = Array.from({ length: 4 }, () => clients).flat()
  const sequence = [...oneCopy, ...oneCopy, ...oneCopy, ...oneCopy]

  return (
    <section
      className="pt-20 md:pt-24 pb-20 md:pb-28"
      aria-label={t('home.logoMarquee.ariaLabel')}
    >
      {/* Quiet label — fades in on scroll, label variant (Y=8px) */}
      <ScrollReveal variant="label">
        <p
          className="font-ui font-medium uppercase tracking-[0.12em] label-text text-center mb-14 md:mb-20"
          style={{ fontSize: '0.9375rem', color: '#AAEE00' }}
        >
          {t('home.logoMarquee.label')}
        </p>
      </ScrollReveal>

      {/* Marquee — ambient, continuous, edge-masked. Slow calm drift. */}
      <div className="marquee-mask overflow-hidden" aria-hidden="true">
        <div className="marquee-track items-center" style={{ animationDuration: '240s' }}>
          {sequence.map((c, i) => (
            <MarqueeItem key={i} name={c.name} src={c.src} h={c.h} />
          ))}
        </div>
      </div>
    </section>
  )
}
