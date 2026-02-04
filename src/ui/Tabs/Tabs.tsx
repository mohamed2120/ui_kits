import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
  type KeyboardEvent,
  type HTMLAttributes,
} from 'react'
import { cn } from '@/lib/utils'

type TabsContextValue = {
  value: string
  onValueChange: (v: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('Tabs components must be used within Tabs')
  return ctx
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (value: string) => void
  defaultValue?: string
  children: ReactNode
}

export function Tabs({
  value: controlledValue,
  onValueChange,
  defaultValue,
  className,
  children,
  ...props
}: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? '')
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internal
  const onChange = useCallback(
    (v: string) => {
      if (!isControlled) setInternal(v)
      onValueChange(v)
    },
    [isControlled, onValueChange]
  )
  return (
    <TabsContext.Provider value={{ value, onValueChange: onChange }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'line' | 'pill'
}

export function TabsList({
  className,
  variant = 'line',
  children,
  ...props
}: TabsListProps) {
  return (
    <div
      role="tablist"
      aria-label="Tabs"
      className={cn(
        'inline-flex gap-1 p-1 rounded-organic-lg',
        variant === 'line' && 'border-b border-organic-border',
        variant === 'pill' && 'bg-organic-sand',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: TabsTriggerProps) {
  const { value: selected, onValueChange } = useTabs()
  const isSelected = selected === value

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onValueChange(value)
    }
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => onValueChange(value)}
      onKeyDown={handleKeyDown}
      className={cn(
        'px-4 py-2.5 text-sm font-medium rounded-organic transition-colors focus-ring',
        isSelected
          ? 'bg-organic-sage text-white'
          : 'text-organic-muted hover:text-organic-ink hover:bg-organic-sand/50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

export function TabsContent({
  value,
  className,
  children,
  ...props
}: TabsContentProps) {
  const { value: selected } = useTabs()
  if (selected !== value) return null
  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={cn('pt-4 focus:outline-none', className)}
      {...props}
    >
      {children}
    </div>
  )
}
