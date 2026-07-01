/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e7edf6',
        },
        base: {
          900: '#05060a',
          800: '#0a0c14',
          700: '#0f1220',
          600: '#161a2b',
        },
        neon: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          purple: '#a855f7',
          pink: '#ec4899',
          green: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Sora', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px -4px rgba(34, 211, 238, 0.45)',
        'glow-violet': '0 0 30px -6px rgba(139, 92, 246, 0.55)',
        card: '0 10px 40px -12px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12), transparent 55%)',
        'radial-fade':
          'radial-gradient(ellipse at center, rgba(139,92,246,0.15), transparent 70%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite',
      },
    },
  },
  plugins: [],
};
