// src/pages/AIGeneratorPage.tsx
import React from 'react';
// 如果你有全局图标库（比如用 SVG），可引入；否则用 emoji 或文字代替
// 这里用 emoji 代替 Robot 图标，超轻量！
import styles from './AIGeneratorPage.module.css'; // 建议用 CSS 模块管理样式

const AIGeneratorPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          🤖 AI美食漫画工坊 {/* 用 emoji 替代图标 */}
        </h2>
        <p className={styles.paragraph}>
          正在开发中... 敬请期待！
        </p>
        <p className={styles.secondary}>
          功能：将菜谱转换为漫画风格视频
        </p>
      </div>
    </div>
  );
};

export default AIGeneratorPage;
