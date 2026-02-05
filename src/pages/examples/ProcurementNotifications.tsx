import { NotificationCenter, ReminderComposer } from '@/ui/procurement'
import { sampleNotifications } from '@/data/procurementData'

export function ProcurementNotifications() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Approvals & reminders</h1>
        <p className="text-organic-muted mt-1 text-sm">Approval requests, reminders</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <NotificationCenter
          notifications={sampleNotifications}
          onMarkRead={(id) => console.log('Mark read', id)}
          onClearAll={() => {}}
        />
        <ReminderComposer recipientType="approver" onSend={(p) => console.log('Send', p)} />
      </div>
    </div>
  )
}
