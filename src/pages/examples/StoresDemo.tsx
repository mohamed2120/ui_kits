import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/ui/Card'
import {
  StoreLocationCard,
  LowStockBanner,
  MapPlaceholder,
  LocationSearchBar,
  LocationSummaryCard,
} from '@/ui/stores'
import { WorkflowSection } from '@/ui/procurement'
import { sampleStores } from '@/data/storesData'

export function StoresDemo() {
  const [search, setSearch] = useState('')
  const filteredStores = useMemo(() => {
    if (!search.trim()) return sampleStores
    const q = search.toLowerCase()
    return sampleStores.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q)
    )
  }, [search])
  const openCount = sampleStores.filter((s) => s.status === 'open').length

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Maps</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Map placeholder, location search, store cards, and status banners
        </p>
      </div>

      <MapPlaceholder
        title="Store locations map"
        hint="Integrate Google Maps, Mapbox, or another provider to show pins and directions"
        height="280px"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <LocationSummaryCard
          totalCount={sampleStores.length}
          openCount={openCount}
          label="stores"
        />
        <Card variant="elevated">
          <CardContent className="p-4">
            <p className="text-sm font-medium text-organic-ink">Quick actions</p>
            <p className="text-xs text-organic-muted mt-1">
              Use the search below to filter by city, address, or store code.
            </p>
          </CardContent>
        </Card>
      </div>

      <LowStockBanner
        message="Dammam Warehouse is under maintenance — deliveries delayed"
        variant="warning"
        className="max-w-2xl"
      />

      <Card variant="elevated">
        <CardContent className="pt-6">
          <WorkflowSection
            title="Find a location"
            description="Search by city, address, or store code"
          >
            <LocationSearchBar
              value={search}
              onChange={setSearch}
              placeholder="City, address, or store code..."
            />
          </WorkflowSection>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardContent className="pt-6">
          <WorkflowSection
            title="Store locations"
            description={filteredStores.length === sampleStores.length ? 'All locations' : `${filteredStores.length} result${filteredStores.length !== 1 ? 's' : ''}`}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredStores.map((s) => (
                <StoreLocationCard
                  key={s.id}
                  name={s.name}
                  code={s.code}
                  address={s.address}
                  status={s.status}
                  hours={s.hours}
                  phone={s.phone}
                />
              ))}
            </div>
            {filteredStores.length === 0 && (
              <p className="text-sm text-organic-muted py-6 text-center">
                No locations match your search.
              </p>
            )}
          </WorkflowSection>
        </CardContent>
      </Card>
    </div>
  )
}
