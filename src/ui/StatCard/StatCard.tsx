import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  description?: string
  trend?: { value: number; label: string }
  variant?: 'default' | 'accent' | 'muted'
}

const variantStyles = {
  default: 'bg-organic-paper border border-organic-border/80',
  accent: 'bg-organic-paper border border-organic-sage/30 bg-gradient-to-br from-organic-sage/5 to-transparent',
  muted: 'bg-organic-sand/50 border border-organic-border/60',
}

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      title,
      value,
      description,
      trend,
      variant = 'default',
      ...props
    },
    ref
  ) => (
    <Card ref={ref} variant="elevated" className={cn(variantStyles[variant], 'rounded-xl', className)} {...props}>
      <CardContent className="pt-5 pb-5">
        <p className="text-sm font-medium text-organic-muted">{title}</p>
        <p className="mt-2 text-2xl font-semibold text-organic-ink tracking-tight">
          {value}
        </p>
        {description && (
          <p className="mt-1 text-sm text-organic-muted">{description}</p>
        )}
        {trend && (
          <p
            className={cn(
              'mt-2 text-sm font-medium',
              trend.value >= 0 ? 'text-organic-forest' : 'text-organic-blossom'
            )}
          >
            {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.label}
          </p>
        )}
      </CardContent>
    </Card>
  )
)
StatCard.displayName = 'StatCard'
