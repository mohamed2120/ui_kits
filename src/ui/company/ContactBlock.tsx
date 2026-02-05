import { cn } from '@/lib/utils'

export interface ContactItem {
  type: 'address' | 'phone' | 'email' | 'website'
  label?: string
  value: string
  href?: string
}

export interface ContactBlockProps {
  items: ContactItem[]
  className?: string
}

const typeLabels: Record<ContactItem['type'], string> = {
  address: 'Address',
  phone: 'Phone',
  email: 'Email',
  website: 'Website',
}

export function ContactBlock({ items, className }: ContactBlockProps) {
  if (items.length === 0) return null
  return (
    <dl className={cn('space-y-3', className)}>
      {items.map((item, i) => {
        const label = item.label ?? typeLabels[item.type]
        const href = item.href ?? (item.type === 'email' ? `mailto:${item.value}` : undefined)
          ?? (item.type === 'phone' ? `tel:${item.value.replace(/\s/g, '')}` : undefined)
          ?? (item.type === 'website' ? (item.value.startsWith('http') ? item.value : `https://${item.value}`) : undefined)
        const content = href ? (
          <a href={href} className="text-organic-sage hover:underline break-all">
            {item.value}
          </a>
        ) : (
          <span className="text-organic-ink">{item.value}</span>
        )
        return (
          <div key={i}>
            <dt className="text-xs font-medium text-organic-muted uppercase tracking-wider">
              {label}
            </dt>
            <dd className="mt-0.5 text-sm">{content}</dd>
          </div>
        )
      })}
    </dl>
  )
}
