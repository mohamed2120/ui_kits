import { type ReactNode } from 'react'

export interface PermissionGateProps {
  /** If false, children are hidden (or fallback shown) */
  allow: boolean
  children: ReactNode
  /** Optional content when not allowed (e.g. disabled button or message) */
  fallback?: ReactNode
}

/**
 * Hide or replace content when user doesn't have permission.
 * Use with permissions from auth context (e.g. canApprove, canEditPR).
 */
export function PermissionGate({ allow, children, fallback = null }: PermissionGateProps) {
  if (!allow) return <>{fallback}</>
  return <>{children}</>
}
