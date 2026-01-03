// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

/**
 * 自定义插件：修复 vite-plugin-pwa 错误添加 ?used 导致的解析失败
 */
function fixCssModuleUsed() {
  return {
    name: 'fix-css-module-used',
    resolveId(source) {
      // 如果路径以 .module.css?used 结尾，去掉 ?used
      if (source.endsWith('.module.css?used')) {
        return source.replace('?used', '');
      }
      return null;
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      // ✅ 关键：先加载修复插件，再加载 PWA
      fixCssModuleUsed(),
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
            { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
          ]
        },
        workbox: {
          globIgnores: ['**/*.module.css'],
          globPatterns: ['**/*.{html,js,css,ico,png,svg,jpg,jpeg,gif,mp3}'],
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
        }
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
            if (assetInfo.name?.endsWith('.css')) return 'assets/css/[name]-[hash].[ext]';
            if (/\.(png|jpe?g|gif|svg|ico)$/.test(assetInfo.name || '')) return 'assets/images/[name]-[hash].[ext]';
            if (/\.(mp3|wav|ogg)$/.test(assetInfo.name || '')) return 'assets/media/[name]-[hash].[ext]';
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
          rewrite: (path) => path.replace(/^\/api\/edge/, '')
        }
      }
    }
  };
});
