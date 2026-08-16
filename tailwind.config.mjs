/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefcf5',  // Vibrant soft mint chalk
          100: '#d4f7e4',
          200: '#a7eed0',
          300: '#6ee0b2',
          400: '#34cb90',
          500: '#10b981', // Modern Vibrant Matte Emerald Green
          600: '#059669', // Rich Vibrant Emerald
          700: '#047857',
          800: '#065f46',
          900: '#022c22',
        },
        edu: {
          50: '#fff7ed',  // Warm vibrant peach-chalk
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Vibrant Matte Sunset Coral / Tangerine
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
        },
        eco: {
          50: '#f0fdfa',  // Modern electric teal-chalk
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Vibrant Matte Modern Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
        },
        pune: {
          dark: '#0f172a',   // Modern Slate Navy Charcoal
          accent: '#ff5722', // Vibrant Modern Matte Saffron Vermilion
          indigo: '#6366f1', // Fresh Accent Indigo
          chalk: '#fafafa',  // Crisp Vibrant Porcelain Base
          stone: '#e2e8f0',  // Crisp Matte Border
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '"Noto Sans Devanagari"', 'sans-serif'],
      },
      boxShadow: {
        'thin': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)',
        'thin-md': '0 3px 8px -1px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.03)',
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.03)',
        'sm': '0 1px 3px 0 rgba(15, 23, 42, 0.04)',
        'md': '0 2px 6px -1px rgba(15, 23, 42, 0.05)',
        'lg': '0 4px 12px -2px rgba(15, 23, 42, 0.06)',
        'xl': '0 6px 16px -3px rgba(15, 23, 42, 0.07)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
