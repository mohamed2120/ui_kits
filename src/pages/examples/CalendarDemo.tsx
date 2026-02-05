import { useState } from 'react'
import { Calendar, MiniCalendar, AgendaCalendar, WeekStripCalendar } from '@/ui/Calendar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import { sampleCalendarEvents, sampleAgendaEvents } from '@/data/sampleData'

export function CalendarDemo() {
  const [selected, setSelected] = useState<string | null>(null)

  const monthEvents = sampleCalendarEvents.map((e) => ({
    date: e.date,
    title: e.title,
    color: e.color,
  }))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Calendar</h1>
        <p className="text-organic-muted mt-1 text-sm">Month, mini, week strip, and agenda views</p>
      </div>

      {/* Month view (default) */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Month calendar</CardTitle>
          <CardDescription>Full month with prev/next and event dots</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-md">
            <Calendar
              events={monthEvents}
              onSelectDate={(date) => setSelected(date)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Mini + Week strip side by side */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Mini calendar</CardTitle>
            <CardDescription>Compact for sidebars or pickers</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <MiniCalendar
              events={monthEvents}
              onSelectDate={(date) => setSelected(date)}
            />
          </CardContent>
        </Card>
        <Card variant="elevated" className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Week strip</CardTitle>
            <CardDescription>One week at a time, quick navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <WeekStripCalendar
              events={monthEvents}
              onSelectDate={(date) => setSelected(date)}
            />
          </CardContent>
        </Card>
      </div>

      {/* Agenda */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Agenda calendar</CardTitle>
          <CardDescription>List of days with events and optional time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-sm">
            <AgendaCalendar events={sampleAgendaEvents} days={7} />
          </div>
        </CardContent>
      </Card>

      {/* Selected day */}
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Selected day</CardTitle>
        </CardHeader>
        <CardContent>
          {selected ? (
            <p className="text-sm text-organic-ink">
              <span className="font-medium">{selected}</span>
              {monthEvents.filter((e) => e.date === selected).length > 0 && (
                <span className="block mt-2 text-organic-muted">
                  {monthEvents.filter((e) => e.date === selected).map((e) => e.title).join(', ')}
                </span>
              )}
            </p>
          ) : (
            <p className="text-sm text-organic-muted">Click a day on any calendar above</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
