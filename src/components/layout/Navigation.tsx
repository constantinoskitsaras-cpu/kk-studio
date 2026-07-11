'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkedInIcon, ArtStationIcon, VimeoIcon, YouTubeIcon } from '@/components/ui/SocialIcons'
import { site } from '@/lib/site'
import { useLocale, useT } from '@/lib/i18n/context'

const navSocials = [
  { label: 'YouTube',    href: site.social.youtube,    Icon: YouTubeIcon },
  { label: 'Vimeo',      href: site.social.vimeo,      Icon: VimeoIcon },
  { label: 'ArtStation', href: site.social.artstation, Icon: ArtStationIcon },
  { label: 'LinkedIn',   href: site.social.linkedin,   Icon: LinkedInIcon },
]

// Quiet text toggle — matches the nav's own label typography instead of an
// imported flag/globe icon, so it reads as part of the system, not a widget.
function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale()
  return (
    <div className={`flex items-center gap-1.5 font-ui font-medium uppercase tracking-[0.1em] text-[0.6875rem] ${className}`}>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-current={locale === 'en'}
        className="transition-colors duration-200 hover:text-[#AAEE00]"
        style={{ color: locale === 'en' ? '#EDEAE4' : '#3D3D3D' }}
      >
        EN
      </button>
      <span aria-hidden="true" style={{ color: '#3D3D3D' }}>/</span>
      <button
        type="button"
        onClick={() => setLocale('el')}
        aria-current={locale === 'el'}
        className="transition-colors duration-200 hover:text-[#AAEE00]"
        style={{ color: locale === 'el' ? '#EDEAE4' : '#3D3D3D' }}
      >
        ΕΛ
      </button>
    </div>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useT()

  const navLinks = [
    { href: '/work',    label: t('nav.work')    },
    { href: '/about',   label: t('nav.about')   },
    { href: '/contact', label: t('nav.contact') },
  ]

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
        {/* Centered nav — absolutely centered to the full-width bar (true viewport
            center), independent of the left/right content below so it never drifts
            as the logo/social widths change or the viewport gets very wide. */}
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
          {/* Left — monogram. Rendered as a CSS mask (not <Image>) so the fill
              color can transition to lime on hover instead of just dimming. */}
          <Link
            href="/"
            aria-label={t('nav.homeAriaLabel')}
            className="group flex items-center ml-1 md:ml-4"
          >
            <span
              aria-hidden="true"
              className="block h-12 w-12 md:h-14 md:w-14 bg-[#EDEAE4] transition-colors duration-200 group-hover:bg-[#AAEE00]"
              style={{
                WebkitMaskImage: 'url(/images/logo.svg)',
                maskImage: 'url(/images/logo.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
          </Link>

          {/* Right — social (desktop) + mobile menu button */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-5">
              {navSocials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-[#7A7A7A] transition-all duration-200 ease-out hover:text-[#AAEE00] hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(170,238,0,0.45)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <LanguageToggle className="hidden md:flex" />

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col justify-center items-end gap-[5px] w-10 h-10 mr-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
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
        <div className="flex flex-col justify-center items-center text-center h-full px-8 gap-8">
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
          <LanguageToggle
            className="!text-[0.875rem]"
          />
        </div>
      </div>
    </>
  )
}
