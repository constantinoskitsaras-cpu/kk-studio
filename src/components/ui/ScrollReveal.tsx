'use client'

import { useRef, useEffect, useState } from 'react'
import { useIsMobile } from '@/lib/use-is-mobile'

// ── Easing shared across all variants ─────────────────────────
const EXPO_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)'

// ── Variant config ─────────────────────────────────────────────
const VARIANTS = {
  default: { y: 20, scale: 1,     duration: 650, threshold: 0.15, blur: 0 },
  frame:   { y: 28, scale: 0.982, duration: 900, threshold: 0.06, blur: 0 },
  headline:{ y: 22, scale: 1,     duration: 800, threshold: 0.15, blur: 0 },
  label:   { y: 8,  scale: 1,     duration: 500, threshold: 0.20, blur: 0 },
  // Punchy entrance for project cards: more travel, a touch of scale, soft blur-in.
  project: { y: 56, scale: 0.94,  duration: 950, threshold: 0.12, blur: 12 },
  // 'wipe' is handled separately (scaleX, not Y+scale)
} as const

type Variant = keyof typeof VARIANTS | 'wipe'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: Variant
  threshold?: number
  /** Draw a thin lime trace line that travels in with the reveal — the page signature. */
  trace?: boolean
  /** Center the trace line (for centered sections). Defaults to left-aligned. */
  traceCenter?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  variant = 'default',
  threshold,
  trace = false,
  traceCenter = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const cfg = variant === 'wipe' ? { threshold: threshold ?? 0.5 } : {
      threshold: threshold ?? VARIANTS[variant as keyof typeof VARIANTS].threshold,
      rootMargin: variant === 'frame' ? '0px 0px -40px 0px' : '0px',
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      cfg
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, variant, threshold])

  // ── Wipe variant (scaleX draw, used for hairline rules) ───────
  if (variant === 'wipe') {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: `opacity 700ms ${EXPO_OUT} ${delay}ms, transform 700ms ${EXPO_OUT} ${delay}ms`,
        }}
      >
        {children}
      </div>
    )
  }

  // ── Standard variants ──────────────────────────────────────────
  const cfg = VARIANTS[variant as keyof typeof VARIANTS]
  const dur = isMobile ? 450 : cfg.duration
  const yPx = isMobile ? 0 : cfg.y
  const sc  = isMobile ? 1 : cfg.scale
  const blurPx = isMobile ? 0 : cfg.blur

  const hiddenTransform = `translateY(${yPx}px)${sc !== 1 ? ` scale(${sc})` : ''}`

  // ── Lime trace — the page-wide reveal signature ────────────────
  // A thin lime stroke that draws in (scaleX 0 → 1) on every viewport, fixed
  // 0.6s ease-out, when the section enters view.
  const traceLine = trace ? (
    <span
      aria-hidden="true"
      className={`block h-px mb-6 ${traceCenter ? 'mx-auto' : ''}`}
      style={{
        width: '32px',
        backgroundColor: '#AAEE00',
        transformOrigin: traceCenter ? 'center' : 'left',
        transform: visible ? 'scaleX(1)' : 'scaleX(0)',
        opacity: visible ? 1 : 0,
        transition: `transform 600ms ${EXPO_OUT} ${delay}ms, opacity 600ms ${EXPO_OUT} ${delay}ms`,
      }}
    />
  ) : null

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : hiddenTransform,
        filter: blurPx ? (visible ? 'blur(0px)' : `blur(${blurPx}px)`) : undefined,
        transition: `opacity ${dur}ms ${EXPO_OUT} ${delay}ms, transform ${dur}ms ${EXPO_OUT} ${delay}ms${blurPx ? `, filter ${dur}ms ${EXPO_OUT} ${delay}ms` : ''}`,
        willChange: visible ? undefined : 'opacity, transform',
      }}
    >
      {traceLine}
      {children}
    </div>
  )
}

// ── StaggerReveal — kept for backward compat ───────────────────
interface StaggerRevealProps {
  children: React.ReactNode[]
  staggerMs?: number
  className?: string
  itemClassName?: string
  variant?: Exclude<Variant, 'wipe'>
}

export function StaggerReveal({
  children,
  staggerMs = 80,
  className = '',
  itemClassName = '',
  variant = 'default',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cfg = VARIANTS[variant]
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: cfg.threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [variant])

  const cfg = VARIANTS[variant]
  const dur = isMobile ? 450 : cfg.duration
  const yPx = isMobile ? 0 : cfg.y

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={itemClassName}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : `translateY(${yPx}px)`,
            transition: `opacity ${dur}ms ${EXPO_OUT} ${i * staggerMs}ms, transform ${dur}ms ${EXPO_OUT} ${i * staggerMs}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
