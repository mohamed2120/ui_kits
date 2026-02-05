import { cn } from '@/lib/utils'

export interface CompanyStatItem {
  label: string
  value: string | number
}

export interface CompanyStatsProps {
  items: CompanyStatItem[]
  className?: string
}

export function CompanyStats({ items, className }: CompanyStatsProps) {
  if (items.length === 0) return null
  return (
    <div className={cn('flex flex-wrap gap-6', className)}>
      {items.map((item, i) => (
        <div key={i} className="text-center min-w-[4rem]">
          <p className="text-2xl font-bold text-organic-ink tabular-nums">{item.value}</p>
          <p className="text-xs text-organic-muted mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
