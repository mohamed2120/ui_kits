import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { StockLevel, type StockStatus } from './StockLevel'
import { PriceDisplay } from './PriceDisplay'
import { CategoryChip } from './CategoryChip'
import { StarRating } from '@/ui/Rating'
import type { CurrencyCode } from '@/lib/procurement/formatters'

export interface ProductCardCompactProps {
  name: string
  sku?: string
  price: number
  compareAt?: number
  currency?: CurrencyCode
  stockStatus: StockStatus
  quantity?: number
  category?: string
  imageUrl?: string | null
  rating?: number
  reviewCount?: number
  onClick?: () => void
  className?: string
}

export function ProductCardCompact({
  name,
  sku,
  price,
  compareAt,
  currency = 'SAR',
  stockStatus,
  quantity,
  category,
  imageUrl,
  rating,
  reviewCount,
  onClick,
  className,
}: ProductCardCompactProps) {
  return (
    <Card
      variant="elevated"
      className={cn(
        'overflow-hidden',
        onClick && 'cursor-pointer hover:ring-2 hover:ring-organic-sage/30 transition-shadow',
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="flex gap-4 p-3">
          <div className="w-20 h-20 shrink-0 rounded-lg bg-organic-sand/50 overflow-hidden flex items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-organic-muted text-xs">No image</span>
            )}
          </div>
          <div className="min-w-0 flex-1 flex flex-col justify-center gap-1">
            {category && <CategoryChip label={category} />}
            <h3 className="font-medium text-organic-ink text-sm line-clamp-1">{name}</h3>
            {sku && <p className="text-xs text-organic-muted font-mono">{sku}</p>}
            {rating != null && <StarRating value={rating} reviewCount={reviewCount} size="sm" />}
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <PriceDisplay amount={price} compareAt={compareAt} currency={currency} size="sm" />
              <StockLevel status={stockStatus} quantity={quantity} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
