'use client'

import { useRef, useEffect, useState } from 'react'
import { useIsMobile } from '@/lib/use-is-mobile'

const EXPO_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)'

export function HeroHeadline() {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Line stagger: line 1 reveals, line 2 follows 130ms later
  const line = (delayMs: number) => ({
    display: 'block' as const,
    opacity: revealed ? 1 : 0,
    transform: revealed
      ? 'translateY(0)'
      : `translateY(${isMobile ? 0 : 22}px)`,
    transition: `opacity 800ms ${EXPO_OUT} ${delayMs}ms, transform 800ms ${EXPO_OUT} ${delayMs}ms`,
  })

  return (
    <section
      className="px-6 md:px-20 pt-24 md:pt-32 pb-16 md:pb-20"
      style={{ maxWidth: '1280px', margin: '0 auto' }}
    >
      {/*
        ── HEADLINE — SWAP ZONE ────────────────────────────────────
        Replace the two lines below with your final headline copy.
        Target: 2 lines max · 3–5 words total · your voice, not a tagline.
        The layout, size, and weight are final — only the words change.
        ────────────────────────────────────────────────────────────
      */}
      <div ref={ref}>
        <h2
          className="font-display font-extrabold text-[#EDEAE4] leading-[1.0] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)' }}
        >
          <span style={line(0)}>Precision built.</span>
          <span style={{ ...line(130), color: '#7A7A7A' }}>Cinema delivered.</span>
        </h2>
      </div>
    </section>
  )
}
