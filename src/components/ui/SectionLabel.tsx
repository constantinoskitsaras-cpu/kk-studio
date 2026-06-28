'use client'

interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-6 mb-12 md:mb-16 ${className}`}>
      <span
        className="block h-px flex-shrink-0 w-6"
        style={{ backgroundColor: 'var(--kk-border-mid)' }}
      />
      <span
        className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] md:text-[0.6875rem] label-text"
        style={{ color: 'var(--kk-accent)' }}
      >
        {children}
      </span>
      <span
        className="block h-px flex-shrink-0 w-6"
        style={{ backgroundColor: 'var(--kk-border-mid)' }}
      />
    </div>
  )
}
