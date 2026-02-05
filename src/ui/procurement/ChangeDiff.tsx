import { cn } from '@/lib/utils'

export interface ChangeDiffItem {
  field: string
  before: string | number
  after: string | number
}

export interface ChangeDiffProps {
  changes: ChangeDiffItem[]
  className?: string
}

export function ChangeDiff({ changes, className }: ChangeDiffProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {changes.map((c) => (
        <div
          key={c.field}
          className="flex flex-wrap items-baseline gap-2 rounded-lg border border-organic-border bg-organic-sand/30 px-3 py-2 text-sm"
        >
          <span className="font-medium text-organic-ink shrink-0">{c.field}</span>
          <span className="line-through text-organic-muted">{String(c.before)}</span>
          <span className="text-organic-muted">→</span>
          <span className="text-emerald-700 font-medium">{String(c.after)}</span>
        </div>
      ))}
    </div>
  )
}
