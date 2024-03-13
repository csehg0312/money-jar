import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        // Add any postcss plugins here
      ]
    }
  },
  build: {
    rollupOptions: {
      external: ['sweetalert2/dist/sweetalert2.min.css']
    },
  }
})
