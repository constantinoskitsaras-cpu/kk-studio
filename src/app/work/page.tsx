import type { Metadata } from 'next'
import { WorkIndexContent } from './WorkIndexContent'

export const metadata: Metadata = {
  title: 'Work — Konstantinos Kitsaras',
  description:
    'Real-time and cinematic automotive CGI, built in Unreal Engine and V-Ray — selected personal and studio work.',
}

export default function WorkPage() {
  return <WorkIndexContent />
}
