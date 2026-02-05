import { useState } from 'react'
import { Card, CardContent } from '@/ui/Card'
import { SmartFilterBar, WorkflowSection } from '@/ui/procurement'
import { Badge } from '@/ui/Badge'

const STATUS_OPTIONS = ['Draft', 'Pending Approval', 'Approved', 'Rejected']

export function ProcurementFilters() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [dateRange, setDateRange] = useState<{ from: string; to: string }>({ from: '', to: '' })
  const [branch, setBranch] = useState('')
  const [costCenter, setCostCenter] = useState('')
  const [vendor, setVendor] = useState('')
  const [amountRange, setAmountRange] = useState<{ min: string; max: string }>({ min: '', max: '' })
  const [myApprovalsOnly, setMyApprovalsOnly] = useState(false)

  const handleClear = () => {
    setSelectedStatuses([])
    setDateRange({ from: '', to: '' })
    setBranch('')
    setCostCenter('')
    setVendor('')
    setAmountRange({ min: '', max: '' })
    setMyApprovalsOnly(false)
  }

  const hasActiveFilters =
    selectedStatuses.length > 0 ||
    dateRange.from ||
    dateRange.to ||
    branch ||
    costCenter ||
    vendor ||
    amountRange.min ||
    amountRange.max ||
    myApprovalsOnly

  const activeFilterLabels: string[] = []
  if (selectedStatuses.length > 0) activeFilterLabels.push(`Status: ${selectedStatuses.join(', ')}`)
  if (dateRange.from || dateRange.to) activeFilterLabels.push(`Date: ${dateRange.from || '…'} – ${dateRange.to || '…'}`)
  if (branch) activeFilterLabels.push(`Branch: ${branch}`)
  if (costCenter) activeFilterLabels.push(`Cost center: ${costCenter}`)
  if (vendor) activeFilterLabels.push(`Vendor: ${vendor}`)
  if (amountRange.min || amountRange.max) activeFilterLabels.push(`Amount: ${amountRange.min || '—'} – ${amountRange.max || '—'}`)
  if (myApprovalsOnly) activeFilterLabels.push('My approvals only')

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Filters</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Procurement filter bar: status, date range, branch, cost center, vendor, amount, and my approvals
        </p>
      </div>

      <Card variant="elevated">
        <CardContent className="pt-6">
          <WorkflowSection
            title="Filter bar"
            description="Narrow PR/PO lists by status, date, branch, cost center, vendor, amount, or approvals"
          >
            <SmartFilterBar
              statuses={STATUS_OPTIONS}
              selectedStatuses={selectedStatuses}
              onStatusChange={setSelectedStatuses}
              dateRange={dateRange}
              onDateRangeChange={(from, to) => setDateRange({ from, to })}
              branch={branch}
              onBranchChange={setBranch}
              costCenter={costCenter}
              onCostCenterChange={setCostCenter}
              vendor={vendor}
              onVendorChange={setVendor}
              amountRange={amountRange}
              onAmountRangeChange={(min, max) => setAmountRange({ min, max })}
              myApprovalsOnly={myApprovalsOnly}
              onMyApprovalsOnlyChange={setMyApprovalsOnly}
              onClear={handleClear}
            />
          </WorkflowSection>

          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-organic-border">
              <p className="text-sm font-medium text-organic-ink mb-2">Active filters</p>
              <div className="flex flex-wrap gap-2">
                {activeFilterLabels.map((label) => (
                  <Badge key={label} variant="secondary" size="sm">
                    {label}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-organic-muted mt-3">
                Use this bar above a PR/PO list; results update when filters change.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
