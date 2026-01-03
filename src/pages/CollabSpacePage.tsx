// src/pages/CollabSpacePage.tsx
import React from 'react';
import styles from './CollabSpacePage.module.css';

const CollabSpacePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          👥 实时协作美食空间
        </h2>
        <p className={styles.mainText}>
          正在开发中... 敬请期待！
        </p>
        <p className={styles.secondary}>
          功能：多人实时编辑菜谱
        </p>
      </div>
    </div>
  );
};

export default CollabSpacePage;
