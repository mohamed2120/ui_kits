import { useState } from 'react'
import { Card, CardContent } from '@/ui/Card'
import { Avatar } from '@/ui/Avatar'
import { MailIcon } from '@/ui/icons'
import { cn } from '@/lib/utils'

const sampleEmails = [
  { id: '1', from: 'Support', fromEmail: 'support@company.com', subject: 'Your ticket #1024 was updated', date: '10:30 AM', unread: true },
  { id: '2', from: 'Finance', fromEmail: 'finance@company.com', subject: 'Invoice INV-2025-042', date: 'Yesterday', unread: true },
  { id: '3', from: 'Ahmed Ali', fromEmail: 'ahmed@team.com', subject: 'Re: Project timeline', date: 'Mon', unread: false },
]

export function EmailDemo() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = sampleEmails.find((e) => e.id === selectedId)

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Email</h1>
        <p className="text-organic-muted mt-1 text-sm">Inbox and messages</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card variant="elevated" className="md:col-span-1">
          <CardContent className="p-0">
            <ul className="divide-y divide-organic-border">
              {sampleEmails.map((email) => (
                <li key={email.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(email.id)}
                    className={cn(
                      'w-full text-left px-4 py-3 hover:bg-organic-sand/50 transition-colors',
                      selectedId === email.id && 'bg-organic-sage/10'
                    )}
                  >
                    <div className="flex gap-3">
                      <Avatar fallback={email.from.slice(0, 2)} size="sm" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className={cn('text-sm font-medium truncate', email.unread && 'text-organic-ink')}>
                            {email.from}
                          </span>
                          {email.unread && <span className="w-2 h-2 rounded-full bg-organic-sage shrink-0" />}
                        </div>
                        <p className="text-sm text-organic-muted truncate">{email.subject}</p>
                        <p className="text-xs text-organic-muted mt-0.5">{email.date}</p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card variant="elevated" className="md:col-span-2">
          <CardContent className="p-4">
            {selected ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar fallback={selected.from.slice(0, 2)} size="md" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-organic-ink">{selected.from}</p>
                    <p className="text-sm text-organic-muted">{selected.fromEmail}</p>
                    <p className="text-lg font-medium text-organic-ink mt-2">{selected.subject}</p>
                    <p className="text-xs text-organic-muted mt-1">{selected.date}</p>
                  </div>
                </div>
                <div className="border-t border-organic-border pt-4">
                  <p className="text-sm text-organic-ink">
                    This is the email body. Use this page to show inbox and email view.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-organic-muted">
                <MailIcon className="w-12 h-12 mb-3 opacity-50" />
                <p className="text-sm">Select an email from the list</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
