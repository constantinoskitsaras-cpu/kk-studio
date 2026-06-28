'use client'

import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface LightboxProps {
  images: string[]
  title: string
  /** Index of the open image, or null when closed. */
  index: number | null
  onClose: () => void
  onIndexChange: (next: number) => void
}

// Full-screen render inspector — object-contain at full resolution, never cropped.
export function Lightbox({ images, title, index, onClose, onIndexChange }: LightboxProps) {
  const reduce = useReducedMotion()
  const open = index !== null
  const closeRef = useRef<HTMLButtonElement>(null)

  const goPrev = useCallback(() => {
    if (index === null) return
    onIndexChange((index - 1 + images.length) % images.length)
  }, [index, images.length, onIndexChange])

  const goNext = useCallback(() => {
    if (index === null) return
    onIndexChange((index + 1) % images.length)
  }, [index, images.length, onIndexChange])

  // Keyboard: ← → navigate, Esc closes.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, goPrev, goNext])

  // Lock body scroll while open; move focus to the close button.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.body.style.overflow = prev }
  }, [open])

  const fade = reduce ? { duration: 0 } : { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — image ${index + 1} of ${images.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(9,9,9,0.96)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fade}
          onClick={onClose}
        >
          {/* Top bar — title + counter + close */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-5 z-[2]"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="font-display font-bold tracking-[-0.01em] text-[#EDEAE4]"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.375rem)' }}
            >
              {title}
            </span>
            <div className="flex items-center gap-6">
              <span
                className="font-ui font-medium tracking-[0.1em] tabular-nums"
                style={{ fontSize: '0.75rem', color: '#AAEE00' }}
              >
                {String(index + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(images.length).padStart(2, '0')}
              </span>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="text-[#7A7A7A] transition-colors duration-200 hover:text-[#AAEE00] focus-visible:text-[#AAEE00]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </button>
            </div>
          </div>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 z-[2] p-3 text-[#7A7A7A] transition-colors duration-200 hover:text-[#AAEE00] focus-visible:text-[#AAEE00]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="15,4 7,12 15,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
              </svg>
            </button>
          )}

          {/* Image — contained, full resolution, never cropped */}
          <motion.div
            key={index}
            className="relative w-[90vw] h-[80vh] mx-12 md:mx-20"
            onClick={(e) => e.stopPropagation()}
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={fade}
          >
            <Image
              src={images[index]}
              alt={`${title} — image ${index + 1}`}
              fill
              sizes="100vw"
              quality={100}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next image"
              className="absolute right-2 md:right-6 z-[2] p-3 text-[#7A7A7A] transition-colors duration-200 hover:text-[#AAEE00] focus-visible:text-[#AAEE00]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="9,4 17,12 9,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
              </svg>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
