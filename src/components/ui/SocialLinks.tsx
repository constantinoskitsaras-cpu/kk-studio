import { site } from '@/lib/site'
import { socialIcons } from './SocialIcons'

// Display order + accessible labels for the studio's social channels.
const channels = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'artstation', label: 'ArtStation' },
  { key: 'linkedin', label: 'LinkedIn' },
] as const

export function SocialLinks({
  size = 18,
  gap = 'gap-5',
  className = '',
}: {
  size?: number
  gap?: string
  className?: string
}) {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {channels.map(({ key, label }) => {
        const Icon = socialIcons[key]
        return (
          <a
            key={key}
            href={site.social[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex items-center justify-center rounded-full p-3 border border-white/10 bg-white/[0.03] backdrop-blur-[20px] transition-all duration-200 ease-out text-[#7A7A7A] hover:text-[#AAEE00] hover:border-[#AAEE00]/40 hover:-translate-y-0.5"
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
