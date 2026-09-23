/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette Direct References
        palette: {
          gold: '#FFC349',     // Honey / Saffron Gold
          indigo: '#525EA7',   // Royal Indigo
          sky: '#5FACD3',      // Sky Cerulean
          aqua: '#97DDE9',     // Soft Aqua
          'gold-light': '#FFF0D0',
          'gold-dark': '#E5A82E',
          'indigo-light': '#6B78C4',
          'indigo-dark': '#384177',
          'sky-light': '#D6EFFB',
          'sky-dark': '#428CB1',
          'aqua-light': '#E6F8FB',
          'aqua-dark': '#6EC3D2',
        },
        // 1. Primary Brand Scale -> Driven by Royal Indigo (#525EA7)
        brand: {
          50: '#f2f4fc',
          100: '#e3e7f8',
          200: '#cbd4f2',
          300: '#a7b8e7',
          400: '#7c94d9',
          500: '#525EA7', // Royal Indigo Palette (#525EA7)
          600: '#434c92',
          700: '#383e7a',
          800: '#313665',
          900: '#2c3055',
          950: '#1a1c35',
        },
        // 2. Education / Warm Accent Scale -> Driven by Honey Gold (#FFC349)
        edu: {
          50: '#fffbf0',
          100: '#fef4db',
          200: '#fde7b3',
          300: '#fcd684',
          400: '#fbca5d',
          500: '#FFC349', // Honey Gold Palette (#FFC349)
          600: '#e5a52e',
          700: '#ba7d1f',
          800: '#955e1d',
          900: '#7b4c1c',
          950: '#452709',
        },
        // 3. Environment Scale -> Driven by Sky Cerulean (#5FACD3) & Soft Aqua (#97DDE9)
        eco: {
          50: '#f3fbfd',
          100: '#e3f6fa',
          200: '#cbeff6',
          300: '#97DDE9', // Soft Aqua Palette (#97DDE9)
          400: '#7bcbe0',
          500: '#5FACD3', // Sky Cerulean Palette (#5FACD3)
          600: '#4795bc',
          700: '#3a7999',
          800: '#33657e',
          900: '#2d5368',
          950: '#17303f',
        },
        // Override default Tailwind 'amber' with Palette Gold (#FFC349)
        amber: {
          50: '#fffbf0',
          100: '#fef4db',
          200: '#fde7b3',
          300: '#fcd684',
          400: '#fbca5d',
          500: '#FFC349',
          600: '#e5a52e',
          700: '#ba7d1f',
          800: '#955e1d',
          900: '#7b4c1c',
          950: '#452709',
        },
        // Override default Tailwind 'emerald' with Palette Indigo & Sky/Aqua (NO MORE GREEN!)
        emerald: {
          50: '#f3fbfd',
          100: '#e3f6fa',
          200: '#cbeff6',
          300: '#97DDE9', // Soft Aqua
          400: '#7bcbe0',
          500: '#5FACD3', // Sky Cerulean
          600: '#525EA7', // Royal Indigo
          700: '#434c92',
          800: '#383e7a',
          900: '#2c3055',
          950: '#1a1c35',
        },
        // Override default Tailwind 'teal' with Soft Aqua & Sky Cerulean
        teal: {
          50: '#f3fbfd',
          100: '#e3f6fa',
          200: '#cbeff6',
          300: '#97DDE9',
          400: '#7bcbe0',
          500: '#5FACD3',
          600: '#4795bc',
          700: '#3a7999',
          800: '#33657e',
          900: '#2d5368',
          950: '#17303f',
        },
        pune: {
          dark: '#161936',   // Deep Indigo Slate
          accent: '#FFC349', // Palette Honey Gold
          indigo: '#525EA7', // Palette Royal Indigo
          sky: '#5FACD3',    // Palette Sky Cerulean
          aqua: '#97DDE9',   // Palette Soft Aqua
          chalk: '#fafbfc',  // Crisp Cool Porcelain Base
          stone: '#dbe4f0',  // Crisp Palette Border
        }
      },
      backgroundImage: {
        'gradient-palette-cool': 'linear-gradient(135deg, #525EA7 0%, #5FACD3 50%, #97DDE9 100%)',
        'gradient-palette-warm': 'linear-gradient(135deg, #FFC349 0%, #f97316 100%)',
        'gradient-palette-contrast': 'linear-gradient(135deg, #FFC349 0%, #525EA7 100%)',
        'gradient-palette-radial': 'radial-gradient(circle, #97DDE933 0%, transparent 70%)',
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
