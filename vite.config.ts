import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from "path";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@pages": path.resolve(__dirname, "src/pages"),
        },
    },
  server: {
        host: true,
        strictPort: true,
        port: 4006,
  },
})
