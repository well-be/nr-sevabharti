import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://nr-sevabharti.github.io',
  base: process.env.BASE_PATH || '',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'mr',
    locales: ['mr', 'en', 'hi'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
