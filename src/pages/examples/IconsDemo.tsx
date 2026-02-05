import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import * as Icons from '@/ui/icons'
import { FaHeart, FaUser, FaHome, FaBell, FaStar, FaShoppingCart, FaEnvelope, FaCog, FaList, FaFileAlt } from 'react-icons/fa'
import { MdSearch, MdPerson, MdEmail, MdSettings, MdDelete, MdAdd, MdRemove, MdCheck, MdClose } from 'react-icons/md'
import {
  Heart,
  User,
  House,
  Bell,
  Calendar,
  Envelope,
  MagnifyingGlass,
  Gear,
  List,
  FileText,
  MapPin,
  ShoppingCart,
  Star,
  Trash,
  Pencil,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Image,
  Download,
  Upload,
  Lock,
  Eye,
  Copy,
  ChatCircle,
  Phone,
  Globe,
  Package,
  Truck,
  Sun,
  Moon,
} from '@phosphor-icons/react'

const reactIconsSample: Array<{ name: string; Icon: React.ComponentType<{ size?: number; className?: string }> }> = [
  { name: 'FaHeart', Icon: FaHeart },
  { name: 'FaUser', Icon: FaUser },
  { name: 'FaHome', Icon: FaHome },
  { name: 'FaBell', Icon: FaBell },
  { name: 'FaStar', Icon: FaStar },
  { name: 'FaShoppingCart', Icon: FaShoppingCart },
  { name: 'FaEnvelope', Icon: FaEnvelope },
  { name: 'FaCog', Icon: FaCog },
  { name: 'FaList', Icon: FaList },
  { name: 'FaFileAlt', Icon: FaFileAlt },
  { name: 'MdSearch', Icon: MdSearch },
  { name: 'MdPerson', Icon: MdPerson },
  { name: 'MdEmail', Icon: MdEmail },
  { name: 'MdSettings', Icon: MdSettings },
  { name: 'MdDelete', Icon: MdDelete },
  { name: 'MdAdd', Icon: MdAdd },
  { name: 'MdRemove', Icon: MdRemove },
  { name: 'MdCheck', Icon: MdCheck },
  { name: 'MdClose', Icon: MdClose },
]

const phosphorSample: Array<{ name: string; Icon: React.ComponentType<{ size?: number; className?: string }> }> = [
  { name: 'Heart', Icon: Heart },
  { name: 'User', Icon: User },
  { name: 'House', Icon: House },
  { name: 'Bell', Icon: Bell },
  { name: 'Calendar', Icon: Calendar },
  { name: 'Envelope', Icon: Envelope },
  { name: 'MagnifyingGlass', Icon: MagnifyingGlass },
  { name: 'Gear', Icon: Gear },
  { name: 'List', Icon: List },
  { name: 'FileText', Icon: FileText },
  { name: 'MapPin', Icon: MapPin },
  { name: 'ShoppingCart', Icon: ShoppingCart },
  { name: 'Star', Icon: Star },
  { name: 'Trash', Icon: Trash },
  { name: 'Pencil', Icon: Pencil },
  { name: 'Plus', Icon: Plus },
  { name: 'Minus', Icon: Minus },
  { name: 'Check', Icon: Check },
  { name: 'X', Icon: X },
  { name: 'ArrowRight', Icon: ArrowRight },
  { name: 'ArrowLeft', Icon: ArrowLeft },
  { name: 'Image', Icon: Image },
  { name: 'Download', Icon: Download },
  { name: 'Upload', Icon: Upload },
  { name: 'Lock', Icon: Lock },
  { name: 'Eye', Icon: Eye },
  { name: 'Copy', Icon: Copy },
  { name: 'ChatCircle', Icon: ChatCircle },
  { name: 'Phone', Icon: Phone },
  { name: 'Globe', Icon: Globe },
  { name: 'Package', Icon: Package },
  { name: 'Truck', Icon: Truck },
  { name: 'Sun', Icon: Sun },
  { name: 'Moon', Icon: Moon },
]

export function IconsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Icons</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Built-in set + <strong>React Icons (5000+)</strong> + Phosphor (9000+). Import from <code className="rounded bg-organic-sand px-1">@/ui/icons</code>, <code className="rounded bg-organic-sand px-1">react-icons/fa</code>, or <code className="rounded bg-organic-sand px-1">@/ui/phosphor-icons</code>.
        </p>
      </div>

      <Card variant="outlined" className="border-organic-sage/40 bg-organic-sage/5">
        <CardContent className="pt-6">
          <h2 className="text-sm font-semibold text-organic-ink mb-2">Where are the 5000+ icons?</h2>
          <p className="text-sm text-organic-muted mb-3">
            <strong>React Icons</strong> gives you 5000+ icons in one package: Font Awesome, Material Design, Bootstrap, Game Icons, Lucide, and more. Import by set: <code className="rounded bg-organic-sand px-1 text-xs">import {'{ FaHeart }'} from &apos;react-icons/fa&apos;</code> or <code className="rounded bg-organic-sand px-1 text-xs">import {'{ MdHome }'} from &apos;react-icons/md&apos;</code>. Only the icons you import are bundled.
          </p>
          <p className="text-sm text-organic-muted mb-2">
            <strong>Browse & search all 5000+:</strong>{' '}
            <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer" className="text-organic-sage hover:underline font-medium">react-icons.github.io/react-icons</a>
          </p>
          <p className="text-sm text-organic-muted">
            This kit also includes <strong>Phosphor</strong> (9000+ icons) via <code className="rounded bg-organic-sand px-1">@/ui/phosphor-icons</code> — browse at <a href="https://phosphoricons.com" target="_blank" rel="noopener noreferrer" className="text-organic-sage hover:underline">phosphoricons.com</a>.
          </p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Built-in icons</CardTitle>
          <CardDescription>
            Use inside Button, IconButton, or anywhere. Import from <code className="rounded bg-organic-sand px-1">@/ui/icons</code>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {Object.entries(Icons)
              .filter(([key]) => typeof key === 'string' && key.endsWith('Icon'))
              .map(([key, Icon]) => (
                <div
                  key={key}
                  className="flex flex-col items-center gap-2 rounded-lg border border-organic-border bg-organic-sand/30 p-3"
                >
                  <span className="text-organic-muted [&>svg]:w-6 [&>svg]:h-6">
                    {typeof Icon === 'function' && <Icon />}
                  </span>
                  <span className="text-xs font-medium text-organic-ink text-center break-all">
                    {key.replace(/Icon$/, '')}
                  </span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>React Icons (5000+) — sample</CardTitle>
          <CardDescription>
            Font Awesome (fa), Material Design (md), Bootstrap (bs), and 20+ other sets. Import from <code className="rounded bg-organic-sand px-1">react-icons/fa</code>, <code className="rounded bg-organic-sand px-1">react-icons/md</code>, etc. Browse at <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer" className="text-organic-sage hover:underline">react-icons.github.io</a>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {reactIconsSample.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-lg border border-organic-border bg-organic-sand/30 p-3"
              >
                <span className="text-organic-muted [&>svg]:w-6 [&>svg]:h-6">
                  <Icon size={24} />
                </span>
                <span className="text-xs font-medium text-organic-ink text-center break-all">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Phosphor Icons (9000+) — sample</CardTitle>
          <CardDescription>
            Over 9000 icons. Import from <code className="rounded bg-organic-sand px-1">@/ui/phosphor-icons</code> or <code className="rounded bg-organic-sand px-1">@phosphor-icons/react</code>. Browse at <a href="https://phosphoricons.com" target="_blank" rel="noopener noreferrer" className="text-organic-sage hover:underline">phosphoricons.com</a>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-organic-muted mb-4">
            Sample (34 shown).
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {phosphorSample.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-lg border border-organic-border bg-organic-sand/30 p-3"
              >
                <span className="text-organic-muted [&>svg]:w-6 [&>svg]:h-6">
                  <Icon size={24} />
                </span>
                <span className="text-xs font-medium text-organic-ink text-center break-all">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
