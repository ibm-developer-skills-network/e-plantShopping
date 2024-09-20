import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping",
  plugins: [react()],
  build: {
    outDir: 'dist' // Ensure this points to the correct directory
  }
})
