// 直接替换整个文件内容，确保有合法导出（该文件本身是模块，补充完整代码）
import { register } from 'vite-plugin-pwa/client';

// 关键：无需额外export，该文件通过导入+执行代码，已被TS识别为模块（补充完整逻辑即可）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await register({
        scope: '/',
        swUrl: '/service-worker.js'
      });
      console.log('Service Worker registered successfully');
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  });
}

// 可选：添加一个空导出，强制TS识别为模块（防止个别场景识别异常）
export {};
