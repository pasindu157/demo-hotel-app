import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures assets load relatively on GitHub Pages under any subpath
  plugins: [
    react(),
    tailwindcss(),
  ],
})
