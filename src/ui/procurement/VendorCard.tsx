import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'

export interface VendorContact {
  name: string
  role?: string
  email?: string
  phone?: string
}

export interface VendorCardProps {
  name: string
  code?: string
  contacts?: VendorContact[]
  performanceBadge?: 'good' | 'average' | 'poor' | null
  className?: string
}

const performanceConfig = {
  good: { label: 'Good', variant: 'success' as const },
  average: { label: 'Average', variant: 'warning' as const },
  poor: { label: 'Poor', variant: 'danger' as const },
}

export function VendorCard({
  name,
  code,
  contacts = [],
  performanceBadge,
  className,
}: VendorCardProps) {
  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-base">{name}</CardTitle>
          {code && (
            <span className="text-sm text-organic-muted">({code})</span>
          )}
          {performanceBadge && (
            <Badge variant={performanceConfig[performanceBadge].variant} size="sm">
              {performanceConfig[performanceBadge].label}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {contacts.length > 0 && (
          <ul className="space-y-2 text-sm">
            {contacts.map((c, i) => (
              <li key={i} className="flex flex-wrap gap-x-2">
                <span className="font-medium text-organic-ink">{c.name}</span>
                {c.role && <span className="text-organic-muted">— {c.role}</span>}
                {c.email && (
                  <a href={`mailto:${c.email}`} className="text-organic-sage hover:underline">
                    {c.email}
                  </a>
                )}
                {c.phone && <span className="text-organic-muted">{c.phone}</span>}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
