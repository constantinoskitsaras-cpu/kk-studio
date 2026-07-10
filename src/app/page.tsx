import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { SelectedWork } from '@/components/home/SelectedWork'
import { ContactCTA } from '@/components/home/ContactCTA'
import { Services } from '@/components/home/Services'
import { LogoMarquee } from '@/components/home/LogoMarquee'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* HeroHeadline removed — hero copy now lives entirely in <Hero /> so there's
            no second hero headline. Component kept dormant in components/home/HeroHeadline.tsx. */}
        <SelectedWork />
        {/* StudioBrief (approach paragraph + 3 pillars) removed from the live page;
            component kept dormant in components/home/StudioBrief.tsx. */}
        <Services />
        <ContactCTA />
        {/* Credibility band — client logo marquee, last on the page, right
            above the footer. */}
        <LogoMarquee />
      </main>
      <Footer />
    </>
  )
}
