import { cn } from '@/lib/utils'

export interface SocialLinkItem {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface SocialLinksProps {
  links: SocialLinkItem[]
  className?: string
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  if (links.length === 0) return null
  return (
    <ul className={cn('flex flex-wrap gap-3', className)} role="list">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-organic-sage hover:underline focus:outline-none focus:ring-2 focus:ring-organic-sage focus:ring-offset-2 rounded px-2 py-1"
          >
            {link.icon && <span className="shrink-0 [&>svg]:w-4 [&>svg]:h-4">{link.icon}</span>}
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
