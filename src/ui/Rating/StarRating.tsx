import { cn } from '@/lib/utils'
import { StarIcon, StarFilledIcon } from '@/ui/icons'

export interface StarRatingProps {
  /** Value from 0 to 5 (can be decimal e.g. 4.5) */
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  reviewCount?: number
  className?: string
}

export function StarRating({
  value,
  max = 5,
  size = 'md',
  showValue,
  reviewCount,
  className,
}: StarRatingProps) {
  const clamped = Math.min(max, Math.max(0, value))
  const full = Math.floor(clamped)
  const half = clamped - full >= 0.25 && clamped - full < 0.75
  const sizeClass = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' }[size]
  const textSize = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' }[size]

  return (
    <div className={cn('inline-flex items-center gap-1.5', className)} role="img" aria-label={`Rating: ${clamped} out of ${max}`}>
      <div className="flex gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          if (i < full) {
            return <StarFilledIcon key={i} className={cn(sizeClass, 'text-amber-400')} aria-hidden />
          }
          if (i === full && half) {
            return (
              <span key={i} className={cn('relative inline-block', sizeClass)} aria-hidden>
                <StarIcon className={cn(sizeClass, 'text-amber-200')} />
                <span className="absolute left-0 top-0 overflow-hidden" style={{ width: '50%' }}>
                  <StarFilledIcon className={cn(sizeClass, 'text-amber-400')} />
                </span>
              </span>
            )
          }
          return <StarIcon key={i} className={cn(sizeClass, 'text-amber-200')} aria-hidden />
        })}
      </div>
      {showValue && (
        <span className={cn('font-medium text-organic-ink', textSize)}>{clamped.toFixed(1)}</span>
      )}
      {reviewCount != null && (
        <span className={cn('text-organic-muted', textSize)}>({reviewCount})</span>
      )}
    </div>
  )
}
