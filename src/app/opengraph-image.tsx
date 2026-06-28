import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

// Dynamic share card — dark brand surface, single lime accent, the name.
export const alt = `${site.name} — Automotive CGI Studio`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: '#090909',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', width: 64, height: 4, background: '#AAEE00', marginBottom: 36 }} />
        <div
          style={{
            display: 'flex',
            fontSize: 92,
            fontWeight: 800,
            color: '#EDEAE4',
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          Konstantinos Kitsaras
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#7A7A7A', marginTop: 28, letterSpacing: 1 }}>
          Automotive CGI · Unreal Engine · Cinematic Stills
        </div>
      </div>
    ),
    { ...size },
  )
}
