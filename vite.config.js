import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true  // this exposes the server on 0.0.0.0
  },
  preview: {
    host: true  // same for `vite preview`
  },
  plugins: [react()],
});
