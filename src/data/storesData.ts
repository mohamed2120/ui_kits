import type { ProductRow } from '@/ui/stores/ProductTable'
import type { StoreStatus } from '@/ui/stores/StoreLocationCard'

export const sampleProducts: ProductRow[] = [
  {
    id: '1',
    name: 'Organic Cotton Towel Set',
    sku: 'TWL-001',
    category: 'Bath',
    price: 89.99,
    compareAt: 120,
    currency: 'SAR',
    stockStatus: 'in_stock',
    quantity: 45,
    rating: 4.5,
    reviewCount: 128,
  },
  {
    id: '2',
    name: 'Bamboo Desk Lamp',
    sku: 'LMP-042',
    category: 'Office',
    price: 145,
    currency: 'SAR',
    stockStatus: 'low_stock',
    quantity: 3,
    rating: 4.8,
    reviewCount: 42,
  },
  {
    id: '3',
    name: 'Stainless Steel Water Bottle',
    sku: 'BTL-112',
    category: 'Kitchen',
    price: 55,
    currency: 'SAR',
    stockStatus: 'out_of_stock',
    rating: 3.9,
    reviewCount: 256,
  },
]

export const sampleStores: Array<{
  id: string
  name: string
  code: string
  address: string
  status: StoreStatus
  hours: string
  phone: string
}> = [
  {
    id: '1',
    name: 'Riyadh Central',
    code: 'STR-RUH-01',
    address: 'King Fahd Road, Riyadh',
    status: 'open',
    hours: '9:00 – 22:00',
    phone: '+966 11 234 5678',
  },
  {
    id: '2',
    name: 'Jeddah Corniche',
    code: 'STR-JED-02',
    address: 'Corniche Road, Jeddah',
    status: 'open',
    hours: '10:00 – 23:00',
    phone: '+966 12 345 6789',
  },
  {
    id: '3',
    name: 'Dammam Warehouse',
    code: 'WH-DMM-01',
    address: 'Industrial Area, Dammam',
    status: 'maintenance',
    hours: '8:00 – 18:00',
    phone: '+966 13 456 7890',
  },
]
