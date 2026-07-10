'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Lightbox } from '@/components/work/Lightbox'

interface GalleryGridProps {
  images: string[]
  title: string
}

// Gallery wall — single column, full width. Each frame opens the lightbox for
// full-resolution inspection (the craft-proof moment).
export function GalleryGrid({ images, title }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  return (
    <>
      <div className="flex flex-col gap-2 md:gap-3">
        {images.map((src, i) => (
          <ScrollReveal key={src} variant="project" delay={i * 40}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`${title} — open image ${i + 1} at full size`}
              className="group relative block w-full overflow-hidden cursor-zoom-in aspect-[4/3] md:aspect-[2.39/1] focus-visible:outline-2 focus-visible:outline-[#AAEE00]"
              style={{ backgroundColor: '#0C0C0C' }}
            >
              <Image
                src={src}
                alt={`${title} — visual ${i + 1}`}
                fill
                sizes="100vw"
                quality={100}
                className="object-contain scale-90 md:object-cover md:scale-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
              />
              {/* Zoom affordance — quiet, appears on hover */}
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 hidden md:group-hover:flex items-center gap-2 px-3 py-1.5 font-ui font-medium uppercase tracking-[0.1em] text-[0.625rem]"
                style={{ color: '#AAEE00', backgroundColor: 'rgba(9,9,9,0.55)', border: '1px solid rgba(170,238,0,0.25)' }}
              >
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
                  <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
                View
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <Lightbox
        images={images}
        title={title}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  )
}
