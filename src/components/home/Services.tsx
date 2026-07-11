'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useT } from '@/lib/i18n/context'

export function Services() {
  const t = useT()
  const services = t<{ title: string; body: string }[]>('home.services.items')

  return (
    <section
      className="pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 border-t border-[#1A1A1A]"
      style={{ maxWidth: '1280px', margin: '0 auto' }}
    >
      <ScrollReveal trace>
        <SectionLabel className="justify-start">{t('home.services.label')}</SectionLabel>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mt-16">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} variant="label" delay={i * 60}>
            <div className="h-full pt-6 md:pt-7" style={{ borderTop: '1px solid #1A1A1A' }}>
              {/* Lime accent line */}
              <span
                aria-hidden="true"
                className="block h-px w-8 mb-6"
                style={{ backgroundColor: '#AAEE00' }}
              />
              <h3
                className="font-ui font-normal tracking-widest text-[#EDEAE4] leading-[1.25]"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)' }}
              >
                {s.title}
              </h3>
              <p
                className="font-body font-light text-[#7A7A7A] leading-[1.55] mt-4 max-w-[34ch]"
                style={{ fontSize: '0.9375rem' }}
              >
                {s.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
