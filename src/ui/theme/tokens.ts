/**
 * OrganicDash UI – Design tokens (modern palette)
 * Clean, contemporary: slate neutrals + indigo primary, subtle radius, flat shadows
 */

export const tokens = {
  colors: {
    cream: '#F8FAFC',
    sand: '#F1F5F9',
    stone: '#E2E8F0',
    sage: '#6366F1',
    mint: '#D1FAE5',
    forest: '#10B981',
    ocean: '#818CF8',
    lavender: '#A5B4FC',
    blossom: '#FEE2E2',
    clay: '#FEF3C7',
    ink: '#0F172A',
    paper: '#FFFFFF',
    surface: '#FFFFFF',
    border: '#E2E8F0',
    muted: '#64748B',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
  },
  shadow: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.05)',
    md: '0 4px 12px rgba(15, 23, 42, 0.06)',
    lg: '0 10px 40px rgba(15, 23, 42, 0.08)',
  },
  gradient: {
    subtle: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    card: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
    accent: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  },
} as const

export type ThemeMode = 'light' | 'dark'

export const themeCSSVars = (mode: ThemeMode = 'light') => {
  const isDark = mode === 'dark'
  return {
    '--organic-cream': isDark ? '#0F172A' : tokens.colors.cream,
    '--organic-sand': isDark ? '#1E293B' : tokens.colors.sand,
    '--organic-stone': isDark ? '#334155' : tokens.colors.stone,
    '--organic-sage': tokens.colors.sage,
    '--organic-mint': tokens.colors.mint,
    '--organic-forest': tokens.colors.forest,
    '--organic-ocean': tokens.colors.ocean,
    '--organic-lavender': tokens.colors.lavender,
    '--organic-blossom': tokens.colors.blossom,
    '--organic-clay': tokens.colors.clay,
    '--organic-ink': isDark ? '#F1F5F9' : tokens.colors.ink,
    '--organic-paper': isDark ? '#1E293B' : tokens.colors.paper,
    '--organic-surface': isDark ? '#1E293B' : tokens.colors.surface,
    '--organic-border': isDark ? '#334155' : tokens.colors.border,
    '--organic-muted': isDark ? '#94A3B8' : tokens.colors.muted,
    '--organic-radius': tokens.radius.sm,
    '--organic-radius-lg': tokens.radius.lg,
    '--organic-radius-xl': tokens.radius.xl,
    '--organic-shadow': tokens.shadow.sm,
    '--organic-shadow-md': tokens.shadow.md,
    '--organic-shadow-lg': tokens.shadow.lg,
  } as Record<string, string>
}
