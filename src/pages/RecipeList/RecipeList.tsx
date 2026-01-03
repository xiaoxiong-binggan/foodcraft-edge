// src/pages/RecipeList/RecipeList.tsx
import React from 'react';
import styles from './RecipeList.module.css';
import RecipeCard from '@/components/Common/RecipeCard';
import { mockRecipes } from '@/utils/mockData';
import { Link } from 'react-router-dom';

const RecipeList: React.FC = () => {
  return (
    <div className={styles.recipeListPage}>
      <header className={styles.header}>
        <h1>热门菜谱大全</h1>
        <Link to="/" className={styles.backBtn}>← 返回首页</Link>
      </header>
      <div className={styles.cardGrid}>
        {mockRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
