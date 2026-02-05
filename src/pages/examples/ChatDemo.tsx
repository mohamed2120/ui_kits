import { useState } from 'react'
import { Card, CardContent } from '@/ui/Card'
import { Avatar } from '@/ui/Avatar'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { cn } from '@/lib/utils'

const sampleConversations = [
  { id: '1', name: 'Sara Mohamed', lastMessage: 'Thanks for the update!', time: '10:30', unread: 2 },
  { id: '2', name: 'Omar Hassan', lastMessage: 'Can we schedule a call?', time: 'Yesterday', unread: 0 },
  { id: '3', name: 'Support', lastMessage: 'Your ticket has been resolved', time: 'Mon', unread: 0 },
]

const sampleMessages = [
  { id: '1', from: 'them', text: 'Hi, do you have the report ready?', time: '10:28' },
  { id: '2', from: 'me', text: 'Yes, I’ll send it in a few minutes.', time: '10:29' },
  { id: '3', from: 'them', text: 'Thanks for the update!', time: '10:30' },
]

export function ChatDemo() {
  const [selectedId, setSelectedId] = useState<string | null>('1')
  const [input, setInput] = useState('')
  const selected = sampleConversations.find((c) => c.id === selectedId)

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Chat</h1>
        <p className="text-organic-muted mt-1 text-sm">Conversations and messages</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 h-[480px]">
        <Card variant="elevated" className="md:col-span-1 overflow-hidden flex flex-col">
          <CardContent className="p-0 flex-1 overflow-y-auto">
            <ul className="divide-y divide-organic-border">
              {sampleConversations.map((conv) => (
                <li key={conv.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(conv.id)}
                    className={cn(
                      'w-full text-left px-4 py-3 hover:bg-organic-sand/50 transition-colors flex items-center gap-3',
                      selectedId === conv.id && 'bg-organic-sage/10'
                    )}
                  >
                    <Avatar fallback={conv.name.slice(0, 2)} size="md" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-organic-ink text-sm truncate">{conv.name}</span>
                        <span className="text-xs text-organic-muted shrink-0">{conv.time}</span>
                      </div>
                      <p className="text-sm text-organic-muted truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <span className="inline-flex rounded-full bg-organic-sage text-white text-xs px-1.5 mt-0.5">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card variant="elevated" className="md:col-span-2 flex flex-col overflow-hidden">
          {selected ? (
            <>
              <div className="px-4 py-3 border-b border-organic-border flex items-center gap-3">
                <Avatar fallback={selected.name.slice(0, 2)} size="sm" />
                <span className="font-medium text-organic-ink">{selected.name}</span>
              </div>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
                {sampleMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      'flex',
                      msg.from === 'me' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] rounded-xl px-4 py-2 text-sm',
                        msg.from === 'me'
                          ? 'bg-organic-sage text-white'
                          : 'bg-organic-sand text-organic-ink'
                      )}
                    >
                      <p>{msg.text}</p>
                      <p className={cn('text-xs mt-0.5', msg.from === 'me' ? 'text-white/80' : 'text-organic-muted')}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="p-3 border-t border-organic-border flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && setInput('')}
                  aria-label="Message"
                />
                <Button size="sm" onClick={() => setInput('')}>
                  Send
                </Button>
              </div>
            </>
          ) : (
            <CardContent className="flex-1 flex items-center justify-center text-organic-muted text-sm">
              Select a conversation
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}
