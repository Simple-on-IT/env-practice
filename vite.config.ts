import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    'process.env.APP_VARIANT': JSON.stringify(
      process.env.VITE_APP_VARIANT || 'AUTUMN'
    ),
    // 'process.env.APP_LANGUAGE': 
  },
})

