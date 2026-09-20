import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Il sito viene pubblicato come "project page" di GitHub Pages, sotto
  // https://<owner>.github.io/QSMGG2026_dirigente/ : la base deve combaciare
  // con il nome del repository perché i percorsi degli asset si risolvano correttamente.
  base: '/QSMGG2026_dirigente/',
  plugins: [react()],
})
