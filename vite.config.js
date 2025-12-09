import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,    // Allow access from other devices (phone)
    port: 5173     // Optional: ensure the port is fixed
  } ,
    build: {
    outDir: 'dist',
    sourcemap: false,  // Disable for production
  }
})
