import { cn } from '@/lib/utils'
import { Input } from '@/ui/Input'
import { Select } from '@/ui/Select'
import { Checkbox } from '@/ui/Checkbox'
import { Button } from '@/ui/Button'
import { DataToolbar, DataToolbarGroup, DataToolbarLabel } from '@/ui/DataToolbar'

export interface SmartFilterBarProps {
  dateRange?: { from: string; to: string }
  onDateRangeChange?: (from: string, to: string) => void
  statuses?: string[]
  selectedStatuses?: string[]
  onStatusChange?: (selected: string[]) => void
  branch?: string
  onBranchChange?: (v: string) => void
  costCenter?: string
  onCostCenterChange?: (v: string) => void
  vendor?: string
  onVendorChange?: (v: string) => void
  amountRange?: { min: string; max: string }
  onAmountRangeChange?: (min: string, max: string) => void
  myApprovalsOnly?: boolean
  onMyApprovalsOnlyChange?: (v: boolean) => void
  onClear?: () => void
  className?: string
}

export function SmartFilterBar({
  dateRange,
  onDateRangeChange,
  statuses = [],
  selectedStatuses = [],
  onStatusChange,
  branch,
  onBranchChange,
  costCenter,
  onCostCenterChange,
  vendor,
  onVendorChange,
  amountRange,
  onAmountRangeChange,
  myApprovalsOnly = false,
  onMyApprovalsOnlyChange,
  onClear,
  className,
}: SmartFilterBarProps) {
  return (
    <DataToolbar className={cn('flex-wrap', className)}>
      {onDateRangeChange && (
        <DataToolbarGroup>
          <DataToolbarLabel>Date range</DataToolbarLabel>
          <Input
            type="date"
            value={dateRange?.from ?? ''}
            onChange={(e) => onDateRangeChange(e.target.value, dateRange?.to ?? '')}
            className="w-36"
            aria-label="From date"
          />
          <span className="text-organic-muted">–</span>
          <Input
            type="date"
            value={dateRange?.to ?? ''}
            onChange={(e) => onDateRangeChange(dateRange?.from ?? '', e.target.value)}
            className="w-36"
            aria-label="To date"
          />
        </DataToolbarGroup>
      )}
      {statuses.length > 0 && onStatusChange && (
        <DataToolbarGroup>
          <DataToolbarLabel>Status</DataToolbarLabel>
          <Select
            options={statuses.map((s) => ({ value: s, label: s }))}
            value={selectedStatuses[0] ?? ''}
            onChange={(e) => onStatusChange(e.target.value ? [e.target.value] : [])}
            placeholder="All"
            className="w-40"
            aria-label="Status"
          />
        </DataToolbarGroup>
      )}
      {onBranchChange && (
        <DataToolbarGroup>
          <DataToolbarLabel>Branch</DataToolbarLabel>
          <Input
            placeholder="Branch / Plant"
            value={branch ?? ''}
            onChange={(e) => onBranchChange(e.target.value)}
            className="w-32"
            aria-label="Branch"
          />
        </DataToolbarGroup>
      )}
      {onCostCenterChange && (
        <DataToolbarGroup>
          <DataToolbarLabel>Cost center</DataToolbarLabel>
          <Input
            placeholder="Cost center"
            value={costCenter ?? ''}
            onChange={(e) => onCostCenterChange(e.target.value)}
            className="w-32"
            aria-label="Cost center"
          />
        </DataToolbarGroup>
      )}
      {onVendorChange && (
        <DataToolbarGroup>
          <DataToolbarLabel>Vendor</DataToolbarLabel>
          <Input
            placeholder="Vendor"
            value={vendor ?? ''}
            onChange={(e) => onVendorChange(e.target.value)}
            className="w-36"
            aria-label="Vendor"
          />
        </DataToolbarGroup>
      )}
      {onAmountRangeChange && (
        <DataToolbarGroup>
          <DataToolbarLabel>Amount</DataToolbarLabel>
          <Input
            type="number"
            placeholder="Min"
            value={amountRange?.min ?? ''}
            onChange={(e) =>
              onAmountRangeChange(e.target.value, amountRange?.max ?? '')
            }
            className="w-24"
            aria-label="Min amount"
          />
          <Input
            type="number"
            placeholder="Max"
            value={amountRange?.max ?? ''}
            onChange={(e) =>
              onAmountRangeChange(amountRange?.min ?? '', e.target.value)
            }
            className="w-24"
            aria-label="Max amount"
          />
        </DataToolbarGroup>
      )}
      {onMyApprovalsOnlyChange && (
        <DataToolbarGroup>
          <Checkbox
            label="My approvals"
            checked={myApprovalsOnly}
            onChange={(e) => onMyApprovalsOnlyChange(e.target.checked)}
          />
        </DataToolbarGroup>
      )}
      {onClear && (
        <DataToolbarGroup>
          <Button variant="ghost" size="sm" onClick={onClear}>
            Clear
          </Button>
        </DataToolbarGroup>
      )}
    </DataToolbar>
  )
}
