import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      name: 'ilw-content',
      entry: 'ilw-content.js',
      fileName: 'ilw-content',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
           if (chunkInfo.name === 'style.css') return 'ilw-content.css';
        }
      }
    },
  },
  server: {
    hmr: false
  }
})
