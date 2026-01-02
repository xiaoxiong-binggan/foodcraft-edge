import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// 只需导入注册文件，无需解构 register（避免报错）
import './service-worker-registration.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 移除对 serviceWorkerRegistration.register() 的调用（已在注册文件内部自动执行）
