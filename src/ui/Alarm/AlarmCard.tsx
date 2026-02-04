import { cn } from '@/lib/utils'
import { Switch } from '@/ui/Switch'
import { IconButton } from '@/ui/IconButton'
import { TrashIcon } from '@/ui/icons'
import type { AlarmItem } from '@/data/sampleData'

const repeatLabels: Record<AlarmItem['repeat'], string> = {
  once: 'Once',
  daily: 'Daily',
  weekdays: 'Weekdays',
  weekly: 'Weekly',
}

export interface AlarmCardProps {
  alarm: AlarmItem
  onToggle: (id: string, enabled: boolean) => void
  onDelete?: (id: string) => void
  className?: string
}

export function AlarmCard({ alarm, onToggle, onDelete, className }: AlarmCardProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 rounded-xl border border-organic-border bg-organic-paper p-4 shadow-sm transition-shadow hover:shadow-md',
        !alarm.enabled && 'opacity-70',
        className
      )}
    >
      <div className="flex-1 min-w-0">
        <p className="text-2xl font-semibold tabular-nums text-organic-ink">{alarm.time}</p>
        <p className="text-sm font-medium text-organic-ink truncate">{alarm.label}</p>
        <p className="text-xs text-organic-muted">{repeatLabels[alarm.repeat]}</p>
      </div>
      <Switch
        checked={alarm.enabled}
        onChange={(e) => onToggle(alarm.id, e.target.checked)}
        aria-label={`Toggle ${alarm.label}`}
      />
      {onDelete && (
        <IconButton
          variant="ghost"
          size="sm"
          aria-label={`Delete ${alarm.label}`}
          onClick={() => onDelete(alarm.id)}
        >
          <TrashIcon />
        </IconButton>
      )}
    </div>
  )
}
