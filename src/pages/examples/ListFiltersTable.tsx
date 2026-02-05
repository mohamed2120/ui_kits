import { useState, useMemo } from 'react'
import { Table, type Column, type SortDirection } from '@/ui/Table'
import { Pagination } from '@/ui/Pagination'
import { DataToolbar, DataToolbarGroup, DataToolbarLabel } from '@/ui/DataToolbar'
import { FilterChips } from '@/ui/FilterChips'
import { Input } from '@/ui/Input'
import { Select } from '@/ui/Select'
import { Button } from '@/ui/Button'
import { Badge } from '@/ui/Badge'
import { EmptyState } from '@/ui/EmptyState'
import { InboxIcon, SearchIcon } from '@/ui/icons'
import {
  sampleOrders,
  statusOptions,
  filterChipItems as initialChips,
  type SampleOrder,
  type OrderStatus,
} from '@/data/sampleData'

const statusVariant: Record<OrderStatus, 'default' | 'success' | 'warning' | 'danger'> = {
  pending: 'warning',
  shipped: 'default',
  delivered: 'success',
  cancelled: 'danger',
}

const columns: Column<SampleOrder>[] = [
  { id: 'id', header: 'Order ID', accessor: 'id', sortable: true },
  { id: 'customer', header: 'Customer', accessor: 'customer', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', sortable: false },
  {
    id: 'amount',
    header: 'Amount',
    accessor: (row) => `$${row.amount.toFixed(2)}`,
    sortable: true,
  },
  {
    id: 'status',
    header: 'Status',
    accessor: (row) => (
      <Badge variant={statusVariant[row.status]} size="sm">
        {row.status}
      </Badge>
    ),
    sortable: true,
  },
  { id: 'date', header: 'Date', accessor: 'date', sortable: true },
]

export function ListFiltersTable() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [chips, setChips] = useState(initialChips)
  const [sortKey, setSortKey] = useState<string | null>('date')
  const [sortDir, setSortDir] = useState<SortDirection>('desc')
  const [page, setPage] = useState(1)
  const pageSize = 3

  const filtered = useMemo(() => {
    let list = [...sampleOrders]
    if (search) {
      const q = search.toLowerCase()
      list = list.filter(
        (o) =>
          o.customer.toLowerCase().includes(q) ||
          o.email.toLowerCase().includes(q) ||
          o.id.toLowerCase().includes(q)
      )
    }
    if (statusFilter) {
      list = list.filter((o) => o.status === statusFilter)
    }
    const activeChipIds = chips.filter((c) => c.active).map((c) => c.id)
    if (activeChipIds.length > 0) {
      list = list.filter((o) => activeChipIds.includes(o.status))
    }
    if (sortKey) {
      list.sort((a, b) => {
        const aVal = (a as unknown as Record<string, unknown>)[sortKey]
        const bVal = (b as unknown as Record<string, unknown>)[sortKey]
        if (aVal === bVal) return 0
        const cmp = (aVal as string | number) < (bVal as string | number) ? -1 : 1
        return sortDir === 'asc' ? cmp : -cmp
      })
    }
    return list
  }, [search, statusFilter, chips, sortKey, sortDir])

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page, pageSize])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))

  const handleSort = (key: string) => {
    setSortKey(key)
    setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
  }

  const toggleChip = (id: string) => {
    setChips((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
    )
  }

  const clearChips = () => {
    setChips((prev) => prev.map((c) => ({ ...c, active: false })))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">List & table</h1>
        <p className="text-organic-muted mt-1 text-sm">Filters, sortable table, pagination — for tickets, orders, or data tables</p>
      </div>

      <DataToolbar>
        <DataToolbarGroup>
          <DataToolbarLabel>Search</DataToolbarLabel>
          <div className="relative w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-organic-muted" />
            <Input
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
              aria-label="Search orders"
            />
          </div>
        </DataToolbarGroup>
        <DataToolbarGroup>
          <DataToolbarLabel>Status</DataToolbarLabel>
          <Select
            options={statusOptions}
            placeholder="All statuses"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter by status"
          />
        </DataToolbarGroup>
        <DataToolbarGroup>
          <Button variant="outline" size="sm">
            Export
          </Button>
        </DataToolbarGroup>
      </DataToolbar>

      <FilterChips items={chips} onToggle={toggleChip} onClear={clearChips} />

      {paginated.length === 0 ? (
        <EmptyState
          icon={<InboxIcon />}
          title="No orders found"
          description="Try adjusting your filters or search."
          action={
            <Button
              variant="secondary"
              onClick={() => {
                setSearch('')
                setStatusFilter('')
                clearChips()
              }}
            >
              Clear filters
            </Button>
          }
        />
      ) : (
        <>
          <Table
            columns={columns}
            data={paginated}
            sortKey={sortKey}
            sortDir={sortDir}
            onSort={handleSort}
            keyExtractor={(row) => row.id}
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-organic-muted">
              Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of{' '}
              {filtered.length}
            </p>
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </>
      )}
    </div>
  )
}
