'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const disciplines = [
  { label: 'Automotive CGI',          col: 'left'  },
  { label: 'Motion & Direction',      col: 'right' },
  { label: 'Unreal Engine Viz',       col: 'left'  },
  { label: 'Campaign Production',     col: 'right' },
  { label: 'Cinematic Stills',        col: 'left'  },
  { label: 'Bespoke Commissions',     col: 'right' },
]

function DisciplineItem({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="py-5 md:py-6 border-b border-[#1A1A1A] cursor-default transition-colors duration-200"
      style={{ color: hovered ? '#AAEE00' : '#EDEAE4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="font-display font-bold tracking-[-0.01em]"
        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
      >
        {label}
      </span>
    </div>
  )
}

export function Discipline() {
  const left  = disciplines.filter((d) => d.col === 'left')
  const right = disciplines.filter((d) => d.col === 'right')

  return (
    <section
      className="py-24 md:py-40 px-6 md:px-10 border-t border-[#1A1A1A]"
      style={{ maxWidth: '1280px', margin: '0 auto' }}
    >
      <ScrollReveal>
        <SectionLabel>Discipline</SectionLabel>
      </ScrollReveal>

      <ScrollReveal variant="label" delay={80}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
          <div>
            {left.map((d) => (
              <DisciplineItem key={d.label} label={d.label} />
            ))}
          </div>
          <div>
            {right.map((d) => (
              <DisciplineItem key={d.label} label={d.label} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
