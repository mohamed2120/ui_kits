import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { StockLevel, type StockStatus } from './StockLevel'
import { PriceDisplay } from './PriceDisplay'
import { CategoryChip } from './CategoryChip'
import { StarRating } from '@/ui/Rating'
import type { CurrencyCode } from '@/lib/procurement/formatters'

export interface ProductCardProps {
  name: string
  sku?: string
  price: number
  compareAt?: number
  currency?: CurrencyCode
  stockStatus: StockStatus
  quantity?: number
  category?: string
  imageUrl?: string | null
  /** 0–5, optional for display */
  rating?: number
  reviewCount?: number
  onClick?: () => void
  className?: string
}

export function ProductCard({
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
}: ProductCardProps) {
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
      <div className="aspect-square bg-organic-sand/50 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-organic-muted text-sm">No image</span>
        )}
      </div>
      <CardContent className="p-3 space-y-2">
        {category && <CategoryChip label={category} />}
        <h3 className="font-medium text-organic-ink text-sm line-clamp-2">{name}</h3>
        {sku && <p className="text-xs text-organic-muted font-mono">{sku}</p>}
        {rating != null && <StarRating value={rating} reviewCount={reviewCount} size="sm" />}
        <PriceDisplay amount={price} compareAt={compareAt} currency={currency} size="sm" />
        <StockLevel status={stockStatus} quantity={quantity} />
      </CardContent>
    </Card>
  )
}
