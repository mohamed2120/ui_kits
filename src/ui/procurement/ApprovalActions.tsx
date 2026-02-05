import { useState } from 'react'
import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'
import { cn } from '@/lib/utils'

export type ApprovalActionType = 'approve' | 'reject' | 'send_back' | 'delegate'

export interface ApprovalActionsProps {
  onApprove?: (comment?: string) => void
  onReject?: (comment: string) => void
  onSendBack?: (comment: string) => void
  onDelegate?: (comment: string, delegateTo?: string) => void
  disabled?: boolean
  showDelegate?: boolean
  className?: string
}

export function ApprovalActions({
  onApprove,
  onReject,
  onSendBack,
  onDelegate,
  disabled,
  showDelegate = true,
  className,
}: ApprovalActionsProps) {
  const [comment, setComment] = useState('')
  const [showCommentFor, setShowCommentFor] = useState<ApprovalActionType | null>(null)

  const needComment = (action: ApprovalActionType) => {
    setShowCommentFor(action)
  }

  const handleReject = () => {
    if (comment.trim()) {
      onReject?.(comment)
      setComment('')
      setShowCommentFor(null)
    } else needComment('reject')
  }

  const handleSendBack = () => {
    if (comment.trim()) {
      onSendBack?.(comment)
      setComment('')
      setShowCommentFor(null)
    } else needComment('send_back')
  }

  const handleDelegate = () => {
    if (comment.trim()) {
      onDelegate?.(comment)
      setComment('')
      setShowCommentFor(null)
    } else needComment('delegate')
  }

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="success"
          size="sm"
          onClick={() => onApprove?.(comment || undefined)}
          disabled={disabled}
        >
          Approve
        </Button>
        <Button variant="danger" size="sm" onClick={handleReject} disabled={disabled}>
          Reject
        </Button>
        <Button variant="secondary" size="sm" onClick={handleSendBack} disabled={disabled}>
          Send back
        </Button>
        {showDelegate && (
          <Button variant="outline" size="sm" onClick={handleDelegate} disabled={disabled}>
            Delegate
          </Button>
        )}
      </div>
      {(showCommentFor === 'reject' || showCommentFor === 'send_back' || showCommentFor === 'delegate') && (
        <div className="rounded-lg border border-organic-border bg-organic-sand/30 p-3">
          <label className="text-sm font-medium text-organic-ink">Comment (required)</label>
          <Input
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1.5"
            aria-label="Comment"
          />
          <div className="mt-2 flex gap-2">
            <Button size="sm" variant="ghost" onClick={() => setShowCommentFor(null)}>
              Cancel
            </Button>
            {showCommentFor === 'reject' && (
              <Button size="sm" variant="danger" onClick={handleReject} disabled={!comment.trim()}>
                Reject
              </Button>
            )}
            {showCommentFor === 'send_back' && (
              <Button size="sm" variant="secondary" onClick={handleSendBack} disabled={!comment.trim()}>
                Send back
              </Button>
            )}
            {showCommentFor === 'delegate' && (
              <Button size="sm" variant="outline" onClick={handleDelegate} disabled={!comment.trim()}>
                Delegate
              </Button>
            )}
          </div>
        </div>
      )}
      {!showCommentFor && (
        <Input
          placeholder="Optional comment for Approve..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1"
          aria-label="Optional comment"
        />
      )}
    </div>
  )
}
