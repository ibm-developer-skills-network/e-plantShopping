// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// اسم repo على GitHub
const repoName = '/e-plantShopping/'

export default defineConfig({
  plugins: [react()],
  base: repoName, // هذا مهم عشان GitHub Pages يعرف مسار الملفات
})
