import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import { StockLevel, type StockStatus } from './StockLevel'
import { PriceDisplay } from './PriceDisplay'
import { CategoryChip } from './CategoryChip'
import { StarRating } from '@/ui/Rating'
import { Button } from '@/ui/Button'
import { ShoppingCartIcon } from '@/ui/icons'
import type { CurrencyCode } from '@/lib/procurement/formatters'

export interface ProductCardFeatureProps {
  name: string
  description?: string
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
  /** e.g. "New", "Sale", "Bestseller" */
  badge?: string
  onAddToCart?: () => void
  onClick?: () => void
  className?: string
}

export function ProductCardFeature({
  name,
  description,
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
}: ProductCardFeatureProps) {
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
      <div className="relative aspect-[4/3] bg-organic-sand/50 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-organic-muted">No image</span>
        )}
        {badge && (
          <Badge variant="success" size="sm" className="absolute top-3 left-3">
            {badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-4 space-y-3">
        {category && <CategoryChip label={category} />}
        <h3 className="font-semibold text-organic-ink text-lg line-clamp-2">{name}</h3>
        {description && <p className="text-sm text-organic-muted line-clamp-2">{description}</p>}
        {sku && <p className="text-xs text-organic-muted font-mono">{sku}</p>}
        {rating != null && (
          <StarRating value={rating} reviewCount={reviewCount} size="md" showValue />
        )}
        <PriceDisplay amount={price} compareAt={compareAt} currency={currency} size="lg" />
        <div className="flex flex-wrap items-center gap-2">
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
