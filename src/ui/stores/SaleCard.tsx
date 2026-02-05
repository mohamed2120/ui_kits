import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import { StockLevel, type StockStatus } from './StockLevel'
import { PriceDisplay } from './PriceDisplay'
import { StarRating } from '@/ui/Rating'
import { Button } from '@/ui/Button'
import { ShoppingCartIcon } from '@/ui/icons'
import type { CurrencyCode } from '@/lib/procurement/formatters'

export interface SaleCardProps {
  name: string
  sku?: string
  price: number
  compareAt: number
  currency?: CurrencyCode
  stockStatus: StockStatus
  quantity?: number
  category?: string
  imageUrl?: string | null
  rating?: number
  reviewCount?: number
  /** e.g. "Limited", "Flash sale" */
  badge?: string
  onAddToCart?: () => void
  onClick?: () => void
  className?: string
}

function discountPercent(price: number, compareAt: number): number {
  if (compareAt <= 0) return 0
  return Math.round((1 - price / compareAt) * 100)
}

export function SaleCard({
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
  badge,
  onAddToCart,
  onClick,
  className,
}: SaleCardProps) {
  const savePercent = discountPercent(price, compareAt)
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
      <div className="relative aspect-square bg-organic-sand/50 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-organic-muted text-sm">No image</span>
        )}
        {savePercent > 0 && (
          <Badge variant="danger" size="sm" className="absolute top-2 left-2">
            -{savePercent}%
          </Badge>
        )}
        {badge && savePercent <= 0 && (
          <Badge variant="success" size="sm" className="absolute top-2 left-2">
            {badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-3 space-y-2">
        {category && <span className="text-xs text-organic-muted">{category}</span>}
        <h3 className="font-medium text-organic-ink text-sm line-clamp-2">{name}</h3>
        {sku && <p className="text-xs text-organic-muted font-mono">{sku}</p>}
        {rating != null && <StarRating value={rating} reviewCount={reviewCount} size="sm" />}
        <PriceDisplay amount={price} compareAt={compareAt} currency={currency} size="sm" />
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <StockLevel status={stockStatus} quantity={quantity} />
          {onAddToCart && (
            <Button size="sm" variant="primary" leftIcon={<ShoppingCartIcon />} onClick={(e) => { e.stopPropagation(); onAddToCart() }}>
              Add to cart
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
