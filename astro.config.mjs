// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// De site draait op zijn eigen domein, dus geen basispad meer.
// Het bestand public/CNAME vertelt GitHub Pages welk domein dat is.
export default defineConfig({
  site: 'https://playerpath.nl',

  vite: {
    plugins: [tailwindcss()],
  },
});
