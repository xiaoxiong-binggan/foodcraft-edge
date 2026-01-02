import { defineConfig, loadEnv } from 'vite'; // 新增 loadEnv 导入
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// 注意：使用 defineConfig 的回调函数形式，才能通过 loadEnv 加载环境变量
export default defineConfig(({ mode }) => {
  // 手动加载 .env 文件中的环境变量（解决 import.meta.env 未定义问题）
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      // PWA 配置：结合ESA边缘缓存实现离线访问
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: '美味工坊 FoodCraft',
          short_name: 'FoodCraft',
          description: '边缘加速的AI美食创作社区（演示版）',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#f87171',
          icons: [
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{html,js,css,ico,png,svg,mp3}'],
          // 边缘缓存联动策略
          runtimeCaching: [
            {
              urlPattern: /^\/api\/edge\/.*/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'edge-api-cache',
                cacheableResponse: { statuses: [200] },
                expiration: { maxAgeSeconds: 3600 }
              }
            },
            {
              urlPattern: /^\/assets\/.*/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'edge-assets-cache',
                cacheableResponse: { statuses: [200] },
                expiration: { maxAgeSeconds: 86400 * 7 }
              }
            }
          ]
        },
        srcDir: 'src',
        filename: 'service-worker.ts'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    server: {
      port: 3000,
      open: true,
      // 本地代理：使用手动加载的 env 变量，避免 undefined 报错
      proxy: {
        '/api/edge': {
          // 若 env.VITE_ESA_PAGES_DOMAIN 不存在，给默认值，防止报错
          target: env.VITE_ESA_PAGES_DOMAIN || 'https://foodcraft-edge.esa-pages.com',
          changeOrigin: true,
          rewrite: (path) => path
        }
      }
    }
  };
});
