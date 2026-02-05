/**
 * Procurement formatters: Money (SAR/AED), DateTime
 */

export type CurrencyCode = 'SAR' | 'AED' | 'USD'

const currencySymbols: Record<CurrencyCode, string> = {
  SAR: 'ر.س',
  AED: 'د.إ',
  USD: '$',
}

export function formatMoney(
  amount: number,
  currency: CurrencyCode = 'SAR',
  options?: { compact?: boolean; decimals?: number }
): string {
  const symbol = currencySymbols[currency]
  const decimals = options?.decimals ?? 2
  if (options?.compact && Math.abs(amount) >= 1000) {
    const k = amount / 1000
    return `${symbol} ${k.toFixed(1)}k`
  }
  const value = new Intl.NumberFormat('en-SA', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount)
  return `${symbol} ${value}`
}

export function formatDateTime(
  date: string | Date,
  options?: 'date' | 'time' | 'datetime' | 'relative'
): string {
  const d = typeof date === 'string' ? new Date(date) : date
  if (options === 'date') {
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  }
  if (options === 'time') {
    return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  }
  if (options === 'relative') {
    const now = new Date()
    const diffMs = now.getTime() - d.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return formatDateTime(d, 'date')
  }
  return d.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
