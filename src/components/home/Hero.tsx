'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '@/lib/site'

// ── SWAP ZONE: change the hero video id in src/lib/site.ts ──────
const VIMEO_ID = site.vimeoId
// ───────────────────────────────────────────────────────────────

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

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
          z-[1] Vimeo iframe — desktop only, overlays gradient once loaded
          z-[2] overlay stack — always above video
      ────────────────────────────────────────────────────────────── */}

      {/* Gradient fallback — always present (mobile: permanent; desktop: loading state) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(160deg, #0A0A0A 0%, #141414 35%, #0C0C0C 65%, #090909 100%)',
        }}
      />

      {/* Vimeo cinematic background — desktop only
          background=1 is Vimeo's native parameter for background video mode:
          strips all player chrome, forces muted autoplay loop, no interaction.
          Video is 2.4:1 (ultrawide). CSS cover keeps it centred on any viewport:
          – 16:9 desktop → height governs, width overflows ~34% on each side
          – ultrawide monitor → width governs, height clipped at centre
          Mobile: hidden — gradient fallback shows instead (saves bandwidth) */}
      <div
        className="hidden md:block absolute inset-0 z-[1] overflow-hidden"
        aria-hidden="true"
      >
        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&autopause=0#t=8s`}
          onLoad={() => setVideoReady(true)}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: 'max(100%, calc(100dvh * 2.4))',
            height: 'max(100%, calc(100vw / 2.4))',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 1000ms cubic-bezier(0.16,1,0.3,1)',
          }}
          allow="autoplay; fullscreen"
          title=""
        />
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
                Cinematic stills, film, and real-time visualization for automotive brands, agencies, and productions.
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
