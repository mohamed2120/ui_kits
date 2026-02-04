import React, { createContext, useContext, useMemo, useState } from 'react'
import type { ThemeMode } from './tokens'
import { themeCSSVars } from './tokens'

type ThemeContextValue = {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
  children,
  defaultMode = 'light',
}: {
  children: React.ReactNode
  defaultMode?: ThemeMode
}) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode)
  const value = useMemo(() => ({ mode, setMode }), [mode])
  const style = useMemo(() => themeCSSVars(mode), [mode])

  return (
    <ThemeContext.Provider value={value}>
      <div className="min-h-screen bg-organic-cream text-organic-ink" style={style}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
