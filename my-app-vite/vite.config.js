import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Tailwind should be configured via PostCSS and tailwind.config.js, not as a Vite plugin here.
// https://vite.dev/config/
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()]
})
