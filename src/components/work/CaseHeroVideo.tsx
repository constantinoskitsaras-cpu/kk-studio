'use client'

import { useState } from 'react'

// Detail-page showreel. The frame is a cinematic 2.39:1 band; the source video is
// 16:9, so we size the iframe to a 16:9 box sized off the viewport width and
// center-crop it (the 2.39 frame clips top/bottom) — fills edge-to-edge, no
// letterbox. Fades in once loaded so the poster never pops/stutters.
export function CaseHeroVideo({ vimeoId, title, start = 0 }: { vimeoId: string; title: string; start?: number }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <iframe
      src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&playsinline=1&quality=4K${start ? `#t=${start}s` : ''}`}
      onLoad={() => setLoaded(true)}
      className="hidden md:block absolute top-1/2 left-1/2"
      style={{
        width: '100vw',
        height: '56.25vw', // 16:9 of full-bleed width → covers the 2.39 band
        transform: 'translate(-50%, -50%)',
        border: 'none',
        pointerEvents: 'none',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 900ms cubic-bezier(0.16,1,0.3,1)',
      }}
      allow="autoplay; fullscreen"
      title={`${title} — showreel`}
      aria-hidden="true"
    />
  )
}
