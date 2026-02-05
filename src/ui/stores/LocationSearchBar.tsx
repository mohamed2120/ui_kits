import { cn } from '@/lib/utils'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { SearchIcon } from '@/ui/icons'

export interface LocationSearchBarProps {
  /** Search query (e.g. city, address, code) */
  value?: string
  onChange?: (value: string) => void
  onSearch?: () => void
  placeholder?: string
  className?: string
}

export function LocationSearchBar({
  value = '',
  onChange,
  onSearch,
  placeholder = 'City, address, or store code...',
  className,
}: LocationSearchBarProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <div className="relative flex-1 min-w-[200px]">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-organic-muted" />
        <Input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch?.()}
          className="pl-9"
          aria-label="Search locations"
        />
      </div>
      {onSearch && (
        <Button variant="primary" size="sm" onClick={onSearch}>
          Search
        </Button>
      )}
    </div>
  )
}
