import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<your-repo-name>/',  // Replace <your-repo-name> with your actual repo name
  plugins: [react()],
});

