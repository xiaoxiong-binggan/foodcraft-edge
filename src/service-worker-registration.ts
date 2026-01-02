// 移除无效的 register 导入，使用 vite-plugin-pwa 内置注册逻辑
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // 直接注册 service-worker，无需手动导入 register
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
