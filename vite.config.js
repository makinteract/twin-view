import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), commonjs()],

  build: {
    outDir: 'public',
  },
});
