'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'

// ── Shared image block ────────────────────────────────────────
function ProjectImage({
  src,
  alt,
  className = '',
  style,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  src?: string
  alt: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  sizes?: string
}) {
  const hasImage = Boolean(src)

  return (
    <div className={`relative overflow-hidden bg-[#111111] ${className}`} style={style}>
      {hasImage ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={100}
          className="object-cover transition-transform duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
            style={{
              background:
                'linear-gradient(145deg, #0F0F0F 0%, #1C1C1C 40%, #111111 70%, #0A0A0A 100%)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" opacity="0.07">
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

// ── Shared card meta row ──────────────────────────────────────
function CardMeta({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <p
          className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-2 label-text"
          style={{ color: '#AAEE00' }}
        >
          {project.category}
        </p>
        <h3
          className="font-display font-bold leading-[1.1] tracking-[-0.01em] text-[#EDEAE4]"
          style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.625rem)' }}
        >
          {project.title}
        </h3>
        <p
          className="font-body text-[0.875rem] mt-1.5 leading-[1.5]"
          style={{ color: '#7A7A7A' }}
        >
          {project.client}
        </p>
      </div>
      {/* Arrow */}
      <div
        className="flex-shrink-0 transition-transform duration-[250ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
        style={{ color: '#AAEE00' }}
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          <polyline
            points="12,4 18,10 12,16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      </div>
    </div>
  )
}

// Shared card chrome — bg shifts on hover AND keyboard focus (no JS state).
const cardLink =
  'block group border border-[#1A1A1A] transition-colors duration-200 hover:border-[#262626] focus-visible:border-[#262626]'
const cardBody =
  'border-t border-[#1A1A1A] transition-colors duration-200 bg-[#090909] group-hover:bg-[#111111] group-focus-visible:bg-[#111111]'

// ── Full-width card ───────────────────────────────────────────
export function ProjectCardFull({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  return (
    <Link href={`/work/${project.slug}`} className={cardLink} aria-label={`View project: ${project.title}`}>
      <ProjectImage
        src={project.heroImage}
        alt={project.title}
        className="w-full"
        style={{ height: 'clamp(220px, 44vw, 520px)' }}
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority={priority}
      />
      <div className={`p-8 md:p-10 ${cardBody}`}>
        <CardMeta project={project} />
      </div>
    </Link>
  )
}

// ── Split 60/40 card ──────────────────────────────────────────
export function ProjectCardSplit({
  project,
  imageLeft = true,
}: {
  project: Project
  imageLeft?: boolean
}) {
  return (
    <Link href={`/work/${project.slug}`} className={cardLink} aria-label={`View project: ${project.title}`}>
      <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Image — 60% */}
        <div className="w-full md:w-[60%]" style={{ minHeight: 'clamp(240px, 38vw, 480px)' }}>
          <ProjectImage
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full"
          />
        </div>

        {/* Content — 40% */}
        <div
          className={`flex-1 flex flex-col justify-center p-8 md:p-12 border-t md:border-t-0 ${cardBody}`}
          style={{
            borderLeft: imageLeft ? '1px solid #1A1A1A' : 'none',
            borderRight: !imageLeft ? '1px solid #1A1A1A' : 'none',
          }}
        >
          <CardMeta project={project} />
          <p
            className="font-body text-[0.9375rem] leading-[1.65] mt-6 max-w-[44ch]"
            style={{ color: '#7A7A7A' }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

// ── 2-up grid item ────────────────────────────────────────────
export function ProjectCardGrid({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className={cardLink} aria-label={`View project: ${project.title}`}>
      <ProjectImage
        src={project.heroImage}
        alt={project.title}
        className="w-full aspect-[4/3]"
      />
      <div className={`p-6 ${cardBody}`}>
        <CardMeta project={project} />
      </div>
    </Link>
  )
}
