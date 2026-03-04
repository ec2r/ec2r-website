import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://draft.methode-ec2r.com',
  integrations: [tailwind()],
  output: 'static',
});
