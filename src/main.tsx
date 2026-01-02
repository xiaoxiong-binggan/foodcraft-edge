import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import * as serviceWorkerRegistration from './service-worker-registration.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 注册Service Worker，实现PWA离线能力
serviceWorkerRegistration.register();
