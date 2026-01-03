// src/components/HotRecipeCarousel/HotRecipeCarousel.tsx
import React, { useState, useEffect } from 'react';
import styles from './HotRecipeCarousel.module.css';
import { hotRecipes } from '@/utils/mockData';

const HotRecipeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播：每 4 秒切换
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hotRecipes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? hotRecipes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % hotRecipes.length);
  };

  if (hotRecipes.length === 0) return null;

  const currentRecipe = hotRecipes[currentIndex];

  return (
    <div className={styles.carousel}>
      {/* 当前轮播项 */}
      <div
        className={`${styles.slide} ${styles.active}`}
        style={{ backgroundImage: `url(${currentRecipe.cover})` }}
      >
        <div className={styles.content}>
          <h3>{currentRecipe.name}</h3>
          <p>{currentRecipe.desc}</p>
          <div className={styles.heat}>
            🔥 热度: {currentRecipe.heat.toFixed(1)}/10
          </div>
        </div>
      </div>

      {/* 左右控制按钮 */}
      <button className={`${styles.controls} ${styles.prev}`} onClick={prevSlide} aria-label="上一张">
        ‹
      </button>
      <button className={`${styles.controls} ${styles.next}`} onClick={nextSlide} aria-label="下一张">
        ›
      </button>

      {/* 底部指示器 */}
      <div className={styles.indicators}>
        {hotRecipes.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`跳转到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
};

export default HotRecipeCarousel;
