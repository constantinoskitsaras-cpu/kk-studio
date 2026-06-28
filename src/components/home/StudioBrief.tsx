import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

// Three pillars — drawn from the hero positioning (clarity, motion, authority).
const pillars = [
  {
    title: 'Clarity',
    body: 'Every frame earns its place. Sharp hierarchy, nothing decorative, the car leading.',
  },
  {
    title: 'Motion',
    body: 'Camera and light move with intent — editorial pacing that guides the eye, never shows off.',
  },
  {
    title: 'Authority',
    body: 'A disciplined dark system, warm in the detail — work that reads as made, not generated.',
  },
]

export function StudioBrief() {
  return (
    <section
      className="py-24 md:py-40 px-6 md:px-10"
      style={{ maxWidth: '1280px', margin: '0 auto' }}
    >
      {/* One short label — lime trace draws in with it */}
      <ScrollReveal trace>
        <SectionLabel className="justify-start">Approach</SectionLabel>
      </ScrollReveal>

      {/* One strong paragraph — editorial, confident, highly readable */}
      <ScrollReveal delay={80}>
        <p
          className="font-body text-[#EDEAE4] leading-[1.3] tracking-[-0.03em] max-w-[46ch] mt-2"
          style={{ fontSize: 'clamp(1.375rem, 2.4vw, 2rem)' }}
        >
          Every project is a bespoke commission — dark, deliberate, and built around the
          machine. The output is automotive CGI with real cinematic weight: clean hierarchy,
          controlled motion, and a point of view you remember.
        </p>
      </ScrollReveal>

      {/* Three compact pillars — hairline-led, no cards, no badges */}
      <ScrollReveal variant="label" delay={120}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 md:gap-x-16 mt-16 md:mt-24">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3
                className="font-display font-bold text-[#EDEAE4] leading-[1.1] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.5rem)' }}
              >
                {p.title}
              </h3>
              <p
                className="font-body text-[#7A7A7A] leading-[1.5] mt-3"
                style={{ fontSize: '0.9375rem' }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
