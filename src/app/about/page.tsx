import type { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About — Konstantinos Kitsaras',
  description:
    'A one-person studio crafting cinematic, dark, precision-built work — automotive CGI, Unreal Engine visualization, and cinematic stills.',
}

export default function AboutPage() {
  return <AboutContent />
}
