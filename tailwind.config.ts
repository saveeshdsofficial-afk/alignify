import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0f1117', soft: '#3d4450' },
        graphite: { DEFAULT: '#1e2635', 2: '#2a3347', soft: '#3a4460' },
        slate: { DEFAULT: '#6b7388', soft: '#9ca3b8' },
        teal: {
          DEFAULT: '#21a89f',
          bright: '#3eccc4',
          pale: '#7dddd8',
          tint: '#e8f6f4',
        },
        line: '#dfe2e6',
        canvas: { DEFAULT: '#f7f8f9', soft: '#eef0f3' },
        paper: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-gabarito)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1200px',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(62,204,196,0.5)' },
          '70%': { boxShadow: '0 0 0 10px rgba(62,204,196,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(62,204,196,0)' },
        },
        'pulse-chip': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.2s infinite',
        'pulse-chip': 'pulse-chip 1.8s infinite',
      },
    },
  },
  plugins: [],
}
export default config
