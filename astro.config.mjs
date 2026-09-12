// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// De site draait op zijn eigen domein, dus geen basispad meer.
// Het bestand public/CNAME vertelt GitHub Pages welk domein dat is.
export default defineConfig({
  site: 'https://playerpath.nl',

  // De sitemap vertelt Google welke pagina's er zijn. De bedankpagina hoort
  // daar niet in: die is alleen zinvol na het versturen van het formulier.
  integrations: [
    sitemap({
      filter: (pagina) => !pagina.includes('/bedankt') && !pagina.includes('/menu-opties'),
      // Zonder lastmod moet Google zelf gokken of er iets veranderd is.
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
