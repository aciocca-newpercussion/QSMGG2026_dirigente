import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Cloudflare Pages serve il sito dalla root del proprio dominio
  // (https://<progetto>.pages.dev/ o un dominio custom), quindi la base resta '/'.
  plugins: [react()],
})
