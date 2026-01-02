// 移除无效的 register 导入，使用原生 Service Worker 注册逻辑
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // 原生注册逻辑，无需 vite-plugin-pwa 的 register 方法
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/'
      });
      console.log('Service Worker registered successfully:', registration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  });
}

// 空导出，确保 TS 识别为模块
export {};
