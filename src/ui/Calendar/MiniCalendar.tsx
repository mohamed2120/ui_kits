import { useState } from 'react'
import { cn } from '@/lib/utils'

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export interface MiniCalendarEvent {
  date: string
  title?: string
  color?: string
}

export interface MiniCalendarProps {
  events?: MiniCalendarEvent[]
  onSelectDate?: (date: string) => void
  className?: string
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function MiniCalendar({ events = [], onSelectDate, className }: MiniCalendarProps) {
  const [viewDate] = useState(() => new Date())
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const monthName = viewDate.toLocaleString('default', { month: 'short' })
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthDays = new Date(year, month, 0).getDate()

  const eventsByDate = events.reduce<Record<string, MiniCalendarEvent[]>>((acc, e) => {
    if (!acc[e.date]) acc[e.date] = []
    acc[e.date].push(e)
    return acc
  }, {})

  const prevPadding = Array.from({ length: firstDay }, (_, i) => prevMonthDays - firstDay + i + 1)
  const current = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const total = prevPadding.length + current.length
  const nextCount = total <= 35 ? 35 - total : 42 - total

  const today = new Date()
  const todayKey = `${year}-${pad(month + 1)}-${pad(today.getDate())}`

  const dateKey = (day: number) => `${year}-${pad(month + 1)}-${pad(day)}`

  return (
    <div
      className={cn(
        'rounded-lg border border-organic-border bg-organic-paper p-2 w-[200px]',
        className
      )}
    >
      <p className="text-center text-xs font-semibold text-organic-ink mb-2">
        {monthName} {year}
      </p>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-organic-muted">
        {WEEKDAYS_SHORT.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5 mt-1">
        {prevPadding.map((d) => (
          <span key={`p-${d}`} className="aspect-square rounded p-0.5 text-organic-muted/50">
            {d}
          </span>
        ))}
        {current.map((day) => {
          const key = dateKey(day)
          const dayEvents = eventsByDate[key] ?? []
          const isToday = key === todayKey
          return (
            <button
              key={day}
              type="button"
              onClick={() => onSelectDate?.(key)}
              className={cn(
                'aspect-square rounded p-0.5 text-[11px] transition-colors focus-ring',
                isToday && 'bg-organic-sage text-white',
                !isToday && 'text-organic-ink hover:bg-organic-sand',
                dayEvents.length > 0 && !isToday && 'font-semibold'
              )}
            >
              {day}
              {dayEvents.length > 0 && (
                <span
                  className="block w-1 h-0.5 rounded-full mx-auto mt-0.5"
                  style={{ backgroundColor: dayEvents[0]?.color ?? '#6366F1' }}
                />
              )}
            </button>
          )
        })}
        {Array.from({ length: nextCount }, (_, i) => (
          <span key={`n-${i}`} className="aspect-square rounded p-0.5 text-organic-muted/50">
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  )
}
