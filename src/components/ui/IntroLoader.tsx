'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

// Full-screen intro that plays once per session:
//  1. black overlay
//  2. a 1px lime line sweeps top → bottom (0.8s), revealing the centered logo
//     via a clip-path that opens in sync
//  3. logo holds ~0.5s
//  4. the whole overlay fades out (0.6s), revealing the site
export function IntroLoader() {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState<'pending' | 'playing' | 'done'>('pending')

  useEffect(() => {
    if (sessionStorage.getItem('kk-intro-loader')) {
      setPhase('done')
      return
    }
    sessionStorage.setItem('kk-intro-loader', '1')
    setPhase('playing')
    document.body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    if (phase === 'done') document.body.style.overflow = ''
  }, [phase])

  if (phase === 'done') return null

  // Timeline: 0.8s sweep/reveal + 0.5s hold + 0.6s fade = 1.9s (reduced: 0.5s hold + 0.5s fade).
  const total = reduce ? 1.0 : 1.9
  const fadeStart = reduce ? 0.5 : 0.684 // 1.3s / 1.9s

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={phase === 'playing' ? { opacity: [1, 1, 0] } : { opacity: 1 }}
      transition={{ duration: total, times: [0, fadeStart, 1], ease: 'easeOut' }}
      onAnimationComplete={() => {
        if (phase === 'playing') setPhase('done')
      }}
      aria-hidden="true"
    >
      {/* Logo — revealed top → bottom by the sweeping line via clip-path */}
      <motion.div
        initial={{ clipPath: reduce ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: reduce ? 0 : 0.8, ease: 'easeInOut' }}
      >
        <Image
          src="/images/logo.webp"
          alt="KK Studio"
          width={160}
          height={160}
          priority
          unoptimized
          className="h-24 w-auto md:h-28"
        />
      </motion.div>

      {/* Lime scan line — sweeps top → bottom */}
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: '#AAEE00' }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: '100vh', opacity: [1, 1, 0] }}
          transition={{ duration: 0.8, ease: 'easeInOut', times: [0, 0.85, 1] }}
        />
      )}
    </motion.div>
  )
}
