'use client'

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'glass'
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2.5 rounded-full
    font-ui font-medium uppercase tracking-[0.14em] text-[0.6875rem]
    px-12 py-5 transition-all duration-200
    focus-visible:outline-2 focus-visible:outline-offset-3
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
  `

  // Liquid glass that's neutral ("dead") at rest and lights up lime on hover.
  const glassLime = `
    border border-white/15 text-[#7A7A7A]
    bg-white/[0.04] backdrop-blur-[20px]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:text-[#AAEE00] hover:border-[#AAEE00]/50 hover:bg-[#AAEE00]/[0.10]
    focus-visible:outline-[#AAEE00]
  `

  const variants = {
    primary: glassLime,
    secondary: `
      border border-white/10 text-[#7A7A7A] bg-white/[0.03] backdrop-blur-[20px]
      hover:border-white/20 hover:text-[#EDEAE4]
      focus-visible:outline-[#EDEAE4]
    `,
    glass: glassLime,
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    // mailto:, tel:, and absolute http(s) links aren't route navigations —
    // render a plain anchor (with safe rel/target for external URLs).
    const isExternal = /^(https?:|mailto:|tel:)/.test(href)
    if (isExternal) {
      const isHttp = href.startsWith('http')
      return (
        <a
          href={href}
          className={classes}
          {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
