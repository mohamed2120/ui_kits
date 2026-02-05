import { cn } from '@/lib/utils'
import { ChevronRightIcon } from '@/ui/icons'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length === 0) return null
  return (
    <nav aria-label="Breadcrumb" className={cn('', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-organic-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRightIcon className="w-4 h-4 text-organic-stone" aria-hidden />}
            {item.href ? (
              <a href={item.href} className="text-organic-sage hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-organic-ink font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
