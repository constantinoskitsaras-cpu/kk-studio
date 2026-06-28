import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

// Capabilities — each carries a short one-line descriptor and a lime accent line.
const services = [
  { title: 'Look Development', body: 'Materials, light, and grade tuned until the frame reads as photographed.' },
  { title: 'Real-Time Rendering', body: 'Unreal Engine pipelines that deliver cinematic quality at frame rate.' },
  { title: 'Cinematic Animation', body: 'Camera, motion, and pacing directed for tension and impact.' },
  { title: 'VFX & Compositing', body: 'Procedural FX, shading, and final integration across the shot.' },
  { title: 'Developer', body: 'Fast, considered front-ends that carry the same craft as the work.' },
]

export function Services() {
  return (
    <section
      className="pt-32 md:pt-56 pb-24 md:pb-40 mb-24 md:mb-32 px-6 md:px-10 border-t border-[#1A1A1A]"
      style={{ maxWidth: '1280px', margin: '0 auto' }}
    >
      <ScrollReveal trace>
        <SectionLabel className="justify-start">Services</SectionLabel>
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
