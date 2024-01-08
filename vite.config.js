import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 强制预构建插件包
  optimizeDeps: {
    // include: ["axios"],
  },
  // 打包配置
  build: {
    target: "modules",
    outDir: "dist", 
    assetsDir: "assets", 
    minify: "terser", 
  },
  // 本地运行配置，及反向代理配置
  server: {
    host: '192.168.1.130', 
    port: 8080, 
    hotOnly: false,
    strictPort: false,
    cors: true,
    open: true,
    proxy: {
      "/api": {
        // target: "192.168.1.130:8080", //代理接口
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
