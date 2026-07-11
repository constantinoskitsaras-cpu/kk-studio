'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import type { Project } from '@/lib/projects'
import { useIsMobile } from '@/lib/use-is-mobile'
import { useT } from '@/lib/i18n/context'

const EXPO_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)'

// ── Scroll reveal hook — used internally by each frame ─────────
function useFrameReveal(options?: { rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect() } },
      { threshold: 0.06, rootMargin: options?.rootMargin ?? '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options?.rootMargin])

  return { ref, revealed, isMobile }
}

// ── Animation styles ────────────────────────────────────────────
// frameStyle: the "opening into view" — opacity + Y + subtle scale
function frameStyle(revealed: boolean, isMobile: boolean, delayMs = 0) {
  const hidden = isMobile
    ? 'translateY(0) scale(1)'
    : 'translateY(28px) scale(0.982)'

  return {
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0) scale(1)' : hidden,
    transition: `opacity 900ms ${EXPO_OUT} ${delayMs}ms, transform 900ms ${EXPO_OUT} ${delayMs}ms`,
  }
}

// metaStyle: follows 130ms after the frame, only Y(8px)
function metaStyle(revealed: boolean, isMobile: boolean, delayMs = 0) {
  return {
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0)' : `translateY(${isMobile ? 0 : 8}px)`,
    transition: `opacity 550ms ${EXPO_OUT} ${delayMs + 130}ms, transform 550ms ${EXPO_OUT} ${delayMs + 130}ms`,
  }
}

// ── Autoplay background video cover ───────────────────────────
// Full-bleed Vimeo background sized to cover the frame box (16:9 source
// center-cropped). vw sizing assumes the frame spans the viewport width
// (true for the full-bleed work-index frames). Fades in over the poster.
function FrameVideo({ vimeoId, title, active = true, start = 0 }: { vimeoId: string; title: string; active?: boolean; start?: number }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <iframe
      src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&playsinline=1&quality=4K${start ? `#t=${start}s` : ''}`}
      onLoad={() => setLoaded(true)}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none w-[133.34vw] h-[75vw] md:w-screen md:h-[56.25vw]"
      style={{
        opacity: loaded && active ? 1 : 0,
        transition: 'opacity 300ms cubic-bezier(0.16,1,0.3,1)',
      }}
      allow="autoplay; fullscreen"
      title={`${title} — showreel`}
      aria-hidden="true"
    />
  )
}

// ── Shared image block ────────────────────────────────────────
function FrameImage({
  project,
  height,
  aspectClass,
  priority = false,
  showVideo = false,
  videoActive = true,
}: {
  project: Project
  height?: string
  aspectClass?: string
  priority?: boolean
  showVideo?: boolean
  videoActive?: boolean
}) {
  const hasImage = Boolean(project.heroImage)

  return (
    <div
      className={`w-full overflow-hidden relative ${aspectClass ?? ''}`}
      style={aspectClass ? undefined : { height }}
    >
      {hasImage ? (
        <Image
          src={project.heroImage as string}
          alt={project.title}
          fill
          sizes="100vw"
          priority={priority}
          quality={100}
          className="frame-photo object-cover grayscale transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:brightness-[0.88]"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 transition-[transform,filter] duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:brightness-[0.88]"
            style={{
              background: 'linear-gradient(148deg, #0F0F0F 0%, #1A1A1A 38%, #0D0D0D 65%, #090909 100%)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.06">
              <line x1="6" y1="4" x2="6" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
              <line x1="6" y1="16" x2="26" y2="4" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
              <line x1="6" y1="16" x2="26" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
              <rect x="24" y="15" width="4" height="2" fill="#AAEE00" />
            </svg>
          </div>
          <span className="sr-only">{project.title}</span>
        </>
      )}

      {showVideo && project.vimeoId && (
        <FrameVideo vimeoId={project.vimeoId} title={project.title} active={videoActive} start={project.videoStart ?? 0} />
      )}
    </div>
  )
}

// ── Shared metadata row ───────────────────────────────────────
function FrameMeta({
  project,
  padded = true,
  animStyle,
}: {
  project: Project
  padded?: boolean
  animStyle?: React.CSSProperties
}) {
  return (
    <div
      className={padded ? 'px-6 md:px-20' : ''}
      style={padded ? { maxWidth: '1280px', margin: '0 auto' } : {}}
    >
      <div
        className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8 pt-10 md:pt-12"
        style={{ borderTop: '1px solid #1A1A1A', ...animStyle }}
      >
        {/* Title — shifts to lime on hover via group */}
        <h3
          className="font-display font-bold leading-[1.1] tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#AAEE00]"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 1.375rem)', color: '#EDEAE4' }}
        >
          {project.title}
        </h3>

        {/* Category — wraps to its own line on mobile; nowrap on the right at md+ */}
        <p
          className="font-ui font-medium uppercase tracking-[0.1em] md:whitespace-nowrap md:flex-shrink-0 label-text"
          style={{ fontSize: '0.6875rem', color: '#7A7A7A' }}
        >
          {project.category}
        </p>
      </div>
    </div>
  )
}

// ── Full-bleed frame — self-animating ─────────────────────────
export function ProjectFrameFull({
  project,
  priority = false,
  video = false,
  videoHover = false,
}: {
  project: Project
  priority?: boolean
  /** Opt-in autoplay background video cover (work index). */
  video?: boolean
  /** Opt-in hover-to-play video cover (homepage) — mounts on first hover, plays while hovered. */
  videoHover?: boolean
}) {
  const { ref, revealed, isMobile } = useFrameReveal()
  const reduce = useReducedMotion()
  const t = useT()

  // ── Follow-cursor "View" pill — desktop/hover-only signature ──
  const [hovered, setHovered] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const cx = useMotionValue(0)
  const cy = useMotionValue(0)
  const sx = useSpring(cx, { stiffness: 350, damping: 30, mass: 0.4 })
  const sy = useSpring(cy, { stiffness: 350, damping: 30, mass: 0.4 })

  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover)').matches)
  }, [])

  const showCursor = canHover && !reduce
  // Desktop widths only (not gated on hover-media, which is unreliable on some
  // setups), motion allowed. Two modes:
  //  • video (work index): autoplay — top frame eager, rest lazy on scroll.
  //  • videoHover (homepage): PRELOAD the player once the frame is in view (so it's
  //    already buffered/playing behind the poster), reveal it instantly on hover.
  const eligibleVideo = !isMobile && !reduce && Boolean(project.vimeoId)
  const showVideo =
    eligibleVideo && ((video && (priority || revealed)) || (videoHover && revealed))
  const videoActive = video ? true : hovered

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!showCursor) return
    const rect = e.currentTarget.getBoundingClientRect()
    cx.set(e.clientX - rect.left)
    cy.set(e.clientY - rect.top)
  }

  return (
    <div ref={ref}>
      <Link
        href={`/work/${project.slug}`}
        className="block group relative"
        aria-label={`${t('common.viewProject')}: ${project.title}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMove}
        style={showCursor ? { cursor: 'none' } : undefined}
      >
        {/* Full-bleed ultra-wide cover — a touch wider than the gallery for a more
            cinematic letterbox on the covers */}
        <div style={frameStyle(revealed, isMobile)}>
          <FrameImage project={project} aspectClass="aspect-[4/3] md:aspect-[2.85/1]" priority={priority} showVideo={showVideo} videoActive={videoActive} />
        </div>
        <FrameMeta
          project={project}
          padded
          animStyle={metaStyle(revealed, isMobile)}
        />

        {/* Premium follow-cursor — frosted glass disc with a lime mark */}
        {showCursor && (
          <motion.div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-0 left-0 z-10"
            style={{ x: sx, y: sy }}
          >
            <motion.span
              className="flex flex-col items-center justify-center gap-1 -translate-x-1/2 -translate-y-1/2 rounded-full font-ui font-medium uppercase tracking-[0.18em]"
              style={{
                width: '92px',
                height: '92px',
                fontSize: '0.5625rem',
                color: '#EDEAE4',
                backgroundColor: 'rgba(9,9,9,0.22)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(237,234,228,0.35)',
              }}
              initial={false}
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17 L17 7 M9 7 H17 V15" stroke="#AAEE00" strokeWidth="1.6" strokeLinecap="square" />
              </svg>
              {t<string>('common.view')}
            </motion.span>
          </motion.div>
        )}
      </Link>
    </div>
  )
}

// ── 2-up pair frame — shared trigger, 90ms stagger ───────────
export function ProjectFramePair({
  left,
  right,
  height = '50vh',
}: {
  left: Project
  right: Project
  height?: string
}) {
  const { ref, revealed, isMobile } = useFrameReveal({ rootMargin: '0px 0px -30px 0px' })

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-6">
      {/* Left — triggers immediately */}
      <Link
        href={`/work/${left.slug}`}
        className="block group min-w-0"
        aria-label={`View project: ${left.title}`}
      >
        <div style={frameStyle(revealed, isMobile, 0)}>
          <FrameImage project={left} height={height} />
        </div>
        <FrameMeta
          project={left}
          padded={false}
          animStyle={metaStyle(revealed, isMobile, 0)}
        />
      </Link>

      {/* Right — 90ms after left */}
      <Link
        href={`/work/${right.slug}`}
        className="block group min-w-0"
        aria-label={`View project: ${right.title}`}
      >
        <div style={frameStyle(revealed, isMobile, 90)}>
          <FrameImage project={right} height={height} />
        </div>
        <FrameMeta
          project={right}
          padded={false}
          animStyle={metaStyle(revealed, isMobile, 90)}
        />
      </Link>
    </div>
  )
}
