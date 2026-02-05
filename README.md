# OrganicDash UI

A reusable React dashboard UI kit with an **organic** design: large rounded corners, soft shadows, calm palette, and subtle gradients.

## Tech

- **React 18** + **TypeScript**
- **TailwindCSS** (design tokens in `src/ui/theme/tokens.ts`)
- **ThemeProvider** for light/dark and token-based theming
- Components are **shadcn-like** (local implementations, no shadcn dependency)
- All components support **className** and **variants**
- **Accessibility**: focus rings, keyboard navigation for menus, aria labels for inputs

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:9005](http://localhost:9005). Use the sidebar to open the example pages.

## Use this kit in your own project

See **[INTEGRATION.md](./INTEGRATION.md)** for step-by-step instructions: install via local path or Git, configure Vite and Tailwind, add the theme and CSS variables, and import components.

## Folder structure

```
src/
├── ui/                      # UI kit
│   ├── theme/
│   │   ├── tokens.ts        # Design tokens (colors, radius, shadow)
│   │   └── ThemeProvider.tsx
│   ├── Button/
│   ├── IconButton/
│   ├── Card/
│   ├── StatCard/
│   ├── Badge/
│   ├── Input/
│   ├── Select/
│   ├── Checkbox/
│   ├── Switch/
│   ├── Tabs/
│   ├── Modal/
│   ├── Drawer/
│   ├── Toast/
│   ├── Alert/
│   ├── Skeleton/
│   ├── Table/
│   ├── Pagination/
│   ├── DataToolbar/
│   ├── FilterChips/
│   ├── EmptyState/
│   ├── AppShell/
│   ├── Icon/
│   └── icons/               # Small inline SVG icon set
├── lib/
│   └── utils.ts             # cn() for className + tailwind-merge
├── data/
│   └── sampleData.ts        # Sample data for examples
└── pages/
    └── examples/
        ├── KpiOverview.tsx           # 1) KPI Overview
        ├── ListFiltersTable.tsx      # 2) List + Filters + Table
        ├── DetailsTimelineComments.tsx # 3) Details with timeline and comments
        └── SettingsTabs.tsx          # 4) Settings with tabs
        └── Notifications.tsx         # 5) Notifications (toasts, alerts, progress, spinner)
```

## Components

| Component     | Notes                                              |
|--------------|-----------------------------------------------------|
| Button       | Variants: primary, secondary, outline, ghost, danger |
| IconButton   | Requires `aria-label`                               |
| Card         | CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| StatCard     | title, value, description, trend                     |
| Badge        | default, success, warning, danger, outline          |
| Input        | label, error                                        |
| Select       | options, placeholder, label                         |
| Checkbox     | label, size                                         |
| Switch       | label, size                                        |
| Tabs         | TabsList, TabsTrigger, TabsContent (controlled)      |
| Modal        | open, onOpenChange, title, description              |
| Drawer       | side: left \| right                                 |
| Toast        | placement, translucent, variants (success/error/info/warning), action button, duration |
| Alert        | variants: default, primary, secondary, success, warning, danger, info, light, dark; dismissible; customBackground |
| Progress     | value, max, variant, size, showLabel                 |
| Spinner      | size (sm/md/lg)                                     |
| Skeleton     | Loading placeholder                                 |
| Table        | columns, data, sortKey, sortDir, onSort             |
| Pagination   | page, totalPages, onPageChange                       |
| DataToolbar  | DataToolbarGroup, DataToolbarLabel                  |
| FilterChips   | items (id, label, active), onToggle, onClear        |
| EmptyState   | icon, title, description, action                     |
| AppShell     | Sidebar + Topbar layout; navItems, topbarRight      |
| Icon         | Wrapper that accepts any SVG icon component         |

## Theming

Wrap your app in `ThemeProvider` and optionally use `useTheme()` for `mode` and `setMode`:

```tsx
import { ThemeProvider, useTheme } from '@/ui/theme/ThemeProvider'

<ThemeProvider defaultMode="light">
  <App />
</ThemeProvider>
```

Tokens (colors, radius, shadows) are in `src/ui/theme/tokens.ts` and exposed as CSS variables (e.g. `--organic-cream`, `--organic-radius`) used by Tailwind in `tailwind.config.js`.

## Example pages

1. **KPI Overview** – StatCards, summary cards, placeholder charts  
2. **List + Filters + Table** – DataToolbar, FilterChips, sortable Table, Pagination, EmptyState  
3. **Details** – Order summary, timeline, comments  
4. **Settings** – Tabs (Profile, Notifications, Security), forms, Switch, Checkbox, Alert  
5. **Notifications** – Toasts (basic, translucent, stacking, placement, variants, custom action), Alerts (all variants, dismissible, custom background), Progress, Spinner (inspired by [Upbit UI Notifications](https://coderthemes.com/upbit/layouts/default/ui-notifications.html))  

## Scripts

- `npm run dev` – Start dev server  
- `npm run build` – Production build  
- `npm run preview` – Preview production build  
