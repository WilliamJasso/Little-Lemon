import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base for GitHub Pages project site. Update if repo name changes.
export default defineConfig({
  base: '/Little-Lemon/',
  plugins: [react()],
})
