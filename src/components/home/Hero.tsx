'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '@/lib/site'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playingRef = useRef(false)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  // Scroll-driven lime line under the heading: 0% with the hero at the top,
  // filling to 100% (left→right) as the hero scrolls out of view.
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    // Staggered entrance — starts after hydration
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Pick a light 720p reel on phones, the full master on desktop. Resolved on
  // mount (single render) so the heavy file never downloads on mobile.
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)').matches
    setVideoSrc(mobile ? `${site.videoCdn}/reel-mobile.mp4` : `${site.videoCdn}/reel.mp4`)
  }, [])

  // Seamless loop — cross-dip the reel's opacity at BOTH ends: fade OUT over the
  // last ~1.5s (close) and fade IN over the first ~1.5s (restart), so the loop
  // seam never cuts abruptly. The very first fade-in is hidden by the intro curtain.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const FADE = 1.5
    let raf = 0
    const tick = () => {
      if (!playingRef.current) {
        // Not playing yet (buffering) — keep hidden so no frozen frame shows.
        v.style.opacity = '0'
      } else if (v.duration) {
        const edge = Math.min(v.currentTime, v.duration - v.currentTime)
        v.style.opacity = String(Math.max(0, Math.min(1, edge / FADE)))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [videoSrc])

  // Name block: includes scale(0.982→1) — the same "opening" feel as project frames
  const fadeIn = (delayMs: number, withScale = false) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted
      ? 'translateY(0) scale(1)'
      : `translateY(16px) scale(${withScale ? 0.982 : 1})`,
    transition: `opacity 750ms cubic-bezier(0.16,1,0.3,1) ${delayMs}ms, transform 750ms cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
  })

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col overflow-hidden"
      style={{ height: '100dvh', minHeight: '600px' }}
      aria-label="Hero"
    >
      {/* ── Background layers ─────────────────────────────────────────
          z-0   gradient — permanent on mobile, loading-state on desktop
          z-[1] reel video — desktop only, autoplays muted/looping
          z-[2] overlay stack — always above video
      ────────────────────────────────────────────────────────────── */}

      {/* Gradient fallback — always present (mobile: permanent; desktop: loading state) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(160deg, #0A0A0A 0%, #141414 35%, #0C0C0C 65%, #090909 100%)',
        }}
      />

      {/* Showreel — self-hosted, autoplays muted + loops (mobile + desktop). Stays
          hidden (dark gradient shows) until it's actually PLAYING, so there's no
          frozen first frame; then fades OUT only at the loop end. */}
      <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlaying={() => {
              playingRef.current = true
              // Tell the intro loader the hero is actually playing, so the curtain
              // only lifts once the video runs (no empty gap).
              ;(window as unknown as { __kkHeroPlaying?: boolean }).__kkHeroPlaying = true
              window.dispatchEvent(new Event('kk:heroplaying'))
            }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0 }}
          />
        )}
      </div>

      {/* Overall dim — pulls video brightness down, never killing it */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ backgroundColor: 'rgba(9,9,9,0.40)' }}
      />
      {/* Bottom vignette — name + descriptor zone, heavier pull */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-[55%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(9,9,9,0.90) 0%, rgba(9,9,9,0.45) 50%, transparent 100%)',
        }}
      />
      {/* Top vignette — nav legibility, lighter */}
      <div
        className="absolute top-0 left-0 right-0 z-[2] h-[28%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(9,9,9,0.55) 0%, transparent 100%)',
        }}
      />

      {/* Content — bottom left */}
      <div
        className="relative z-[3] mt-auto px-6 md:px-10 pb-12 md:pb-16"
        style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', marginTop: 'auto' }}
      >
        <div className="mt-auto">
          {/*
            ── LIME VERTICAL BAR — the ONE deliberate lime moment in the hero ──
            2px bar sits left of the studio name block.
          */}
          <div style={fadeIn(500, true)} className="flex items-start gap-4 md:gap-5">
            {/* 2px vertical lime accent */}
            <div
              className="flex-shrink-0"
              style={{
                width: '2px',
                height: '42px',
                backgroundColor: '#AAEE00',
                marginTop: '6px', // aligns with cap height of the heading
              }}
            />
            {/* Headline + support line stacked */}
            <div>
              <h1
                className="font-display font-extrabold text-[#EDEAE4] leading-[0.94] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.25rem, 5.5vw, 5rem)' }}
              >
                Crafted frame by frame. Rendered in real time.
              </h1>
              {/* Lime underline — fills left→right as the hero scrolls out of view */}
              <motion.div
                aria-hidden="true"
                className="origin-left h-[2px] w-full max-w-[640px] mt-5 md:mt-6"
                style={{
                  scaleX: lineScaleX,
                  backgroundColor: '#AAEE00',
                  opacity: mounted ? 1 : 0,
                  transition: 'opacity 750ms cubic-bezier(0.16,1,0.3,1) 600ms',
                }}
              />
              <p
                className="font-ui font-normal tracking-[0.1em] text-[#7A7A7A] mt-4"
                style={{
                  ...fadeIn(700),
                  fontSize: 'clamp(0.625rem, 0.9vw, 0.75rem)',
                }}
              >
                VFX generalist &amp; 3D artist — real-time rendering, look development, and cinematic 3D for studios and brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div
        className="absolute bottom-12 right-6 md:right-10 z-[3] flex flex-col items-center gap-3"
        style={fadeIn(1000)}
        aria-hidden="true"
      >
        <span
          className="font-ui text-[0.625rem] uppercase tracking-[0.18em]"
          style={{ color: '#3D3D3D', writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        {/* Architectural line-draw — no bounce */}
        <div className="w-px h-8 overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
          <div
            className="scroll-line w-full h-full"
            style={{
              backgroundColor: '#AAEE00',
              transformOrigin: 'top',
            }}
          />
        </div>
      </div>
    </section>
  )
}
