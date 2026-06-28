import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Statement() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <ScrollReveal>
        <SectionLabel>About the Work</SectionLabel>
      </ScrollReveal>

      <div className="max-w-[900px]">
        <ScrollReveal delay={100}>
          <h2
            className="font-display font-extrabold text-[#EDEAE4] leading-[1.0] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
          >
            Precision-crafted visual experiences
            <br />
            <span style={{ color: '#7A7A7A' }}>for the machines that define an era.</span>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  )
}
