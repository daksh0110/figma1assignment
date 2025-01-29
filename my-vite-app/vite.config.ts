import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src/', // Adjust this based on your project structure
    },
  },
  plugins: [react(), tailwindcss(),],
})
