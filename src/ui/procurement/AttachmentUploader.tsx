import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'
import { UploadIcon, XIcon } from '@/ui/icons'

export interface AttachmentFile {
  id: string
  name: string
  size?: number
  url?: string
}

export interface AttachmentUploaderProps {
  files?: AttachmentFile[]
  onFilesChange?: (files: AttachmentFile[]) => void
  accept?: string
  maxSize?: number
  className?: string
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function AttachmentUploader({
  files = [],
  onFilesChange,
  accept = '.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg',
  maxSize = 10 * 1024 * 1024,
  className,
}: AttachmentUploaderProps) {
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const addFiles = (fileList: FileList | null) => {
    if (!fileList || !onFilesChange) return
    const newFiles: AttachmentFile[] = Array.from(fileList).map((f) => ({
      id: `file-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name: f.name,
      size: f.size,
    }))
    onFilesChange([...files, ...newFiles])
  }

  const removeFile = (id: string) => {
    onFilesChange?.(files.filter((f) => f.id !== id))
  }

  return (
    <div className={cn('space-y-3', className)}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          addFiles(e.dataTransfer.files)
        }}
        className={cn(
          'flex flex-col items-center justify-center rounded-xl border-2 border-dashed py-8 px-4 transition-colors cursor-pointer',
          dragOver ? 'border-organic-sage bg-organic-sage/5' : 'border-organic-stone bg-organic-sand/30 hover:bg-organic-sand/50'
        )}
      >
        <UploadIcon className="w-8 h-8 text-organic-muted mb-2" />
        <p className="text-sm font-medium text-organic-ink">Drag & drop or click to upload</p>
        <p className="text-xs text-organic-muted mt-0.5">
          {accept} (max {formatSize(maxSize)})
        </p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          className="sr-only"
          onChange={(e) => addFiles(e.target.files)}
          aria-label="Upload files"
        />
      </div>
      {files.length > 0 && (
        <ul className="space-y-1">
          {files.map((f) => (
            <li
              key={f.id}
              className="flex items-center justify-between rounded-lg border border-organic-border bg-organic-paper px-3 py-2 text-sm"
            >
              <span className="truncate text-organic-ink">{f.name}</span>
              <div className="flex items-center gap-2 shrink-0">
                {f.size != null && (
                  <span className="text-organic-muted text-xs">{formatSize(f.size)}</span>
                )}
                <IconButton
                  variant="ghost"
                  size="sm"
                  aria-label={`Remove ${f.name}`}
                  onClick={() => removeFile(f.id)}
                >
                  <XIcon />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
