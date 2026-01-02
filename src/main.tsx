import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// 直接导入，无需调用register
import './service-worker-registration.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
