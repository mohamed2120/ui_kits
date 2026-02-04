/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
