import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('wc-smart-table')
        }
      }
    })
  ],
  build: {
    lib: {
      entry: './src/main.ce.js',
      name: 'wc-smart-table',
      fileName: 'wc-smart-table'
    }
  },
  define: {
    'process.env': process.env
  }
})
