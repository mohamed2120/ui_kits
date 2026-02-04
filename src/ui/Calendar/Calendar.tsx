import { useState } from 'react'
import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export interface CalendarEvent {
  date: string
  title: string
  color?: string
}

export interface CalendarProps {
  events?: CalendarEvent[]
  onSelectDate?: (date: string) => void
  className?: string
}

export function Calendar({ events = [], onSelectDate, className }: CalendarProps) {
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), 1)
  })

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const monthName = viewDate.toLocaleString('default', { month: 'long' })

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthDays = new Date(year, month, 0).getDate()

  const eventsByDate = events.reduce<Record<string, CalendarEvent[]>>((acc, e) => {
    const d = e.date
    if (!acc[d]) acc[d] = []
    acc[d].push(e)
    return acc
  }, {} as Record<string, CalendarEvent[]>)

  const prevPadding = Array.from({ length: firstDay }, (_, i) => prevMonthDays - firstDay + i + 1)
  const current = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const totalCells = prevPadding.length + current.length
  const nextPadding = totalCells <= 35 ? 35 - totalCells : 42 - totalCells

  const pad = (n: number) => String(n).padStart(2, '0')
  const dateKey = (day: number, isPrev?: boolean, isNext?: boolean) => {
    if (isPrev) return `${year}-${pad(month)}-${pad(day)}`
    if (isNext) return `${year}-${pad(month + 2)}-${pad(day)}`
    return `${year}-${pad(month + 1)}-${pad(day)}`
  }

  const goPrev = () => setViewDate(new Date(year, month - 1, 1))
  const goNext = () => setViewDate(new Date(year, month + 1, 1))

  const today = new Date()
  const todayKey = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`

  return (
    <div className={cn('rounded-xl border border-organic-border bg-organic-paper overflow-hidden', className)}>
      <div className="flex items-center justify-between border-b border-organic-border px-4 py-3">
        <h3 className="font-semibold text-organic-ink">
          {monthName} {year}
        </h3>
        <div className="flex items-center gap-1">
          <IconButton variant="ghost" size="sm" aria-label="Previous month" onClick={goPrev}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton variant="ghost" size="sm" aria-label="Next month" onClick={goNext}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-organic-muted">
          {WEEKDAYS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {prevPadding.map((day) => (
            <div
              key={`p-${day}`}
              className="aspect-square rounded-lg p-1 text-center text-sm text-organic-muted/60"
            >
              {day}
            </div>
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
                  'aspect-square rounded-lg p-1 text-center text-sm transition-colors focus-ring',
                  isToday && 'bg-organic-sage text-white font-medium',
                  !isToday && 'text-organic-ink hover:bg-organic-sand',
                  dayEvents.length > 0 && !isToday && 'font-medium'
                )}
              >
                {day}
                {dayEvents.length > 0 && (
                  <div className="mt-0.5 flex justify-center gap-0.5">
                    {dayEvents.slice(0, 2).map((e) => (
                      <span
                        key={e.title}
                        className="inline-block h-1 w-1 rounded-full"
                        style={{ backgroundColor: e.color ?? '#6366F1' }}
                        title={e.title}
                      />
                    ))}
                  </div>
                )}
              </button>
            )
          })}
          {Array.from({ length: nextPadding }, (_, i) => (
            <div
              key={`n-${i}`}
              className="aspect-square rounded-lg p-1 text-center text-sm text-organic-muted/60"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
