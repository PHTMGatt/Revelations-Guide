import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,           // Allow access from network (important for dev on Render)
    port: 5173,           // Default dev port (can change if you want)
  },
  preview: {
    host: true,
    port: 10000,          // Required for Render preview
    allowedHosts: ['.onrender.com'], // Allow Render subdomains
  },
  plugins: [react()],
});
