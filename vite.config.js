import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/KAESZAR/e-plantShopping.git",

  plugins: [react()],
})
