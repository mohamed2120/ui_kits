import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { Select } from '@/ui/Select'

export interface ReminderComposerProps {
  /** Recipient type: approver or vendor */
  recipientType?: 'approver' | 'vendor'
  onSend?: (params: { to: string; subject: string; body: string }) => void
  className?: string
}

const templates = [
  { value: '', label: 'Custom' },
  { value: 'approval_reminder', label: 'Approval reminder' },
  { value: 'vendor_followup', label: 'Vendor follow-up' },
]

export function ReminderComposer({
  recipientType = 'approver',
  onSend,
  className,
}: ReminderComposerProps) {
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [template, setTemplate] = useState('')

  const applyTemplate = (v: string) => {
    setTemplate(v)
    if (v === 'approval_reminder') {
      setSubject('Reminder: Approval pending')
      setBody('Please review and approve the pending request at your earliest convenience.')
    } else if (v === 'vendor_followup') {
      setSubject('Follow-up: Order status')
      setBody('Could you please provide an update on the delivery status?')
    }
  }

  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardHeader>
        <CardTitle className="text-base">Send reminder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Select
          label="Template"
          options={templates}
          value={template}
          onChange={(e) => applyTemplate(e.target.value)}
          aria-label="Email template"
        />
        <Input
          label={recipientType === 'approver' ? 'Approver email' : 'Vendor email'}
          type="email"
          placeholder="email@example.com"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          aria-label="To"
        />
        <Input
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-label="Subject"
        />
        <div>
          <label className="block text-sm font-medium text-organic-ink mb-1.5">Message</label>
          <textarea
            className="w-full rounded-lg border border-organic-border bg-organic-paper px-3 py-2 text-sm min-h-[80px] focus-ring"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Email body..."
            aria-label="Message"
          />
        </div>
        <Button
          size="sm"
          onClick={() => onSend?.({ to, subject, body })}
          disabled={!to.trim() || !subject.trim()}
        >
          Send reminder
        </Button>
      </CardContent>
    </Card>
  )
}
