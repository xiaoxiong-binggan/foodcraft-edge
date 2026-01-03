import React from 'react';
import styles from './Home.module.css';
import EdgeStatus from '@/components/EdgeStatus/EdgeStatus';
import OfflineTip from '@/components/OfflineTip/OfflineTip';
import RecipeCard from '@/components/Common/RecipeCard';
import { mockRecipes } from '@/utils/mockData';
import { Link } from 'react-router-dom';

// 首页（边缘加速展示）
const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>美味工坊 FoodCraft</h1>
        <div className={styles.edgeInfo}>
          <EdgeStatus />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.banner}>
          <h2>边缘加速每一味，AI温暖每一餐</h2>
          <p>全球低延迟访问 · 离线可用 · AI菜谱生成</p>
          <OfflineTip />
          <div className={styles.btnGroup}>
            <Link to="/ai-video" className={styles.btn}>生成AI菜谱视频</Link>
            <Link to="/translate" className={styles.btn}>边缘实时翻译演示</Link>
            <Link to="/publish" className={styles.btn}>发布菜谱</Link> {/* 新增：发布菜谱按钮 */}
            <Link to="/user" className={styles.btn}>个人中心</Link>
          </div>
        </div>
        <div className={styles.recipeList}>
          <h3 className={styles.listTitle}>边缘缓存热门菜谱（离线可看）</h3>
          <div className={styles.cardList}>
            {mockRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>美味工坊 FoodCraft © 2026 | 阿里云ESA Pages边缘开发大赛参赛作品</p>
      </footer>
    </div>
  );
};

export default Home;
