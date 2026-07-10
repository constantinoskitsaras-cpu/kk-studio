'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Full-screen intro that plays once per session — a cinematic letterbox reveal:
//  1. two black bars (top + bottom) open from the middle (0.8s), revealing the
//     centered logo
//  2. logo holds (~0.6s)
//  3. the whole overlay fades out (0.5s), revealing the site
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

  // bars 0.8s + logo pause 0.6s + fade 0.5s = 1.9s
  const total = reduce ? 1.0 : 1.9
  const fadeStart = reduce ? 0.5 : 1.4 / 1.9

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
      {/* Logo — sits at center, revealed as the bars part */}
      <motion.div
        initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0.2 : 0.7, ease: EXPO, delay: reduce ? 0 : 0.3 }}
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

      {/* Letterbox bars — meet at the center, then open top/bottom */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-black z-10"
        initial={{ y: reduce ? '-100%' : 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: reduce ? 0 : 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-10"
        initial={{ y: reduce ? '100%' : 0 }}
        animate={{ y: '100%' }}
        transition={{ duration: reduce ? 0 : 0.8, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
