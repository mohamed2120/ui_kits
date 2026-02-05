import { Table } from '@/ui/Table'
import { StockLevel, type StockStatus } from './StockLevel'
import { PriceDisplay } from './PriceDisplay'
import { CategoryChip } from './CategoryChip'
import { StarRating } from '@/ui/Rating'
import type { CurrencyCode } from '@/lib/procurement/formatters'

export interface ProductRow {
  id: string
  name: string
  sku: string
  category?: string
  price: number
  compareAt?: number
  currency?: CurrencyCode
  stockStatus: StockStatus
  quantity?: number
  rating?: number
  reviewCount?: number
}

export interface ProductTableProps {
  products: ProductRow[]
  sortKey?: string | null
  sortDir?: 'asc' | 'desc' | null
  onSort?: (key: string) => void
  className?: string
}

export function ProductTable({
  products,
  sortKey,
  sortDir,
  onSort,
  className,
}: ProductTableProps) {
  const columns = [
    { id: 'name', header: 'Product', accessor: (r: ProductRow) => r.name, sortable: true },
    { id: 'sku', header: 'SKU', accessor: (r: ProductRow) => <span className="font-mono text-xs">{r.sku}</span> },
    { id: 'category', header: 'Category', accessor: (r: ProductRow) => r.category ? <CategoryChip label={r.category} /> : '—' },
    { id: 'rating', header: 'Rating', accessor: (r: ProductRow) => r.rating != null ? <StarRating value={r.rating} reviewCount={r.reviewCount} size="sm" /> : '—' },
    { id: 'price', header: 'Price', accessor: (r: ProductRow) => <PriceDisplay amount={r.price} compareAt={r.compareAt} currency={r.currency} size="sm" />, sortable: true },
    { id: 'stock', header: 'Stock', accessor: (r: ProductRow) => <StockLevel status={r.stockStatus} quantity={r.quantity} />, sortable: true },
  ]
  return (
    <Table<ProductRow>
      columns={columns}
      data={products}
      sortKey={sortKey}
      sortDir={sortDir}
      onSort={onSort}
      keyExtractor={(r) => r.id}
      className={className}
    />
  )
}
