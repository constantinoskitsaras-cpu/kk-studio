import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export function ContactCTA() {
  return (
    <section className="mt-24 md:mt-32 pt-32 md:pt-52 pb-24 md:pb-40 px-6 md:px-10 text-center">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Display type — headline variant with centered lime trace above it */}
        <ScrollReveal variant="headline" trace traceCenter>
          <h2
            className="font-display font-extrabold text-[#EDEAE4] leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Let&rsquo;s work.
          </h2>
        </ScrollReveal>

        {/* Descriptor — label variant: quieter, Y=8px */}
        <ScrollReveal variant="label" delay={120}>
          <p
            className="font-body font-light mt-6 md:mt-8 text-[1rem] md:text-[1.125rem]"
            style={{ color: '#7A7A7A' }}
          >
            Bespoke commissions and select collaborations.
          </p>
        </ScrollReveal>

        {/* Buttons — label variant, follows descriptor */}
        <ScrollReveal variant="label" delay={220}>
          <div className="mt-14 md:mt-20 flex justify-center">
            <Button href="/contact" variant="glass">
              → Open Inquiry
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
