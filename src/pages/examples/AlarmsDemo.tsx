import { useState } from 'react'
import { AlarmCard } from '@/ui/Alarm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import { Button } from '@/ui/Button'
import { PlusIcon, AlarmIcon } from '@/ui/icons'
import { sampleAlarms, type AlarmItem } from '@/data/sampleData'

export function AlarmsDemo() {
  const [alarms, setAlarms] = useState<AlarmItem[]>(sampleAlarms)

  const handleToggle = (id: string, enabled: boolean) => {
    setAlarms((prev) => prev.map((a) => (a.id === id ? { ...a, enabled } : a)))
  }

  const handleDelete = (id: string) => {
    setAlarms((prev) => prev.filter((a) => a.id !== id))
  }

  return (
    <div className="space-y-8 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Alarms</h1>
        <p className="text-organic-muted mt-1 text-sm">Set and manage alarms</p>
      </div>

      <Card variant="elevated">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <AlarmIcon className="w-5 h-5" />
              Upcoming
            </CardTitle>
            <CardDescription>Your alarms</CardDescription>
          </div>
          <Button size="sm" leftIcon={<PlusIcon />}>
            Add alarm
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {alarms.length === 0 ? (
            <p className="text-sm text-organic-muted py-6 text-center">No alarms. Add one above.</p>
          ) : (
            alarms.map((alarm) => (
              <AlarmCard
                key={alarm.id}
                alarm={alarm}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </CardContent>
      </Card>
    </div>
  )
}
