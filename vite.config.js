import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/event-manager/",  // Emri i projektit nga GitHub
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});
