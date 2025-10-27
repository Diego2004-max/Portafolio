import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '7.5': '1.875rem', // para tu px-7.5
        '15': '3.75rem',   // para tu mx-15
      },
      borderRadius: {
        '4xl': '2rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
    },
  },
  plugins: [],
}
export default config
