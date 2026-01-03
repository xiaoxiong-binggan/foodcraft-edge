// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

/**
 * Vite 配置文件
 * - 支持 PWA 离线缓存（Service Worker）
 * - 支持环境变量加载（.env 文件）
 * - 配置别名、构建输出、本地开发服务器等
 */
export default defineConfig(({ mode }) => {
  // 加载当前模式（development / production）下的 .env 文件
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      // PWA 插件：实现离线访问 + 应用安装能力
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
          // ✅ 关键修复：排除 CSS Modules 文件，防止构建时解析 ?used 失败
          globIgnores: ['**/*.module.css'],
          // 静态资源预缓存（不包含 .module.css）
          globPatterns: ['**/*.{html,js,css,ico,png,svg,jpg,jpeg,gif,mp3}'],
          // 运行时缓存策略（适配 ESA 边缘 API）
          runtimeCaching: [
            {
              urlPattern: /^\/api\/edge\/.*/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'edge-api-cache',
                cacheableResponse: { statuses: [200] },
                expiration: { maxAgeSeconds: 3600 } // 缓存 1 小时
              }
            },
            {
              urlPattern: /^\/assets\/.*/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'edge-assets-cache',
                cacheableResponse: { statuses: [200] },
                expiration: { maxAgeSeconds: 86400 * 7 } // 缓存 7 天
              }
            }
          ]
        }
        // 🔥 注意：已移除 srcDir 和 filename，使用默认 Service Worker
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
          assetFileNames: (assetInfo) => {
            // 按文件类型分类输出，保持结构清晰
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/css/[name]-[hash].[ext]';
            } else if (/\.(png|jpe?g|gif|svg|ico)$/.test(assetInfo.name || '')) {
              return 'assets/images/[name]-[hash].[ext]';
            } else if (/\.(mp3|wav|ogg)$/.test(assetInfo.name || '')) {
              return 'assets/media/[name]-[hash].[ext]';
            }
            return 'assets/other/[name]-[hash].[ext]';
          }
        }
      }
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api/edge': {
          target: env.VITE_ESA_PAGES_DOMAIN || 'https://foodcraft-edge.esa-pages.run',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/edge/, '') // 可选：重写路径
        }
      }
    }
  };
});
