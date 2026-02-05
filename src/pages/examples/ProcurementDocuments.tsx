import { Card, CardContent } from '@/ui/Card'
import { AttachmentUploader, DocumentViewer, ExportMenu } from '@/ui/procurement'

export function ProcurementDocuments() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Documents & attachments</h1>
        <p className="text-organic-muted mt-1 text-sm">Upload, viewer, export</p>
      </div>
      <Card variant="elevated">
        <CardContent className="space-y-6 pt-6">
          <AttachmentUploader onFilesChange={() => {}} />
          <DocumentViewer type="pdf" title="PR document" />
          <ExportMenu onExport={(f) => console.log('Export', f)} />
        </CardContent>
      </Card>
    </div>
  )
}
