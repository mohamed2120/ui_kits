import { useState } from 'react'
import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'
import { ChevronLeftIcon, ChevronRightIcon } from '@/ui/icons'

export interface AgendaEvent {
  date: string
  title: string
  time?: string
  color?: string
}

export interface AgendaCalendarProps {
  events?: AgendaEvent[]
  days?: number
  className?: string
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatDate(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function formatDayLabel(date: Date) {
  return date.toLocaleDateString('default', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export function AgendaCalendar({
  events = [],
  days = 7,
  className,
}: AgendaCalendarProps) {
  const [startDate, setStartDate] = useState(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  })

  const dayDates = Array.from({ length: days }, (_, i) => {
    const d = new Date(startDate)
    d.setDate(d.getDate() + i)
    return d
  })

  const eventsByDate = dayDates.reduce<Record<string, AgendaEvent[]>>((acc, d) => {
    const key = formatDate(d)
    acc[key] = events.filter((e) => e.date === key)
    return acc
  }, {})

  const goPrev = () => {
    const d = new Date(startDate)
    d.setDate(d.getDate() - days)
    setStartDate(d)
  }

  const goNext = () => {
    const d = new Date(startDate)
    d.setDate(d.getDate() + days)
    setStartDate(d)
  }

  const todayKey = formatDate(new Date())

  return (
    <div
      className={cn(
        'rounded-xl border border-organic-border bg-organic-paper overflow-hidden',
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-organic-border px-4 py-3">
        <span className="text-sm font-semibold text-organic-ink">Agenda</span>
        <div className="flex gap-1">
          <IconButton variant="ghost" size="sm" aria-label="Previous" onClick={goPrev}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton variant="ghost" size="sm" aria-label="Next" onClick={goNext}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="divide-y divide-organic-border max-h-[320px] overflow-y-auto">
        {dayDates.map((d) => {
          const key = formatDate(d)
          const dayEvents = eventsByDate[key] ?? []
          const isToday = key === todayKey
          return (
            <div key={key} className="p-3">
              <p
                className={cn(
                  'text-xs font-medium',
                  isToday ? 'text-organic-sage' : 'text-organic-muted'
                )}
              >
                {formatDayLabel(d)}
                {isToday && ' (today)'}
              </p>
              {dayEvents.length === 0 ? (
                <p className="text-sm text-organic-muted/80 mt-1">No events</p>
              ) : (
                <ul className="mt-2 space-y-1.5">
                  {dayEvents.map((e) => (
                    <li
                      key={`${e.date}-${e.title}`}
                      className="flex items-center gap-2 rounded-lg border border-organic-border/60 bg-organic-sand/40 px-3 py-2 text-sm"
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: e.color ?? '#6366F1' }}
                      />
                      {e.time && (
                        <span className="text-organic-muted text-xs shrink-0">{e.time}</span>
                      )}
                      <span className="text-organic-ink font-medium truncate">{e.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
