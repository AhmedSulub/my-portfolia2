/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background) / <alpha-value>)',
        surface: {
          DEFAULT: 'hsl(var(--color-surface) / <alpha-value>)',
          elevated: 'hsl(var(--color-surface-elevated) / <alpha-value>)',
          border: 'hsl(var(--color-surface-border) / <alpha-value>)',
        },
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
          hover: 'hsl(var(--color-accent-hover) / <alpha-value>)',
          muted: 'hsl(var(--color-accent-muted) / <alpha-value>)',
          light: 'hsl(var(--color-accent-light) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '120px',
        'section-mobile': '80px',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)',
        'subtle-light': '0 1px 2px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.08)',
        card: '0 1px 3px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.15)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.25), 0 12px 32px rgba(0,0,0,0.2)',
        'card-hover-light': '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.12)',
        glow: '0 0 20px rgba(59,130,246,0.3)',
        'glow-lg': '0 0 40px rgba(59,130,246,0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typewriter': 'typewriter 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-start infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(59,130,246,0.5)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          from: { borderRightColor: 'transparent' },
          '50%': { borderRightColor: 'rgb(59, 130, 246)' },
          to: { borderRightColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
