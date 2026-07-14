'use client'

import { useRef, useEffect, useState } from 'react'
import { ProjectFrameFull } from '@/components/home/ProjectFrame'
import { featuredProjects } from '@/lib/projects'
import { useIsMobile } from '@/lib/use-is-mobile'
import { useLocale } from '@/lib/i18n/context'
import { localizeProject } from '@/lib/i18n/projectTranslations'

const EXPO_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)'

// ── Section opener — hairline wipe + staggered label/counter ───
function SectionOpener({ count }: { count: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Hairline reveal — desktop draws (scaleX wipe); mobile is opacity-only, quieter
  const ruleStyle = isMobile
    ? {
        opacity: revealed ? 1 : 0,
        transition: `opacity 500ms ${EXPO_OUT}`,
      }
    : {
        transformOrigin: 'left' as const,
        transform: revealed ? 'scaleX(1)' : 'scaleX(0)',
        transition: `transform 700ms ${EXPO_OUT}`,
      }

  return (
    <div ref={ref} className="px-6 md:px-20 mb-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div className="relative mb-3">
        {/* Static hairline track */}
        <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }} />
        {/* Wipe overlay — draws from left */}
        <div
          className="absolute inset-0 h-px"
          style={{ backgroundColor: '#262626', ...ruleStyle }}
        />
        {/* Lime trace — a thin energetic stroke that leads the wipe (the page signature) */}
        <div
          className="absolute left-0 top-0 h-px"
          style={{
            width: '40px',
            backgroundColor: '#AAEE00',
            transformOrigin: 'left',
            transform: revealed ? 'scaleX(1)' : 'scaleX(0)',
            opacity: revealed ? 1 : 0,
            transition: `transform 600ms ${EXPO_OUT} 120ms, opacity 600ms ${EXPO_OUT} 120ms`,
          }}
        />
        {/* Counter — right end of rule */}
        <span
          className="absolute right-0 top-1/2 font-ui font-medium"
          style={{
            color: '#AAEE00',
            fontSize: '0.75rem',
            letterSpacing: '0.06em',
            transform: revealed
              ? 'translateY(-50%)'
              : `translateY(calc(-50% + ${isMobile ? 0 : 6}px))`,
            opacity: revealed ? 1 : 0,
            transition: `opacity 500ms ${EXPO_OUT} 200ms, transform 500ms ${EXPO_OUT} 200ms`,
          }}
        >
          {count}
        </span>
      </div>
    </div>
  )
}

export function SelectedWork() {
  const { locale } = useLocale()
  // Curated proof — the featured frames, not a gallery grid.
  const frames = featuredProjects.slice(0, 5).map((p) => localizeProject(p, locale))
  const count = String(frames.length).padStart(2, '0')

  return (
    <section>

      <SectionOpener count={count} />

      {/* ── Project frames — large windows, each self-animates on scroll ── */}
      <div className="flex flex-col gap-8 md:gap-10">
        {frames.map((p, i) => (
          <ProjectFrameFull key={p.slug} project={p} priority={i === 0} videoHover />
        ))}
      </div>

    </section>
  )
}
