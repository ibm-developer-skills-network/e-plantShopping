import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // CORRECTED: Must match the repository name exactly: e-plantShopping
  base: "/e-plantShopping/", 
  plugins: [react()],
})