import { useState } from 'react'
import { Card, CardContent } from '@/ui/Card'
import {
  DocHeaderCard,
  VendorCard,
  TotalsCard,
  LineItemsTable,
  ThreeQuoteCompare,
  PurchasingObjectCard,
  WorkflowSection,
} from '@/ui/procurement'
import { docStatusConfig } from '@/lib/procurement/statusModel'
import { samplePRs, sampleVendor, samplePO, sampleVendorQuotes } from '@/data/procurementData'
import { FileTextIcon } from '@/ui/icons'

export function ProcurementPurchasing() {
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState<number>(0)
  const pr = samplePRs[0]
  const subtotal = pr.items.reduce(
    (s, i) => s + i.quantity * i.unitPrice * (1 - (i.discount ?? 0) / 100),
    0
  )
  const tax = subtotal * 0.15
  const prStatusConfig = docStatusConfig[pr.status]
  const poStatusConfig = docStatusConfig[samplePO.status]

  const quotesWithSelection = sampleVendorQuotes.map((q, idx) => ({
    ...q,
    selected: idx === selectedQuoteIndex,
  }))

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Purchasing objects</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Document header, vendor, line items, vendor quotes comparison, and totals
        </p>
      </div>

      <WorkflowSection
        title="Purchasing objects"
        description="PR and PO linked to this purchasing process"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <PurchasingObjectCard
            type="PR"
            number={pr.number}
            status={prStatusConfig.label}
            statusVariant={prStatusConfig.variant}
            totalAmount={pr.totalAmount}
            secondary={pr.requester}
            dateLabel={`Created ${pr.createdAt}`}
            icon={<FileTextIcon />}
          />
          <PurchasingObjectCard
            type="PO"
            number={samplePO.number}
            status={poStatusConfig.label}
            statusVariant={poStatusConfig.variant}
            totalAmount={samplePO.totalAmount}
            secondary={samplePO.vendor}
            dateLabel={`Ordered ${samplePO.orderedDate}`}
            icon={<FileTextIcon />}
          />
        </div>
      </WorkflowSection>

      <div className="grid gap-4 lg:grid-cols-2">
        <DocHeaderCard
          docNumber={pr.number}
          status={pr.status}
          requester={pr.requester}
          plantBranch={pr.plantBranch}
          costCenter={pr.costCenter}
          totalAmount={pr.totalAmount}
          createdAt={pr.createdAt}
          targetDate={pr.targetDate}
          completedDate={pr.completedDate}
        />
        <VendorCard
          name={sampleVendor.name}
          code={sampleVendor.code}
          contacts={sampleVendor.contacts}
          performanceBadge={sampleVendor.performanceBadge}
        />
      </div>

      <Card variant="elevated">
        <CardContent className="pt-6">
          <WorkflowSection title="Line items" description="Requested items and pricing">
            <LineItemsTable items={pr.items} editable={false} showCostCenter={false} />
          </WorkflowSection>
        </CardContent>
      </Card>

      <WorkflowSection
        title="Vendor quotes"
        description="Compare quotes and select a vendor"
      >
        <ThreeQuoteCompare
          quotes={quotesWithSelection}
          currency="SAR"
          onSelect={setSelectedQuoteIndex}
        />
      </WorkflowSection>

      <TotalsCard
        subtotal={subtotal}
        tax={tax}
        currency="SAR"
        className="max-w-sm"
      />
    </div>
  )
}
