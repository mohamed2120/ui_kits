import { type HTMLAttributes, type ThHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface Column<T> {
  id: string
  header: string
  accessor?: keyof T | ((row: T) => React.ReactNode)
  sortable?: boolean
  className?: string
}

export type SortDirection = 'asc' | 'desc' | null

export interface TableProps<T> extends HTMLAttributes<HTMLTableElement> {
  columns: Column<T>[]
  data: T[]
  sortKey?: string | null
  sortDir?: SortDirection
  onSort?: (key: string) => void
  keyExtractor: (row: T) => string
}

export function Table<T>({
  columns,
  data,
  sortKey,
  sortDir,
  onSort,
  keyExtractor,
  className,
  ...props
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-organic-lg border border-organic-border">
      <table
        className={cn('w-full caption-bottom text-sm', className)}
        role="table"
        {...props}
      >
        <thead>
          <tr className="border-b border-organic-border bg-organic-sand/50">
            {columns.map((col) => (
              <th
                key={col.id}
                scope="col"
                className={cn(
                  'h-12 px-4 text-left align-middle font-medium text-organic-ink',
                  col.sortable && 'cursor-pointer select-none focus-ring rounded',
                  col.className
                )}
                onClick={() => col.sortable && onSort?.(col.id)}
                onKeyDown={(e) => {
                  if (col.sortable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault()
                    onSort?.(col.id)
                  }
                }}
                tabIndex={col.sortable ? 0 : undefined}
                aria-sort={
                  col.sortable && sortKey === col.id
                    ? sortDir === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : undefined
                }
              >
                <span className="flex items-center gap-1">
                  {col.header}
                  {col.sortable && sortKey === col.id && (
                    <span className="text-organic-muted" aria-hidden>
                      {sortDir === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={keyExtractor(row)}
              className="border-b border-organic-border transition-colors hover:bg-organic-sand/30"
            >
              {columns.map((col) => (
                <td
                  key={col.id}
                  className={cn('p-4 align-middle text-organic-ink', col.className)}
                >
                  {typeof col.accessor === 'function'
                    ? col.accessor(row)
                    : col.accessor
                      ? String((row as Record<string, unknown>)[col.accessor as string] ?? '')
                      : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const TableHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={cn('', className)} {...props} />
)

export const TableBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn('', className)} {...props} />
)

export const TableRow = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cn('', className)} {...props} />
)

export const TableHead = ({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className={cn('h-12 px-4 text-left align-middle font-medium', className)} {...props} />
)

export const TableCell = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableCellElement>) => (
  <td className={cn('p-4 align-middle', className)} {...props} />
)
