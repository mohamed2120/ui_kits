import { useState } from 'react'
import { Card, CardContent } from '@/ui/Card'
import {
  DocHeaderCard,
  LineItemsTable,
  ThreeQuoteCompare,
  BudgetAvailability,
  TotalsCard,
  WorkflowSection,
} from '@/ui/procurement'
import { samplePRs, sampleVendorQuotes } from '@/data/procurementData'

export function ProcurementItems() {
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(0)
  const pr = samplePRs[0]
  const subtotal = pr.items.reduce(
    (s, i) => s + i.quantity * i.unitPrice * (1 - (i.discount ?? 0) / 100),
    0
  )
  const tax = subtotal * 0.15
  const quotesWithSelection = sampleVendorQuotes.map((q, idx) => ({
    ...q,
    selected: idx === selectedQuoteIndex,
  }))

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Items & pricing</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Line items, vendor quote comparison, and budget availability by cost center
        </p>
      </div>

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

      <Card variant="elevated">
        <CardContent className="pt-6">
          <WorkflowSection
            title="Line items"
            description="Requested items with quantity, unit price, discount, and line total"
          >
            <LineItemsTable items={pr.items} editable={false} showCostCenter />
          </WorkflowSection>
        </CardContent>
      </Card>

      <WorkflowSection
        title="Vendor quotes"
        description="Compare pricing by vendor and select a quote"
      >
        <ThreeQuoteCompare
          quotes={quotesWithSelection}
          currency="SAR"
          onSelect={setSelectedQuoteIndex}
        />
      </WorkflowSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card variant="elevated">
          <CardContent className="pt-6">
            <WorkflowSection
              title="Budget availability"
              description="Cost center budget status"
            >
              <div className="flex flex-wrap gap-2">
                <BudgetAvailability status="available" label="CC-100" />
                <BudgetAvailability status="low" label="CC-200" />
                <BudgetAvailability status="over" label="CC-300" />
              </div>
            </WorkflowSection>
          </CardContent>
        </Card>
        <TotalsCard
          subtotal={subtotal}
          tax={tax}
          currency="SAR"
          className="max-w-sm"
        />
      </div>
    </div>
  )
}
