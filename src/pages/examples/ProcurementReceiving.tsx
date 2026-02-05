import { Card, CardContent } from '@/ui/Card'
import { DeliveryTracker, ExceptionTag, GRNCard } from '@/ui/procurement'
import { samplePO, sampleGRNLines } from '@/data/procurementData'

export function ProcurementReceiving() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Receiving & delivery</h1>
        <p className="text-organic-muted mt-1 text-sm">Delivery tracker, GRN, exception tags</p>
      </div>
      <Card variant="elevated">
        <CardContent className="pt-6">
          <DeliveryTracker
            stages={{
              ordered: samplePO.deliveryStages?.ordered,
              shipped: samplePO.deliveryStages?.shipped,
              received: undefined,
              closed: undefined,
            }}
            currentStage={samplePO.currentStage}
          />
          <div className="flex flex-wrap gap-2 mt-4">
            <ExceptionTag type="short_received" quantity={2} />
            <ExceptionTag type="damaged" quantity={1} />
            <ExceptionTag type="wrong_item" />
          </div>
        </CardContent>
      </Card>
      <GRNCard
        grnNumber="GRN-001"
        poNumber={samplePO.number}
        receivedDate="2025-02-10"
        lines={sampleGRNLines}
        discrepancyNotes="2 monitors short; vendor will deliver next week."
      />
    </div>
  )
}
