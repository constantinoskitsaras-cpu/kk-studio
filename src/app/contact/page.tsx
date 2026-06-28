'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/lib/site'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const projectTypes = [
  'Automotive CGI',
  'Unreal Engine Visualization',
  'Cinematic Stills',
  'Motion & Direction',
  'Campaign Production',
  'Web Design & Development',
  'Other',
]

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // No backend yet — hand off to the user's mail client with the inquiry
    // pre-filled so nothing is lost. Swap for a real endpoint when available.
    const subject = `New inquiry — ${form.name}${form.company ? ` · ${form.company}` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || '—'}`,
      `Project type: ${form.projectType || '—'}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setFormState('success')
  }

  const inputBase = `
    w-full font-body font-light text-[1rem] text-[#EDEAE4]
    bg-transparent backdrop-blur-[24px] border border-white/[0.06]
    px-5 py-4
    transition-colors duration-200
    placeholder:text-[#3D3D3D]
    focus:outline-none focus:border-[#AAEE00]/50
  `
  const labelBase = `
    block font-ui font-medium uppercase tracking-[0.1em] text-[0.6875rem] mb-2 label-text
  `

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero — typographic, no image */}
        <div
          className="px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <ScrollReveal>
            <p
              className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-6 label-text"
              style={{ color: '#AAEE00' }}
            >
              ── Contact
            </p>
            <h1
              className="font-display font-extrabold text-[#EDEAE4] leading-[0.94] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
            >
              Start a
              <br />
              conversation.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p
              className="font-body font-light text-[1rem] md:text-[1.125rem] leading-[1.65] max-w-prose mt-8"
              style={{ color: '#7A7A7A' }}
            >
              Open for look development, real-time rendering, cinematic animation,
              and VFX — automotive and beyond. Tell me about the project and the
              deadline.
            </p>
          </ScrollReveal>
        </div>

        {/* Body — 2 col */}
        <div
          className="px-6 md:px-10 pb-24 md:pb-40 border-t border-[#1A1A1A]"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-16 md:pt-24">

            {/* Left — Direct info */}
            <div>
              {/* Oversized faint monogram — quiet brand watermark */}
              <Image
                src="/images/logo.svg"
                alt=""
                aria-hidden="true"
                width={320}
                height={320}
                unoptimized
                className="h-40 md:h-56 w-auto mb-10 opacity-[0.07] select-none pointer-events-none"
              />
              <ScrollReveal>
                <p
                  className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-8 label-text"
                  style={{ color: '#AAEE00' }}
                >
                  ── Studio
                </p>
                <h2
                  className="font-display font-bold text-[#EDEAE4] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                >
                  {site.name}
                </h2>

                <div className="mt-8 flex flex-col gap-5">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-ui text-[0.875rem] w-fit transition-colors duration-200 hover:text-[#AAEE00]"
                    style={{ color: '#7A7A7A' }}
                  >
                    {site.email}
                  </a>
                  <SocialLinks size={20} gap="gap-6" />
                </div>

                <div className="mt-12 pt-12 border-t border-[#1A1A1A]">
                  <p
                    className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-4 label-text"
                    style={{ color: '#3D3D3D' }}
                  >
                    Availability
                  </p>
                  <p className="font-body text-[1rem] text-[#EDEAE4]">
                    Open to new commissions
                  </p>
                  <p
                    className="font-ui text-[0.8125rem] mt-1"
                    style={{ color: '#3D3D3D' }}
                  >
                    Response within 24 hours
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form or success */}
            <div>
              <ScrollReveal delay={80}>
                {formState === 'success' ? (
                  <div className="py-16">
                    <div
                      className="w-px h-8 mb-8"
                      style={{ backgroundColor: '#AAEE00' }}
                    />
                    <h3
                      className="font-display font-bold text-[#EDEAE4] tracking-[-0.01em]"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                    >
                      Message received.
                    </h3>
                    <p
                      className="font-body text-[1rem] leading-[1.65] mt-6 max-w-prose"
                      style={{ color: '#7A7A7A' }}
                    >
                      Thank you. I&rsquo;ll be in touch within 24 hours.
                    </p>
                    <div className="mt-10">
                      <Button href="/work" variant="secondary">
                        → Back to Work
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="bg-transparent backdrop-blur-[24px] border border-white/[0.06] p-6 md:p-8"
                  >
                    <p
                      className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-8 label-text"
                      style={{ color: '#AAEE00' }}
                    >
                      ── Inquiry
                    </p>

                    <div className="flex flex-col gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className={labelBase}
                          style={{ color: '#3D3D3D' }}
                        >
                          Name <span style={{ color: '#AAEE00' }}>*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          className={inputBase}
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className={labelBase}
                          style={{ color: '#3D3D3D' }}
                        >
                          Email <span style={{ color: '#AAEE00' }}>*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          className={inputBase}
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className={labelBase}
                          style={{ color: '#3D3D3D' }}
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={(e) => update('company', e.target.value)}
                          className={inputBase}
                          placeholder="Optional"
                        />
                      </div>

                      {/* Project type */}
                      <div>
                        <label
                          htmlFor="projectType"
                          className={labelBase}
                          style={{ color: '#3D3D3D' }}
                        >
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          value={form.projectType}
                          onChange={(e) => update('projectType', e.target.value)}
                          className={`${inputBase} appearance-none cursor-pointer`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%237A7A7A' stroke-width='1.5' stroke-linecap='square'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 20px center',
                          }}
                        >
                          <option value="" style={{ backgroundColor: '#111111' }}>
                            Select type
                          </option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t} style={{ backgroundColor: '#111111' }}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className={labelBase}
                          style={{ color: '#3D3D3D' }}
                        >
                          Message <span style={{ color: '#AAEE00' }}>*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          className={`${inputBase} resize-y min-h-[140px]`}
                          placeholder="Tell me about your project — scope, timeline, and what you're looking to achieve."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        disabled={formState === 'submitting'}
                        className="mt-2"
                      >
                        {formState === 'submitting' ? 'Sending...' : '→ Send Inquiry'}
                      </Button>

                      <p
                        className="font-ui text-[0.6875rem] text-center label-text"
                        style={{ color: '#3D3D3D' }}
                      >
                        No spam. No subscriptions. Direct to studio.
                      </p>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
