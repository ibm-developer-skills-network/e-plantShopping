import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
base: "/e-plantShopping",
export default defineConfig({
  base: "/shoppingreact",
  plugins: [react()],
})
