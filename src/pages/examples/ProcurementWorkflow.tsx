import { Card, CardContent } from '@/ui/Card'
import {
  DocHeaderCard,
  ApprovalFlow,
  ApprovalActions,
  ApprovalRequestBanner,
  WorkflowSection,
  LineItemsSummary,
  SLAChip,
  EscalationBanner,
} from '@/ui/procurement'
import { samplePRs, sampleApprovalSteps } from '@/data/procurementData'

function getSlaDueText(targetDate: string, completedDate?: string | null): string | undefined {
  const target = new Date(targetDate)
  const now = new Date()
  if (completedDate) return undefined
  const daysUntil = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  if (daysUntil < 0) return `Overdue by ${Math.abs(daysUntil)} day${Math.abs(daysUntil) !== 1 ? 's' : ''}`
  if (daysUntil === 0) return 'Due today'
  return `Due in ${daysUntil} day${daysUntil !== 1 ? 's' : ''}`
}

export function ProcurementWorkflow() {
  const pr = samplePRs[0]
  const isPendingApproval = pr.status === 'pending_approval'
  const dueText = getSlaDueText(pr.targetDate, pr.completedDate)

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Workflow & approvals</h1>
        <p className="text-organic-muted mt-1 text-sm">Approval flow, actions, SLA, escalation</p>
      </div>

      {isPendingApproval && (
        <ApprovalRequestBanner
          docNumber={pr.number}
          docType="Purchase request"
          dueText={dueText}
          actionLabel="Review"
          onAction={() => {}}
        />
      )}

      <EscalationBanner
        message="Waiting for Finance 6 days"
        waitingFor="Finance"
        daysWaiting={6}
      />

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
        <CardContent className="space-y-6 pt-6">
          <WorkflowSection title="Line items" description="Summary of requested items">
            <LineItemsSummary items={pr.items} maxRows={5} />
          </WorkflowSection>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardContent className="space-y-6 pt-6">
          <WorkflowSection
            title="Approval flow"
            description="Current and upcoming approvers"
          >
            <ApprovalFlow steps={sampleApprovalSteps} />
          </WorkflowSection>

          <WorkflowSection title="Actions" description="Approve, reject, send back, or delegate">
            <ApprovalActions
              onApprove={() => {}}
              onReject={() => {}}
              onSendBack={() => {}}
            />
          </WorkflowSection>

          <WorkflowSection title="SLA">
            <SLAChip targetDate={pr.targetDate} completedDate={pr.completedDate} />
          </WorkflowSection>
        </CardContent>
      </Card>
    </div>
  )
}
