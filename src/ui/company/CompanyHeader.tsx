import { cn } from '@/lib/utils'
import { Badge } from '@/ui/Badge'

export interface CompanyHeaderProps {
  name: string
  tagline?: string
  industry?: string
  logoUrl?: string | null
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CompanyHeader({
  name,
  tagline,
  industry,
  logoUrl,
  size = 'md',
  className,
}: CompanyHeaderProps) {
  const sizeClasses = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-5',
  }
  const logoSizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  }
  const nameSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }
  return (
    <div className={cn('flex flex-wrap items-start gap-4', sizeClasses[size], className)}>
      {logoUrl ? (
        <img
          src={logoUrl}
          alt=""
          className={cn('rounded-xl object-cover bg-organic-sand/50 shrink-0', logoSizes[size])}
        />
      ) : (
        <div
          className={cn(
            'rounded-xl bg-organic-sage/20 flex items-center justify-center shrink-0 text-organic-sage font-semibold',
            logoSizes[size],
            size === 'sm' && 'text-lg',
            size === 'md' && 'text-xl',
            size === 'lg' && 'text-2xl'
          )}
          aria-hidden
        >
          {name.slice(0, 1)}
        </div>
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className={cn('font-bold text-organic-ink tracking-tight', nameSizes[size])}>
            {name}
          </h1>
          {industry && (
            <Badge variant="outline" size="sm">
              {industry}
            </Badge>
          )}
        </div>
        {tagline && (
          <p className="text-organic-muted text-sm mt-1">{tagline}</p>
        )}
      </div>
    </div>
  )
}
