# Using OrganicDash UI in your project

You can use this UI kit in another app in three ways: **local path**, **Git**, or **npm** (after publishing).

---

## 1. Install the kit

### Option A: Local folder (same machine)

If the kit lives next to your project (e.g. `../ui_kits`):

```bash
cd /path/to/your-project
npm install ../ui_kits
```

Or in `package.json`:

```json
{
  "dependencies": {
    "organicdash-ui": "file:../ui_kits"
  }
}
```

### Option B: Git repository

Using this repo ([mohamed2120/ui_kits](https://github.com/mohamed2120/ui_kits)):

```bash
npm install git+https://github.com/mohamed2120/ui_kits.git
```

Or in `package.json`:

```json
{
  "dependencies": {
    "organicdash-ui": "github:mohamed2120/ui_kits"
  }
}
```

You can pin to a branch or tag, e.g. `github:mohamed2120/ui_kits#main`.

### Option C: Publish to npm (later)

After publishing as e.g. `@yourscope/organicdash-ui`:

```bash
npm install @yourscope/organicdash-ui
```

---

## 2. Configure your project

The kit uses **React**, **TypeScript**, **Tailwind CSS**, and path aliases. Your project should use the same stack.

### 2.1 Vite alias

In `vite.config.ts` (or `vite.config.js`), resolve the kit so imports like `@/ui/Button` work from the kit’s source:

```ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Resolve kit internals so its @/ imports work
      '@/ui': path.resolve(__dirname, 'node_modules/organicdash-ui/src/ui'),
      '@/lib': path.resolve(__dirname, 'node_modules/organicdash-ui/src/lib'),
    },
  },
})
```

If you prefer to import from the package name only, add:

```ts
'organicdash-ui': path.resolve(__dirname, 'node_modules/organicdash-ui/src'),
```

Then in your app you can do:

```ts
import { Button, Card } from 'organicdash-ui'
```

and ensure your **TypeScript** and **bundler** resolve `organicdash-ui` to `node_modules/organicdash-ui/src` (e.g. `tsconfig` paths, or the alias above).

### 2.2 Tailwind: theme and content

The kit’s components use Tailwind classes that rely on **CSS variables** and **theme extensions**. In your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Scan the kit so its Tailwind classes are included
    './node_modules/organicdash-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        organic: {
          cream: 'var(--organic-cream)',
          sand: 'var(--organic-sand)',
          stone: 'var(--organic-stone)',
          sage: 'var(--organic-sage)',
          mint: 'var(--organic-mint)',
          forest: 'var(--organic-forest)',
          ocean: 'var(--organic-ocean)',
          lavender: 'var(--organic-lavender)',
          blossom: 'var(--organic-blossom)',
          clay: 'var(--organic-clay)',
          ink: 'var(--organic-ink)',
          paper: 'var(--organic-paper)',
          surface: 'var(--organic-surface)',
          border: 'var(--organic-border)',
          muted: 'var(--organic-muted)',
        },
      },
      borderRadius: {
        'organic': 'var(--organic-radius)',
        'organic-lg': 'var(--organic-radius-lg)',
        'organic-xl': 'var(--organic-radius-xl)',
      },
      boxShadow: {
        'organic': 'var(--organic-shadow)',
        'organic-md': 'var(--organic-shadow-md)',
        'organic-lg': 'var(--organic-shadow-lg)',
      },
    },
  },
  plugins: [],
}
```

### 2.3 CSS variables and base styles

The kit expects CSS variables (e.g. `--organic-cream`, `--organic-sage`) to be set on a root or wrapper. It also uses a `.focus-ring` utility.

**Option 1 – Use the kit’s theme and base CSS**

In your main CSS file (e.g. `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: use the kit’s base (font, focus ring) */
@layer base {
  :root {
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    border-color: var(--organic-border, #E2E8F0);
  }
  .focus-ring {
    @apply focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
  }
}
```

Then in your app root (e.g. `main.tsx` or `App.tsx`), wrap the app with the kit’s **ThemeProvider** so the variables are applied:

```tsx
import { ThemeProvider } from 'organicdash-ui'  // or from '@/ui/theme/ThemeProvider' if using alias
import App from './App'
import './index.css'

root.render(
  <ThemeProvider defaultMode="light">
    <App />
  </ThemeProvider>
)
```

**Option 2 – Set variables yourself**

If you don’t use `ThemeProvider`, define the same variables in your own CSS (see `src/ui/theme/tokens.ts` in the kit for names and default values).

---

## 3. Use components

With the alias and theme in place:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from 'organicdash-ui'
// or, if you only alias @/ to the kit’s src:
// import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from '@/ui'

export function MyPage() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Click me</Button>
        <Badge variant="success">Done</Badge>
      </CardContent>
    </Card>
  )
}
```

For **Toast**, wrap the app (or a parent) with `ToastProvider` and use `useToast()`:

```tsx
import { ToastProvider, useToast } from 'organicdash-ui'

// In root:
<ToastProvider>
  <App />
</ToastProvider>
```

---

## 4. Dependencies

Your project should have:

- `react` and `react-dom` (>= 18; the kit lists them as peer dependencies)
- `tailwindcss`, `postcss`, `autoprefixer`
- If you use kit components that need them: `react-router-dom`, `recharts`, `clsx`, `tailwind-merge`

Install any missing ones:

```bash
npm install react react-dom tailwind-merge clsx
# Optional, for AppShell nav / Charts:
npm install react-router-dom recharts
```

---

## 5. Summary checklist

- [ ] Install the kit (`file:../ui_kits`, Git, or npm).
- [ ] Add Vite (or bundler) alias so `organicdash-ui` or `@/ui` resolves to the kit’s `src`.
- [ ] Add Tailwind `content` for `node_modules/organicdash-ui/src/**/*.{js,ts,jsx,tsx}` and extend `theme` with `organic` colors, radius, and shadow.
- [ ] In your CSS, set the `--organic-*` variables (or use the kit’s base styles) and add `.focus-ring` if you use it.
- [ ] Wrap the app in `ThemeProvider` (and `ToastProvider` if you use toasts).
- [ ] Import components from `organicdash-ui` (or your chosen alias) and use them in your pages.

For the full list of components and props, see the kit’s **README** and the example app under `src/pages/examples/`.
