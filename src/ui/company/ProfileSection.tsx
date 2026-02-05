import { cn } from '@/lib/utils'

export interface ProfileSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function ProfileSection({ title, children, className }: ProfileSectionProps) {
  return (
    <section className={cn('', className)} aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <h2
        id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-sm font-semibold text-organic-ink uppercase tracking-wider border-b border-organic-border pb-2 mb-4"
      >
        {title}
      </h2>
      <div className="text-sm text-organic-ink">{children}</div>
    </section>
  )
}
