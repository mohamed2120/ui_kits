import { useState } from 'react'
import { cn } from '@/lib/utils'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export interface WeekStripEvent {
  date: string
  title?: string
  color?: string
}

export interface WeekStripCalendarProps {
  events?: WeekStripEvent[]
  onSelectDate?: (date: string) => void
  className?: string
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function WeekStripCalendar({
  events = [],
  onSelectDate,
  className,
}: WeekStripCalendarProps) {
  const [weekStart, setWeekStart] = useState(() => {
    const d = new Date()
    const day = d.getDay()
    d.setDate(d.getDate() - day)
    d.setHours(0, 0, 0, 0)
    return d
  })

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart)
    d.setDate(d.getDate() + i)
    return d
  })

  const eventsByDate = events.reduce<Record<string, WeekStripEvent[]>>((acc, e) => {
    if (!acc[e.date]) acc[e.date] = []
    acc[e.date].push(e)
    return acc
  }, {})

  const today = new Date()
  const todayKey = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`

  const goPrev = () => {
    const d = new Date(weekStart)
    d.setDate(d.getDate() - 7)
    setWeekStart(d)
  }

  const goNext = () => {
    const d = new Date(weekStart)
    d.setDate(d.getDate() + 7)
    setWeekStart(d)
  }

  return (
    <div
      className={cn(
        'rounded-xl border border-organic-border bg-organic-paper overflow-hidden',
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-organic-border px-3 py-2">
        <button
          type="button"
          onClick={goPrev}
          className="p-1.5 rounded-lg text-organic-muted hover:bg-organic-sand hover:text-organic-ink focus-ring"
          aria-label="Previous week"
        >
          ←
        </button>
        <span className="text-sm font-medium text-organic-ink">
          {weekStart.toLocaleDateString('default', { month: 'short' })} week
        </span>
        <button
          type="button"
          onClick={goNext}
          className="p-1.5 rounded-lg text-organic-muted hover:bg-organic-sand hover:text-organic-ink focus-ring"
          aria-label="Next week"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 divide-x divide-organic-border">
        {weekDays.map((d) => {
          const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
          const dayEvents = eventsByDate[key] ?? []
          const isToday = key === todayKey
          const dayName = WEEKDAYS[d.getDay()]
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelectDate?.(key)}
              className={cn(
                'flex flex-col items-center py-3 px-2 transition-colors focus-ring',
                isToday && 'bg-organic-sage/10 border-b-2 border-organic-sage',
                !isToday && 'hover:bg-organic-sand/50'
              )}
            >
              <span className="text-[10px] font-medium text-organic-muted uppercase">
                {dayName}
              </span>
              <span
                className={cn(
                  'mt-1 text-lg font-semibold',
                  isToday ? 'text-organic-sage' : 'text-organic-ink'
                )}
              >
                {d.getDate()}
              </span>
              {dayEvents.length > 0 && (
                <div className="mt-1.5 flex gap-0.5">
                  {dayEvents.slice(0, 3).map((e, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: e.color ?? '#6366F1' }}
                    />
                  ))}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
