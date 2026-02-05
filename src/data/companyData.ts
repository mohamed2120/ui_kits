import type { ContactItem } from '@/ui/company/ContactBlock'
import type { KeyValueItem } from '@/ui/company/KeyValueBlock'
import type { SocialLinkItem } from '@/ui/company/SocialLinks'
import type { CompanyStatItem } from '@/ui/company/CompanyStats'

export const sampleCompany = {
  name: 'Green Valley Trading',
  tagline: 'Sustainable supplies for modern business',
  industry: 'Trading & Distribution',
  logoUrl: null as string | null,
}

export const sampleContactItems: ContactItem[] = [
  { type: 'address', value: 'King Fahd Road, Tower B, 12th Floor, Riyadh 12211' },
  { type: 'phone', value: '+966 11 234 5678' },
  { type: 'email', value: 'info@greenvalley.sa' },
  { type: 'website', value: 'https://greenvalley.sa' },
]

export const sampleKeyValues: KeyValueItem[] = [
  { label: 'Founded', value: '2015' },
  { label: 'Employees', value: '120' },
  { label: 'Tax ID', value: '300012345600003' },
  { label: 'CR Number', value: '1010123456' },
]

export const sampleSocialLinks: SocialLinkItem[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/greenvalley' },
  { label: 'Twitter', href: 'https://twitter.com/greenvalley_sa' },
]

export const sampleCompanyStats: CompanyStatItem[] = [
  { label: 'Years', value: '10' },
  { label: 'Employees', value: '120' },
  { label: 'Locations', value: '5' },
]
