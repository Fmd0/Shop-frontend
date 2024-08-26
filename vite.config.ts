import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cart.html"),
        commodity: resolve(__dirname, "commodity.html"),
        like: resolve(__dirname, "like.html"),
        market: resolve(__dirname, "market.html"),
        recentlyViewed: resolve(__dirname, "recently-viewed.html"),
        search: resolve(__dirname, "search.html"),
      }
    }
  }
})
