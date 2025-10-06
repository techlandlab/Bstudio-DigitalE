import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 DODAJ LUB ZMIEŃ TĘ LINIĘ!
  base: '/Bstudio-DigitalE/', 
  plugins: [react()],
})