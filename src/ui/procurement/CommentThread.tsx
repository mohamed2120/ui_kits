import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'
import { formatDateTime } from '@/lib/procurement/formatters'

export interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
  mentions?: string[]
  attachments?: { name: string; url?: string }[]
}

export interface CommentThreadProps {
  comments: Comment[]
  onAddComment?: (content: string) => void
  placeholder?: string
  className?: string
}

export function CommentThread({
  comments,
  onAddComment,
  placeholder = 'Add a comment... (use @ to mention)',
  className,
}: CommentThreadProps) {
  const [newComment, setNewComment] = useState('')

  const handleSubmit = () => {
    if (!newComment.trim()) return
    onAddComment?.(newComment.trim())
    setNewComment('')
  }

  return (
    <div className={cn('space-y-4', className)}>
      <ul className="space-y-3">
        {comments.map((c) => (
          <li
            key={c.id}
            className="rounded-xl border border-organic-border bg-organic-paper p-3 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-organic-ink text-sm">{c.author}</span>
              <span className="text-xs text-organic-muted">
                {formatDateTime(c.timestamp, 'relative')}
              </span>
            </div>
            <p className="text-sm text-organic-ink mt-1 whitespace-pre-wrap">{c.content}</p>
            {c.mentions && c.mentions.length > 0 && (
              <p className="text-xs text-organic-sage mt-1">
                @{c.mentions.join(', ')}
              </p>
            )}
            {c.attachments && c.attachments.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {c.attachments.map((a) => (
                  <a
                    key={a.name}
                    href={a.url}
                    className="text-xs text-organic-sage hover:underline"
                  >
                    📎 {a.name}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      {onAddComment && (
        <div className="flex gap-2">
          <Input
            placeholder={placeholder}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSubmit()}
            className="flex-1"
            aria-label="New comment"
          />
          <Button size="sm" onClick={handleSubmit} disabled={!newComment.trim()}>
            Send
          </Button>
        </div>
      )}
    </div>
  )
}
