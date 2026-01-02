import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
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
    // 本地代理（无API依赖，可注释，也可保留）
    proxy: {
      '/api/edge': {
        target: import.meta.env.VITE_ESA_PAGES_DOMAIN,
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  }
});
