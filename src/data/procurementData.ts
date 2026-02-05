import type { DocStatus } from '@/lib/procurement/statusModel'
import type { ApprovalStep } from '@/ui/procurement/ApprovalFlow'
import type { AuditEvent } from '@/ui/procurement/AuditTimeline'
import type { LineItem } from '@/ui/procurement/LineItemsTable'
import type { ProcurementNotification } from '@/ui/procurement/NotificationCenter'
import type { VendorQuote } from '@/ui/procurement/ThreeQuoteCompare'

export interface SamplePR {
  id: string
  number: string
  status: DocStatus
  requester: string
  plantBranch: string
  costCenter: string
  totalAmount: number
  createdAt: string
  targetDate: string
  completedDate?: string | null
  items: LineItem[]
}

export const samplePRs: SamplePR[] = [
  {
    id: '1',
    number: 'PR-2025-001',
    status: 'pending_approval',
    requester: 'Ahmed Ali',
    plantBranch: 'Riyadh HQ',
    costCenter: 'CC-100',
    totalAmount: 42500,
    createdAt: '2025-02-01',
    targetDate: '2025-02-10',
    items: [
      { id: '1', description: 'Laptops Dell XPS 15', quantity: 5, uom: 'EA', unitPrice: 4500, discount: 5 },
      { id: '2', description: 'Monitors 27"', quantity: 10, uom: 'EA', unitPrice: 1200 },
    ],
  },
  {
    id: '2',
    number: 'PR-2025-002',
    status: 'approved',
    requester: 'Sara Mohamed',
    plantBranch: 'Jeddah Branch',
    costCenter: 'CC-200',
    totalAmount: 15800,
    createdAt: '2025-02-03',
    targetDate: '2025-02-12',
    completedDate: '2025-02-05',
    items: [
      { id: '1', description: 'Office chairs', quantity: 20, uom: 'EA', unitPrice: 650, discount: 10 },
    ],
  },
]

export const sampleApprovalSteps: ApprovalStep[] = [
  { id: '1', role: 'Requester Manager', name: 'Omar Hassan', status: 'approved', timestamp: '2025-02-02T10:00:00' },
  { id: '2', role: 'Finance', name: 'Layla Ahmed', status: 'pending' },
  { id: '3', role: 'Director', name: 'Khalid Ibrahim', status: 'pending' },
]

export const sampleAuditEvents: AuditEvent[] = [
  { id: '1', type: 'created', label: 'PR created', timestamp: '2025-02-01T09:00:00', user: 'Ahmed Ali' },
  { id: '2', type: 'item_added', label: 'Line item added', timestamp: '2025-02-01T09:15:00', user: 'Ahmed Ali', details: 'Laptops Dell XPS 15' },
  { id: '3', type: 'approved', label: 'Approved by Requester Manager', timestamp: '2025-02-02T10:00:00', user: 'Omar Hassan' },
  { id: '4', type: 'field_changed', label: 'Cost center updated', timestamp: '2025-02-02T10:05:00', user: 'Ahmed Ali', changeDiff: [{ field: 'Cost center', before: 'CC-90', after: 'CC-100' }] },
]

export const sampleComments = [
  { id: '1', author: 'Omar Hassan', content: 'Please add business justification for the 5% discount.', timestamp: '2025-02-02T09:30:00' },
  { id: '2', author: 'Ahmed Ali', content: 'Vendor agreed to 5% for bulk order. Updated in notes.', timestamp: '2025-02-02T11:00:00' },
]

export const sampleVendor = {
  name: 'Tech Supplies Co',
  code: 'V-1001',
  contacts: [
    { name: 'Ali Vendor', role: 'Account Manager', email: 'ali@techsupplies.sa', phone: '+966 50 123 4567' },
  ],
  performanceBadge: 'good' as const,
}

export const sampleNotifications: ProcurementNotification[] = [
  { id: '1', type: 'approval_request', title: 'PR-2025-001 needs your approval', description: 'Ahmed Ali', timestamp: '2025-02-04T08:00:00', read: false },
  { id: '2', type: 'overdue', title: 'PR-2025-003 overdue (2 days)', timestamp: '2025-02-03T12:00:00', read: true },
  { id: '3', type: 'vendor_update', title: 'Vendor V-1001 updated quotation', timestamp: '2025-02-02T15:00:00', read: false },
]

export const samplePO = {
  number: 'PO-2025-042',
  prNumber: 'PR-2025-001',
  status: 'ordered' as DocStatus,
  vendor: sampleVendor.name,
  totalAmount: 42500,
  currency: 'SAR' as const,
  orderedDate: '2025-02-05',
  expectedDelivery: '2025-02-20',
  deliveryStages: {
    ordered: '2025-02-05',
    shipped: '2025-02-15',
  },
  currentStage: 'shipped' as const,
}

export const sampleGRNLines = [
  { itemCode: 'LP-001', description: 'Laptops Dell XPS 15', orderedQty: 5, receivedQty: 5, uom: 'EA' },
  { itemCode: 'MN-001', description: 'Monitors 27"', orderedQty: 10, receivedQty: 8, uom: 'EA', exception: 'short_received' as const, exceptionQty: 2, notes: '2 units backordered' },
]

export const sampleVendorQuotes: VendorQuote[] = [
  {
    vendorName: 'Tech Supplies Co',
    total: 40375,
    validUntil: '2025-03-01',
    selected: true,
    items: [
      { description: 'Laptops Dell XPS 15', qty: 5, uom: 'EA', unitPrice: 4275, total: 21375 },
      { description: 'Monitors 27"', qty: 10, uom: 'EA', unitPrice: 1900, total: 19000 },
    ],
  },
  {
    vendorName: 'Office Gear SA',
    total: 43500,
    validUntil: '2025-03-15',
    items: [
      { description: 'Laptops Dell XPS 15', qty: 5, uom: 'EA', unitPrice: 4500, total: 22500 },
      { description: 'Monitors 27"', qty: 10, uom: 'EA', unitPrice: 2100, total: 21000 },
    ],
  },
  {
    vendorName: 'Gulf IT Solutions',
    total: 39800,
    validUntil: '2025-02-28',
    items: [
      { description: 'Laptops Dell XPS 15', qty: 5, uom: 'EA', unitPrice: 4200, total: 21000 },
      { description: 'Monitors 27"', qty: 10, uom: 'EA', unitPrice: 1880, total: 18800 },
    ],
  },
]
