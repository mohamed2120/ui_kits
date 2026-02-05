/**
 * Procurement status model: colors + labels in one place
 */

export type DocStatus =
  | 'draft'
  | 'pending_approval'
  | 'approved'
  | 'rejected'
  | 'sent_back'
  | 'po_issued'
  | 'ordered'
  | 'shipped'
  | 'partial_received'
  | 'received'
  | 'closed'
  | 'cancelled'

export type ApprovalStepStatus = 'pending' | 'approved' | 'rejected' | 'skipped'

export const docStatusConfig: Record<
  DocStatus,
  { label: string; variant: 'default' | 'success' | 'warning' | 'danger' | 'outline' }
> = {
  draft: { label: 'Draft', variant: 'outline' },
  pending_approval: { label: 'Pending Approval', variant: 'warning' },
  approved: { label: 'Approved', variant: 'success' },
  rejected: { label: 'Rejected', variant: 'danger' },
  sent_back: { label: 'Sent Back', variant: 'warning' },
  po_issued: { label: 'PO Issued', variant: 'success' },
  ordered: { label: 'Ordered', variant: 'default' },
  shipped: { label: 'Shipped', variant: 'default' },
  partial_received: { label: 'Partial Received', variant: 'warning' },
  received: { label: 'Received', variant: 'success' },
  closed: { label: 'Closed', variant: 'default' },
  cancelled: { label: 'Cancelled', variant: 'danger' },
}

export const approvalStepStatusConfig: Record<
  ApprovalStepStatus,
  { label: string; variant: 'default' | 'success' | 'warning' | 'danger' }
> = {
  pending: { label: 'Pending', variant: 'warning' },
  approved: { label: 'Approved', variant: 'success' },
  rejected: { label: 'Rejected', variant: 'danger' },
  skipped: { label: 'Skipped', variant: 'default' },
}
