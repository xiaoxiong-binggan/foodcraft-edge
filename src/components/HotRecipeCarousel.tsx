import React, { useState, useEffect } from 'react';
import styles from './HotRecipeCarousel.module.css';
import { hotRecipes } from '@/utils/mockData';

const HotRecipeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = hotRecipes.length;

  // 自动轮播（3秒切换一次）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  // 手动切换（上一张）
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // 手动切换（下一张）
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>热门推荐</h2>
      <p className={styles.subtitle}>精选最受欢迎的美食菜谱</p>
      
      <div className={styles.carouselWrapper}>
        {/* 左箭头 */}
        <button className={styles.arrowBtn} onClick={prevSlide}>
          ←
        </button>
        
        {/* 轮播内容 */}
        <div className={styles.slideContent}>
          <div 
            className={styles.slide}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {hotRecipes.map((recipe) => (
              <div key={recipe.id} className={styles.recipeCard}>
                {/* 菜谱图片 */}
                <div className={styles.coverWrap}>
                  <span className={styles.topTag}>TOP推荐</span>
                  <img 
                    src={recipe.cover} 
                    alt={recipe.name} 
                    className={styles.coverImg}
                  />
                </div>
                {/* 菜谱信息 */}
                <div className={styles.infoWrap}>
                  <h3 className={styles.recipeName}>{recipe.name}</h3>
                  <p className={styles.desc}>{recipe.desc}</p>
                  <div className={styles.meta}>
                    <span>菜系: {recipe.cuisine}</span>
                    <span>热度: {recipe.heat}</span>
                    <span>离线: {recipe.offline ? "可用" : "不可用"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 右箭头 */}
        <button className={styles.arrowBtn} onClick={nextSlide}>
          →
        </button>
      </div>

      {/* 轮播指示器（小圆点） */}
      <div className={styles.indicators}>
        {hotRecipes.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicatorBtn} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotRecipeCarousel;
