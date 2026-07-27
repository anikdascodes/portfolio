import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-portfolio-domain.com',
  adapter: netlify(),
  integrations: [react(), keystatic(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['lucide-react']
    }
  }
});