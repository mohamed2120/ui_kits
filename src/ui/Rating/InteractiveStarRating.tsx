import { cn } from '@/lib/utils'
import { StarIcon, StarFilledIcon } from '@/ui/icons'

export interface InteractiveStarRatingProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  onChange?: (value: number) => void
  disabled?: boolean
  className?: string
}

export function InteractiveStarRating({
  value,
  max = 5,
  size = 'md',
  onChange,
  disabled,
  className,
}: InteractiveStarRatingProps) {
  const sizeClass = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' }[size]
  const rounded = Math.round(value)

  return (
    <div
      className={cn('inline-flex gap-0.5', disabled && 'opacity-60 pointer-events-none', className)}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label="Rating"
    >
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1
        const filled = starValue <= rounded
        return (
          <button
            key={i}
            type="button"
            disabled={disabled}
            onClick={() => onChange?.(starValue)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                e.preventDefault()
                onChange?.(Math.min(max, rounded + 1))
              }
              if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                e.preventDefault()
                onChange?.(Math.max(0, rounded - 1))
              }
            }}
            className="p-0.5 rounded focus:outline-none focus:ring-2 focus:ring-organic-sage focus:ring-offset-1"
          >
            {filled ? (
              <StarFilledIcon className={cn(sizeClass, 'text-amber-400')} />
            ) : (
              <StarIcon className={cn(sizeClass, 'text-amber-200')} />
            )}
          </button>
        )
      })}
    </div>
  )
}
