import { Card, CardContent } from '@/ui/Card'
import {
  CompanyHeader,
  ContactBlock,
  KeyValueBlock,
  SocialLinks,
  ProfileSection,
  CompanyStats,
} from '@/ui/company'
import {
  sampleCompany,
  sampleContactItems,
  sampleKeyValues,
  sampleSocialLinks,
  sampleCompanyStats,
} from '@/data/companyData'

export function CompanyProfileDemo() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Contacts</h1>
        <p className="text-organic-muted mt-1 text-sm">Company header, contact block, key facts, social links, stats</p>
      </div>

      <Card variant="elevated">
        <CardContent className="pt-6">
          <CompanyHeader
            name={sampleCompany.name}
            tagline={sampleCompany.tagline}
            industry={sampleCompany.industry}
            logoUrl={sampleCompany.logoUrl}
            size="lg"
          />
          <div className="mt-6 pt-6 border-t border-organic-border">
            <CompanyStats items={sampleCompanyStats} />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card variant="elevated">
          <CardContent className="pt-6">
            <ProfileSection title="Contact">
              <ContactBlock items={sampleContactItems} />
            </ProfileSection>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardContent className="pt-6">
            <ProfileSection title="Details">
              <KeyValueBlock items={sampleKeyValues} columns={2} />
            </ProfileSection>
          </CardContent>
        </Card>
      </div>

      <Card variant="elevated">
        <CardContent className="pt-6">
          <ProfileSection title="About">
            <p className="text-organic-muted">
              Green Valley Trading provides sustainable office and facility supplies across the Gulf.
              We work with certified suppliers and help businesses reduce their environmental footprint.
            </p>
          </ProfileSection>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardContent className="pt-6">
          <ProfileSection title="Follow us">
            <SocialLinks links={sampleSocialLinks} />
          </ProfileSection>
        </CardContent>
      </Card>
    </div>
  )
}
