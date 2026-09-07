import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// site: domínio final definido com o Erico (2026-09) — dermelab.art.
// Usado para gerar URLs absolutas no sitemap e nas meta tags OG.
export default defineConfig({
  site: 'https://dermelab.art',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
