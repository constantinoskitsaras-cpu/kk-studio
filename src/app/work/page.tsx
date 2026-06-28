import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ProjectFrameFull } from '@/components/home/ProjectFrame'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work — Konstantinos Kitsaras',
  description:
    'Real-time and cinematic automotive CGI, built in Unreal Engine and V-Ray — selected personal and studio work.',
}

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '72px' }}>

        {/* Page header */}
        <div className="px-6 md:px-10 pt-20 md:pt-32 pb-12 md:pb-16" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Work</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1
              className="font-display font-extrabold text-[#EDEAE4] tracking-[-0.02em] leading-[0.94]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Selected Projects
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p
              className="font-body mt-6 text-[1rem] md:text-[1.0625rem] leading-[1.65] max-w-prose"
              style={{ color: '#7A7A7A' }}
            >
              Real-time and cinematic automotive CGI, built in Unreal Engine and V-Ray — selected personal and studio work.
            </p>
          </ScrollReveal>
        </div>

        {/* Project frames — same full-bleed presentation as the homepage */}
        <div className="pt-10 md:pt-14 pb-24 md:pb-40 flex flex-col gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectFrameFull
              key={project.slug}
              project={project}
              priority={i === 0}
              video
            />
          ))}
        </div>

      </main>
      <Footer />
    </>
  )
}
