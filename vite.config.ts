import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [],
    css: {
    preprocessorOptions: {
      scss: {
            additionalData: `@use "./src/styles/variables.scss" as *;`,
      }
    }
  }
})