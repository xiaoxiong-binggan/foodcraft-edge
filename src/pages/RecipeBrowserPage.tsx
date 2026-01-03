// src/pages/RecipeBrowserPage.tsx
import React from 'react';
import styles from './RecipeBrowserPage.module.css';

const RecipeBrowserPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          🚀 边缘菜谱速查助手
        </h2>
        <p className={styles.mainText}>
          正在开发中... 敬请期待！
        </p>
        <p className={styles.secondary}>
          功能：离线可用的菜谱浏览器
        </p>
      </div>
    </div>
  );
};

export default RecipeBrowserPage;
