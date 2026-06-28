'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/work',    label: 'Work'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-b ${
          scrolled
            ? 'nav-scrolled border-[#1A1A1A]'
            : 'bg-transparent border-transparent'
        }`}
        style={{ height: '72px' }}
      >
        {/* Centered nav — absolutely centered to the full-width bar (true viewport center) */}
        <div className="hidden md:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className="group relative font-ui font-medium uppercase tracking-[0.14em] text-[0.8125rem] transition-colors duration-200 hover:text-[#AAEE00] focus-visible:text-[#AAEE00]"
                style={{ color: active ? '#EDEAE4' : '#7A7A7A' }}
              >
                {label}
                {/* Lime underline — grows from the left on hover/focus; stays drawn when active */}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-0 right-0 h-px origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 ${active ? 'scale-x-100' : 'scale-x-0'}`}
                  style={{ backgroundColor: '#AAEE00' }}
                />
              </Link>
            )
          })}
        </div>

        <div
          className="relative h-full mx-auto flex items-center justify-between px-6 md:px-10"
          style={{ maxWidth: '1280px' }}
        >
          {/* Monogram */}
          <Link
            href="/"
            aria-label="Konstantinos Kitsaras — Home"
            className="group flex items-center ml-1 md:ml-4"
          >
            <Image
              src="/images/logo.svg"
              alt="KK Studio"
              width={200}
              height={200}
              priority
              unoptimized
              className="h-12 md:h-14 w-auto transition-opacity duration-200 group-hover:opacity-70"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-10 h-10 -mr-2 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: '20px',
                backgroundColor: '#EDEAE4',
                transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: '14px',
                backgroundColor: '#EDEAE4',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: '20px',
                backgroundColor: '#EDEAE4',
                transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          backgroundColor: '#111111',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-8">
          {navLinks.map(({ href, label }, i) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="relative w-fit font-display font-bold transition-colors duration-200"
                style={{
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  color: '#EDEAE4',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `color 0.2s, opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${150 + i * 60}ms, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${150 + i * 60}ms`,
                }}
              >
                {label}
                {active && (
                  <span
                    className="absolute -bottom-2 left-0 h-px w-full"
                    style={{ backgroundColor: '#AAEE00' }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
