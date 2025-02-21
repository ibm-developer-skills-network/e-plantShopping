// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/plantShopping/', // Make sure this matches your repo name exactly
  plugins: [react()]
})
