import { Card, CardContent } from '@/ui/Card'
import { Carousel } from '@/ui/Carousel'
import { Breadcrumb } from '@/ui/Breadcrumb'
import { Avatar } from '@/ui/Avatar'
import { Divider } from '@/ui/Divider'

const carouselSlides = [
  { title: 'Slide 1', text: 'Carousel content' },
  { title: 'Slide 2', text: 'Any content' },
  { title: 'Slide 3', text: 'Images, cards, etc.' },
]

export function MoreComponentsDemo() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <p className="text-sm text-organic-muted uppercase tracking-wide">Extended UI</p>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Carousel & more</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Carousel, Breadcrumb, Avatar, Divider — reusable across any project
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Breadcrumb
        </h2>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Current page' },
          ]}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Avatar
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar fallback="AB" size="sm" />
          <Avatar fallback="JD" size="md" />
          <Avatar fallback="SK" size="lg" />
          <Avatar fallback="?" size="md" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Divider
        </h2>
        <div className="space-y-4">
          <p className="text-sm text-organic-muted">Horizontal</p>
          <Divider />
          <p className="text-sm text-organic-muted">With label</p>
          <Divider label="Or" />
          <p className="text-sm text-organic-muted">Vertical (e.g. in toolbars)</p>
          <div className="flex items-center gap-4 h-8">
            <span className="text-sm">Item 1</span>
            <Divider orientation="vertical" />
            <span className="text-sm">Item 2</span>
            <Divider orientation="vertical" />
            <span className="text-sm">Item 3</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Carousel
        </h2>
        <p className="text-sm text-organic-muted mb-4">
          Generic carousel: wrap any content. Use for hero banners, product strips, image galleries.
        </p>
        <Carousel showArrows showDots slideMinWidth="300px">
          {carouselSlides.map((s, i) => (
            <Card key={i} variant="elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-organic-ink">{s.title}</h3>
                <p className="text-sm text-organic-muted mt-1">{s.text}</p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </section>
    </div>
  )
}
