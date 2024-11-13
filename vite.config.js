import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/shoppingreact",
  base: "/e-plantShopping/shoppingreact",
  plugins: [react()],
})
