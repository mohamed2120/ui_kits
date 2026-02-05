import { cn } from '@/lib/utils'
import { MapPinIcon } from '@/ui/icons'

export interface MapPlaceholderProps {
  /** Optional title above the map area */
  title?: string
  /** Hint text (e.g. "Integrate Google Maps or Mapbox") */
  hint?: string
  /** Height of the placeholder area */
  height?: string
  className?: string
}

export function MapPlaceholder({
  title = 'Map',
  hint = 'Embed your map (e.g. Google Maps, Mapbox) here',
  height = '320px',
  className,
}: MapPlaceholderProps) {
  return (
    <div className={cn('rounded-xl border border-organic-border overflow-hidden bg-organic-sand/50', className)}>
      {title && (
        <div className="px-4 py-2 border-b border-organic-border bg-organic-sand/70">
          <h3 className="text-sm font-semibold text-organic-ink">{title}</h3>
        </div>
      )}
      <div
        className="flex flex-col items-center justify-center text-organic-muted"
        style={{ minHeight: height }}
      >
        <MapPinIcon className="w-12 h-12 mb-3 opacity-60" />
        <p className="text-sm font-medium text-organic-ink/80">{title}</p>
        {hint && <p className="text-xs mt-1 max-w-xs text-center">{hint}</p>}
      </div>
    </div>
  )
}
