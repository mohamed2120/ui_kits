import { Carousel } from '@/ui/Carousel'
import { SaleCard } from './SaleCard'
import { ProductCard } from './ProductCard'
import type { StockStatus } from './StockLevel'
import type { CurrencyCode } from '@/lib/procurement/formatters'

export interface ProductCarouselItem {
  id: string
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
  badge?: string
}

export interface ProductCarouselProps {
  items: ProductCarouselItem[]
  /** Use SaleCard (discount focus) when true, else ProductCard */
  asSale?: boolean
  slideMinWidth?: string
  showArrows?: boolean
  showDots?: boolean
  autoplay?: number
  onAddToCart?: (item: ProductCarouselItem) => void
  onItemClick?: (item: ProductCarouselItem) => void
  className?: string
}

export function ProductCarousel({
  items,
  asSale = true,
  slideMinWidth = '260px',
  showArrows = true,
  showDots = true,
  autoplay = 0,
  onAddToCart,
  onItemClick,
  className,
}: ProductCarouselProps) {
  return (
    <Carousel
      slideCount={items.length}
      slideMinWidth={slideMinWidth}
      showArrows={showArrows}
      showDots={showDots}
      autoplay={autoplay}
      className={className}
    >
      {items.map((item) =>
        asSale && (item.compareAt != null && item.compareAt > item.price) ? (
          <SaleCard
            key={item.id}
            name={item.name}
            sku={item.sku}
            price={item.price}
            compareAt={item.compareAt}
            currency={item.currency}
            stockStatus={item.stockStatus}
            quantity={item.quantity}
            category={item.category}
            imageUrl={item.imageUrl}
            rating={item.rating}
            reviewCount={item.reviewCount}
            badge={item.badge}
            onAddToCart={onAddToCart ? () => onAddToCart(item) : undefined}
            onClick={onItemClick ? () => onItemClick(item) : undefined}
          />
        ) : (
          <ProductCard
            key={item.id}
            name={item.name}
            sku={item.sku}
            price={item.price}
            compareAt={item.compareAt}
            currency={item.currency}
            stockStatus={item.stockStatus}
            quantity={item.quantity}
            category={item.category}
            imageUrl={item.imageUrl}
            rating={item.rating}
            reviewCount={item.reviewCount}
            onClick={onItemClick ? () => onItemClick(item) : undefined}
          />
        )
      )}
    </Carousel>
  )
}
