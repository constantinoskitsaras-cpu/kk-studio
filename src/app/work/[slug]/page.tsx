import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GalleryGrid } from '@/components/work/GalleryGrid'
import { CaseHeroVideo } from '@/components/work/CaseHeroVideo'
import { getProjectBySlug, projects } from '@/lib/projects'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

function ProjectVisual({
  src,
  alt,
  className = '',
  style,
  sizes = '100vw',
  priority = false,
  gradient = 'linear-gradient(160deg, #0F0F0F 0%, #1A1A1A 50%, #0C0C0C 100%)',
}: {
  src?: string
  alt: string
  className?: string
  style?: React.CSSProperties
  sizes?: string
  priority?: boolean
  gradient?: string
}) {
  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={100}
          className="object-contain scale-90 md:object-cover md:scale-100"
        />
      ) : (
        <>
          <div className="absolute inset-0" style={{ background: gradient }} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" opacity="0.06">
              <line x1="6" y1="4" x2="6" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
              <line x1="6" y1="16" x2="26" y2="4" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
              <line x1="6" y1="16" x2="26" y2="28" stroke="#EDEAE4" strokeWidth="2" strokeLinecap="square" />
              <rect x="24" y="15" width="4" height="2" fill="#AAEE00" />
            </svg>
          </div>
          <span className="sr-only">{alt}</span>
        </>
      )}
    </div>
  )
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Konstantinos Kitsaras`,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  // Find next project for footer nav
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <Navigation />
      <main>

        {/* Hero — cinematic 2.39:1 showreel for video projects; 16:9 for still
            covers so the whole image reads (no dark center-band crop) */}
        <div style={{ paddingTop: '72px', backgroundColor: '#090909' }}>
          <div
            className={`relative w-full overflow-hidden ${
              project.vimeoId ? 'pt-[41.84%]' : 'pt-[75%] md:pt-[56.25%]'
            }`}
          >
            <ProjectVisual
              src={project.heroImage}
              alt={project.title}
              className="absolute inset-0"
              sizes="100vw"
              priority
              gradient="linear-gradient(155deg, #0C0C0C 0%, #161616 40%, #0A0A0A 100%)"
            />

            {/* Vimeo background — center-cropped to fill the 2.39 band, fades in */}
            {project.vimeoId && (
              <CaseHeroVideo vimeoId={project.vimeoId} title={project.title} start={project.videoStart ?? 0} />
            )}
          </div>

          {/* Title — beneath the frame, so it never overflows the short mobile letterbox */}
          <div
            className="px-6 md:px-10 pt-10 md:pt-16 pb-2"
            style={{ maxWidth: '1280px', margin: '0 auto' }}
          >
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-4 label-text"
              style={{ color: '#AAEE00' }}
            >
              {project.category}
            </p>
            <h1
              className="font-display font-extrabold text-[#EDEAE4] leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {project.title}
            </h1>
            {project.contribution && (
              <p
                className="font-body font-light mt-5 leading-[1.6]"
                style={{ fontSize: '0.9375rem', color: '#7A7A7A' }}
              >
                {project.contribution}
              </p>
            )}
          </div>
        </div>

        {/* Metadata — hairline strip (sharp, no glass), per the design system */}
        <div className="px-6 md:px-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="py-10 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-b border-[#1A1A1A]">
            {[
              { label: 'Role',     value: project.role     },
              { label: 'Software', value: project.software },
              { label: 'Client',   value: project.client   },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-3 label-text"
                  style={{ color: '#7A7A7A' }}
                >
                  {label}
                </p>
                <p className="font-body font-light text-[0.9375rem] md:text-[1rem] text-[#EDEAE4] leading-[1.5]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Overview — label on top, generous measure below, plenty of air */}
        <section
          className="px-6 md:px-10 py-24 md:py-36"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <ScrollReveal trace>
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] label-text"
              style={{ color: '#AAEE00' }}
            >
              Overview
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 md:mt-14">
              {/* Lead — warm white, sets the scene */}
              <p
                className="font-body font-light text-[#EDEAE4] leading-[1.7] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.625rem)' }}
              >
                {project.description}
              </p>
              {/* Support — a "·"-separated spec list renders as an actual list for
                  scannability; prose stays a paragraph. */}
              {project.approach.includes(' · ') ? (
                <ul className="mt-8 md:mt-10 flex flex-col gap-3 md:gap-4">
                  {project.approach.split(' · ').map((item) => (
                    <li
                      key={item}
                      className="font-body font-light leading-[1.6]"
                      style={{ fontSize: '1.0625rem', color: '#7A7A7A' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="font-body font-light leading-[1.85] mt-8 md:mt-10"
                  style={{ fontSize: '1.0625rem', color: '#7A7A7A' }}
                >
                  {project.approach}
                </p>
              )}
            </div>
          </ScrollReveal>
        </section>

        {/* Visual gallery — single column, full width; each opens the lightbox for
            full-resolution, uncropped inspection */}
        <GalleryGrid images={project.images} title={project.title} />

        {/* Pull-quote — a single line lifted from the approach, breaks the rhythm */}
        {project.pullQuote && (
          <div
            className="px-6 md:px-10 py-24 md:py-32"
            style={{ maxWidth: '1280px', margin: '0 auto' }}
          >
            <ScrollReveal trace>
              <p
                className="font-display font-bold text-[#EDEAE4] leading-[1.05] tracking-[-0.01em] max-w-[34ch]"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}
              >
                {project.pullQuote}
              </p>
            </ScrollReveal>
          </div>
        )}

        {/* Process — mirrors Overview rhythm */}
        <section
          className="px-6 md:px-10 pb-24 md:pb-36"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <ScrollReveal trace>
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] label-text"
              style={{ color: '#AAEE00' }}
            >
              Process
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              className="font-body font-light leading-[1.85] mt-10 md:mt-14"
              style={{ fontSize: '1.0625rem', color: '#7A7A7A' }}
            >
              {project.process}
            </p>
          </ScrollReveal>

          {/* Technical breakdown images — only when present */}
          {project.breakdowns && project.breakdowns.length > 0 && (
            <div className="mt-12 md:mt-16 flex flex-col gap-2 md:gap-3">
              {project.breakdowns.map((src, i) => (
                <ScrollReveal key={src} variant="project" delay={i * 40}>
                  <ProjectVisual
                    src={src}
                    alt={`${project.title} — breakdown ${i + 1}`}
                    className="relative w-full aspect-[4/3] md:aspect-[16/9]"
                    sizes="100vw"
                  />
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>

        {/* Next project strip */}
        <Link
          href={`/work/${nextProject.slug}`}
          className="block transition-colors duration-200 hover:bg-[#111111] group"
        >
          <div
            className="px-6 md:px-10 py-12 md:py-16 flex items-center justify-between"
            style={{ maxWidth: '1280px', margin: '0 auto' }}
          >
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] label-text"
              style={{ color: '#7A7A7A' }}
            >
              Next Project
            </p>
            <div className="flex items-center gap-6">
              <span
                className="font-display font-bold tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', color: '#EDEAE4' }}
              >
                {nextProject.title}
              </span>
              <span
                className="transition-transform duration-[250ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1"
                style={{ color: '#AAEE00' }}
              >
                →
              </span>
            </div>
          </div>
        </Link>

      </main>
      <Footer />
    </>
  )
}
