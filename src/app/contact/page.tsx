'use client'

import { useState } from 'react'
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

const timelines = [
  'ASAP',
  '1–2 weeks',
  '1 month',
  '2–3 months',
  'Flexible',
]

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    projectType: '',
    timeline: '',
    message: '',
  })

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // No backend yet — hand off to the user's mail client with the inquiry
    // pre-filled so nothing is lost. The visitor's own email client fills in
    // the From address, so we don't need to collect it separately. Swap for
    // a real endpoint when available.
    const subject = `New inquiry — ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Project type: ${form.projectType || '—'}`,
      `Timeline: ${form.timeline || '—'}`,
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
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-16 md:pt-24 md:items-center">
            {/* Vertical divider between the two columns — desktop only */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
              style={{ background: 'linear-gradient(to bottom, transparent, #AAEE00, transparent)', opacity: 0.4 }}
            />

            {/* Left — Direct info */}
            <div className="relative">
              {/* Technical ruler texture — quiet vertical hairlines beside the
                  monogram, the same "precision instrument" language as the
                  section-label hairline ticks. No circles/geometry, just lines. */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute top-0 -bottom-16 left-52 w-24 pointer-events-none select-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(to right, #1A1A1A 0px, #1A1A1A 1px, transparent 1px, transparent 12px)',
                  maskImage: 'linear-gradient(to bottom, black, transparent)',
                }}
              />

              {/* Oversized monogram — quiet dark brand watermark, flat fill. */}
              <span
                aria-hidden="true"
                className="block h-40 md:h-56 w-40 md:w-56 mb-10 bg-[#242424] select-none pointer-events-none"
                style={{
                  WebkitMaskImage: 'url(/images/logo.svg)',
                  maskImage: 'url(/images/logo.svg)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskPosition: 'left center',
                  maskPosition: 'left center',
                }}
              />
              <ScrollReveal trace>
                <h2
                  className="font-display font-extrabold text-[#EDEAE4] leading-[0.96] tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
                >
                  Every pixel.
                  <br />
                  Every detail.
                </h2>

                <div className="mt-12 flex flex-col gap-8">
                  {/* Availability block */}
                  <div className="pb-6 border-b" style={{ borderColor: '#AAEE00' }}>
                    <p
                      className="font-ui font-medium uppercase tracking-[0.12em] text-[0.6875rem] mb-3 label-text"
                      style={{ color: '#3D3D3D' }}
                    >
                      Availability
                    </p>
                    <p className="font-body text-[1.0625rem] text-[#EDEAE4]">
                      Open to new commissions
                    </p>
                    <p
                      className="font-ui text-[0.8125rem] mt-1"
                      style={{ color: '#7A7A7A' }}
                    >
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <SocialLinks size={20} gap="gap-6" />
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

                      {/* Timeline */}
                      <div>
                        <label
                          htmlFor="timeline"
                          className={labelBase}
                          style={{ color: '#3D3D3D' }}
                        >
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          value={form.timeline}
                          onChange={(e) => update('timeline', e.target.value)}
                          className={`${inputBase} appearance-none cursor-pointer`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%237A7A7A' stroke-width='1.5' stroke-linecap='square'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 20px center',
                          }}
                        >
                          <option value="" style={{ backgroundColor: '#111111' }}>
                            Select timeline
                          </option>
                          {timelines.map((t) => (
                            <option key={t} value={t} style={{ backgroundColor: '#111111' }}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Details */}
                      <div>
                        <label
                          htmlFor="message"
                          className={labelBase}
                          style={{ color: '#3D3D3D' }}
                        >
                          Details <span style={{ color: '#AAEE00' }}>*</span>
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
