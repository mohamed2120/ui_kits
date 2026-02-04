import { useState, type ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'
import { MenuIcon } from '@/ui/icons'

export interface NavItem {
  to: string
  label: string
  icon?: ReactNode
}

export interface AppShellProps {
  title?: string
  navItems?: NavItem[]
  children: ReactNode
  topbarRight?: ReactNode
  sidebarFooter?: ReactNode
}

export function AppShell({
  title = 'OrganicDash',
  navItems = [],
  children,
  topbarRight,
  sidebarFooter,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  return (
    <div className="flex min-h-screen bg-organic-cream">
      {/* Sidebar */}
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
          <ul className="space-y-1" role="list">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={cn(
                      'flex items-center gap-3 rounded-organic-lg px-3 py-2.5 text-sm font-medium transition-colors focus-ring',
                      'text-organic-ink hover:bg-organic-sand',
                      isActive && 'bg-organic-sage/10 text-organic-sage font-medium'
                    )}
                  >
                    {item.icon && (
                      <span className="flex shrink-0 [&>svg]:w-5 [&>svg]:h-5 text-organic-muted">
                        {item.icon}
                      </span>
                    )}
                    <span className="truncate">{item.label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        {sidebarFooter && (
          <div className="p-3 border-t border-organic-border">{sidebarFooter}</div>
        )}
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Topbar */}
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

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
