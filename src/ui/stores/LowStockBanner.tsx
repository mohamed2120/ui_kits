import { cn } from '@/lib/utils'

export interface LowStockBannerProps {
  message: string
  count?: number
  variant?: 'warning' | 'danger'
  onReorder?: () => void
  className?: string
}

export function LowStockBanner({
  message,
  count,
  variant = 'warning',
  onReorder,
  className,
}: LowStockBannerProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3',
        variant === 'warning' && 'border-amber-300 bg-amber-50 text-amber-900',
        variant === 'danger' && 'border-red-300 bg-red-50 text-red-900',
        className
      )}
      role="alert"
    >
      <span className="text-sm font-medium">
        {message}
        {count != null && (
          <span className="opacity-90 ml-1">({count} items)</span>
        )}
      </span>
      {onReorder && (
        <button
          type="button"
          onClick={onReorder}
          className="text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1"
        >
          Reorder
        </button>
      )}
    </div>
  )
}
