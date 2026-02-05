import { useState, useEffect, type ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'
import { MenuIcon, ChevronRightIcon } from '@/ui/icons'

export interface NavItem {
  to?: string
  label: string
  icon?: ReactNode
  badge?: string
  badgeVariant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  children?: NavItem[]
}

export interface NavSection {
  label: string
  hot?: boolean
  items: NavItem[]
}

export interface NavConfig {
  dashboard?: NavItem
  sections: NavSection[]
}

export interface AppShellProps {
  title?: string
  /** New: grouped nav with Dashboard, APPS, CUSTOM, COMPONENTS */
  navConfig?: NavConfig
  /** Legacy: flat list (used if navConfig is not set) */
  navItems?: NavItem[]
  children: ReactNode
  topbarRight?: ReactNode
  sidebarFooter?: ReactNode
}

const badgeStyles = {
  default: 'bg-organic-sand text-organic-ink',
  success: 'bg-emerald-500 text-white',
  warning: 'bg-amber-500 text-white',
  danger: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
}

function NavItemLink({
  item,
  isActive,
  depth = 0,
}: {
  item: NavItem
  isActive: boolean
  depth?: number
}) {
  const hasChildren = item.children && item.children.length > 0
  const location = useLocation()
  const childActive = hasChildren && item.children!.some((c) => c.to && location.pathname.startsWith(c.to))
  const [open, setOpen] = useState(!!childActive)
  useEffect(() => {
    if (childActive) setOpen(true)
  }, [childActive])

  if (hasChildren) {
    return (
      <div className="space-y-0.5">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={cn(
            'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-ring',
            'text-organic-ink hover:bg-organic-sand',
            childActive && 'bg-organic-sage/10 text-organic-sage',
            depth > 0 && 'pl-6'
          )}
        >
          {item.icon && (
            <span className="flex shrink-0 [&>svg]:w-5 [&>svg]:h-5 text-organic-muted">
              {item.icon}
            </span>
          )}
          <span className="truncate flex-1 text-left">{item.label}</span>
          {item.badge && (
            <span className={cn('rounded px-1.5 py-0.5 text-xs font-medium', badgeStyles[item.badgeVariant ?? 'default'])}>
              {item.badge}
            </span>
          )}
          <ChevronRightIcon
            className={cn('w-4 h-4 shrink-0 transition-transform', open && 'rotate-90')}
          />
        </button>
        {open && (
          <div className="space-y-0.5">
            {item.children!.map((child) => (
              <li key={child.to ?? child.label}>
                {child.to ? (
                  <NavLink
                    to={child.to}
                    className={({ isActive: active }) =>
                      cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 pl-9 text-sm font-medium transition-colors focus-ring',
                        'text-organic-ink hover:bg-organic-sand',
                        active && 'bg-organic-sage/10 text-organic-sage'
                      )
                    }
                  >
                    {child.icon && (
                      <span className="flex shrink-0 [&>svg]:w-4 [&>svg]:h-4 text-organic-muted">
                        {child.icon}
                      </span>
                    )}
                    <span className="truncate">{child.label}</span>
                  </NavLink>
                ) : (
                  <span className="flex items-center gap-3 rounded-lg px-3 py-2 pl-9 text-sm text-organic-muted">
                    {child.label}
                  </span>
                )}
              </li>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (!item.to) return null
  return (
    <NavLink
      to={item.to}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-ring',
        'text-organic-ink hover:bg-organic-sand',
        isActive && 'bg-organic-sage/10 text-organic-sage font-medium',
        depth > 0 && 'pl-6'
      )}
    >
      {item.icon && (
        <span className="flex shrink-0 [&>svg]:w-5 [&>svg]:h-5 text-organic-muted">
          {item.icon}
        </span>
      )}
      <span className="truncate flex-1">{item.label}</span>
      {item.badge && (
        <span className={cn('rounded px-1.5 py-0.5 text-xs font-medium', badgeStyles[item.badgeVariant ?? 'default'])}>
          {item.badge}
        </span>
      )}
    </NavLink>
  )
}

export function AppShell({
  title = 'OrganicDash',
  navConfig,
  navItems = [],
  children,
  topbarRight,
  sidebarFooter,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const useGrouped = navConfig && navConfig.sections.length > 0

  return (
    <div className="flex min-h-screen bg-organic-cream">
      <aside
        className={cn(
          'flex flex-col border-r border-organic-border bg-organic-paper shadow-organic transition-all duration-300 z-40',
          sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
        )}
        aria-label="Main navigation"
      >
        <div className="flex h-14 items-center gap-2 px-4 border-b border-organic-border shrink-0">
          <span className="font-semibold text-organic-ink truncate">{title}</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {useGrouped ? (
            <ul className="space-y-6" role="list">
              {navConfig!.dashboard && (
                <li>
                  <NavLink
                    to={navConfig.dashboard.to ?? '/'}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-ring',
                      'text-organic-ink hover:bg-organic-sand',
                      location.pathname === (navConfig.dashboard.to ?? '/') && 'bg-organic-sage/10 text-organic-sage'
                    )}
                  >
                    {navConfig.dashboard.icon && (
                      <span className="flex shrink-0 [&>svg]:w-5 [&>svg]:h-5 text-organic-muted">
                        {navConfig.dashboard.icon}
                      </span>
                    )}
                    <span className="truncate flex-1">{navConfig.dashboard.label}</span>
                    {navConfig.dashboard.badge && (
                      <span className={cn('rounded px-1.5 py-0.5 text-xs font-medium', badgeStyles[navConfig.dashboard.badgeVariant ?? 'success'])}>
                        {navConfig.dashboard.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              )}
              {navConfig!.sections.map((section) => (
                <li key={section.label}>
                  <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-organic-muted">
                    {section.label}
                    {section.hot && (
                      <span className="ml-2 inline-flex rounded bg-blue-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
                        Hot
                      </span>
                    )}
                  </p>
                  <ul className="mt-1 space-y-0.5" role="list">
                    {section.items.map((item) => {
                      const isActive = item.to ? location.pathname === item.to : false
                      return (
                        <li key={item.to ?? item.label}>
                          <NavItemLink item={item} isActive={isActive} />
                        </li>
                      )
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-1" role="list">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to
                return (
                  <li key={item.to}>
                    <NavItemLink item={item} isActive={isActive} />
                  </li>
                )
              })}
            </ul>
          )}
        </nav>
        {sidebarFooter && (
          <div className="p-3 border-t border-organic-border">{sidebarFooter}</div>
        )}
      </aside>

      <div className="flex flex-1 flex-col min-w-0">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-organic-border bg-organic-paper/95 backdrop-blur px-4 shrink-0">
          <IconButton
            variant="ghost"
            size="md"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            onClick={() => setSidebarOpen((o) => !o)}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex-1 min-w-0" />
          {topbarRight}
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
