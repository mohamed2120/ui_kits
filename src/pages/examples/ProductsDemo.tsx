import { useState } from 'react'
import {
  ProductCard,
  ProductCardCompact,
  ProductCardFeature,
  SaleCard,
  ProductCarousel,
  ProductTable,
  StockLevel,
  PriceDisplay,
  CategoryChip,
  LowStockBanner,
} from '@/ui/stores'
import { StarRating, InteractiveStarRating } from '@/ui/Rating'
import { sampleProducts } from '@/data/storesData'

export function ProductsDemo() {
  const [sortKey, setSortKey] = useState<string | null>('name')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [rating, setRating] = useState(3)
  const lowCount = sampleProducts.filter((p) => p.stockStatus === 'low_stock' || p.stockStatus === 'out_of_stock').length

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <p className="text-sm text-organic-muted uppercase tracking-wide">Extended UI</p>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Products & Sale</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Product cards, sale cards, carousel, table, rating, stock, price
        </p>
      </div>

      {lowCount > 0 && (
        <LowStockBanner
          message="Some products are low or out of stock"
          count={lowCount}
          variant="warning"
          onReorder={() => {}}
        />
      )}

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Rating components
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <StarRating value={4.5} size="sm" />
          <StarRating value={4.5} showValue reviewCount={128} size="md" />
          <StarRating value={3.2} showValue size="lg" />
          <InteractiveStarRating value={rating} onChange={setRating} size="md" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Sell items (sale cards)
        </h2>
        <p className="text-sm text-organic-muted mb-4">
          SaleCard shows discount %, compare-at price, and Add to cart. Use for promos and sell items.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {sampleProducts.filter((p) => p.compareAt != null && p.compareAt > p.price).map((p) => (
            <SaleCard
              key={p.id}
              name={p.name}
              sku={p.sku}
              price={p.price}
              compareAt={p.compareAt!}
              currency={p.currency}
              stockStatus={p.stockStatus}
              quantity={p.quantity}
              category={p.category}
              rating={p.rating}
              reviewCount={p.reviewCount}
              onAddToCart={() => {}}
            />
          ))}
        </div>
        <h3 className="text-sm font-medium text-organic-ink mb-3">Product carousel (sell items)</h3>
        <ProductCarousel
          items={sampleProducts.map((p) => ({
            id: p.id,
            name: p.name,
            sku: p.sku,
            price: p.price,
            compareAt: p.compareAt,
            currency: p.currency,
            stockStatus: p.stockStatus,
            quantity: p.quantity,
            category: p.category,
            rating: p.rating,
            reviewCount: p.reviewCount,
          }))}
          asSale
          onAddToCart={() => {}}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Product cards (grid)
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProducts.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              sku={p.sku}
              price={p.price}
              compareAt={p.compareAt}
              currency={p.currency}
              stockStatus={p.stockStatus}
              quantity={p.quantity}
              category={p.category}
              rating={p.rating}
              reviewCount={p.reviewCount}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Product cards (compact / list)
        </h2>
        <div className="space-y-2">
          {sampleProducts.map((p) => (
            <ProductCardCompact
              key={p.id}
              name={p.name}
              sku={p.sku}
              price={p.price}
              compareAt={p.compareAt}
              currency={p.currency}
              stockStatus={p.stockStatus}
              quantity={p.quantity}
              category={p.category}
              rating={p.rating}
              reviewCount={p.reviewCount}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Product card (feature / hero)
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProductCardFeature
            name={sampleProducts[0].name}
            description="Premium organic cotton, set of 4 towels. Soft and absorbent."
            sku={sampleProducts[0].sku}
            price={sampleProducts[0].price}
            compareAt={sampleProducts[0].compareAt}
            currency={sampleProducts[0].currency}
            stockStatus={sampleProducts[0].stockStatus}
            quantity={sampleProducts[0].quantity}
            category={sampleProducts[0].category}
            rating={sampleProducts[0].rating}
            reviewCount={sampleProducts[0].reviewCount}
            badge="Sale"
            onAddToCart={() => {}}
          />
          <ProductCardFeature
            name={sampleProducts[1].name}
            description="Eco-friendly bamboo base, adjustable brightness."
            sku={sampleProducts[1].sku}
            price={sampleProducts[1].price}
            currency={sampleProducts[1].currency}
            stockStatus={sampleProducts[1].stockStatus}
            quantity={sampleProducts[1].quantity}
            category={sampleProducts[1].category}
            rating={sampleProducts[1].rating}
            reviewCount={sampleProducts[1].reviewCount}
            badge="New"
            onAddToCart={() => {}}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Product table
        </h2>
        <ProductTable
          products={sampleProducts}
          sortKey={sortKey}
          sortDir={sortDir}
          onSort={(k) => {
            setSortKey(k)
            setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
          }}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Standalone: StockLevel, PriceDisplay, CategoryChip
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <StockLevel status="in_stock" quantity={100} />
          <StockLevel status="low_stock" quantity={5} />
          <StockLevel status="out_of_stock" />
          <PriceDisplay amount={199} compareAt={249} currency="SAR" />
          <CategoryChip label="Electronics" />
          <CategoryChip label="Featured" variant="primary" />
        </div>
      </section>
    </div>
  )
}
