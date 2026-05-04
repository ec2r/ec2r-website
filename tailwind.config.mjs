/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ── Tokens sémantiques (pilotés par CSS vars dans global.css) ──
        surface:           'rgb(var(--surface) / <alpha-value>)',
        'surface-alt':     'rgb(var(--surface-alt) / <alpha-value>)',
        'surface-raised':  'rgb(var(--surface-raised) / <alpha-value>)',
        'surface-inverse': 'rgb(var(--surface-inverse) / <alpha-value>)',
        ink:               'rgb(var(--ink) / <alpha-value>)',
        'ink-strong':      'rgb(var(--ink-strong) / <alpha-value>)',
        'ink-muted':       'rgb(var(--ink-muted) / <alpha-value>)',
        'ink-subtle':      'rgb(var(--ink-subtle) / <alpha-value>)',
        'ink-faint':       'rgb(var(--ink-faint) / <alpha-value>)',
        'ink-disabled':    'rgb(var(--ink-disabled) / <alpha-value>)',
        'ink-inverse':     'rgb(var(--ink-inverse) / <alpha-value>)',
        'border-token':    'rgb(var(--border) / <alpha-value>)',
        'border-strong':   'rgb(var(--border-strong) / <alpha-value>)',
        'border-subtle':   'rgb(var(--border-subtle) / <alpha-value>)',
        'border-inverse':  'rgb(var(--border-inverse) / <alpha-value>)',
        accent:            'rgb(var(--accent) / <alpha-value>)',
        'accent-strong':   'rgb(var(--accent-strong) / <alpha-value>)',
        'accent-soft':     'rgb(var(--accent-soft) / <alpha-value>)',
        'accent-on':       'rgb(var(--accent-on) / <alpha-value>)',
        'brand-anchor':    'rgb(var(--brand-anchor) / <alpha-value>)',
        navy: {
          50: '#eef3ff',
          100: '#d9e4ff',
          200: '#bccfff',
          300: '#8db1ff',
          400: '#5788ff',
          500: '#2f5fff',
          600: '#1a40f5',
          700: '#122de0',
          800: '#1526b6',
          900: '#002060',
          950: '#0a1330',
        },
        energy: {
          red: '#DC2626',
          yellow: '#EAB308',
          beige: '#C9A56E',
          green: '#22C55E',
          dark: '#166534',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'battery-fill': 'batteryFill 2s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        batteryFill: {
          '0%': { height: '0%' },
          '100%': { height: 'var(--fill-height, 100%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
