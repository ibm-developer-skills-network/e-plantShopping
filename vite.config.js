import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/',  // Make sure this matches your repo name exactly
  plugins: [react()],
});
