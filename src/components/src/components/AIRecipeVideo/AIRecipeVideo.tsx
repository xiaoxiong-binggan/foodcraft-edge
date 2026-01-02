import React, { useState } from 'react';
import styles from './AIRecipeVideo.module.css';
import { useAIRecipe } from '@/hooks/useAIRecipe';
import OfflineTip from '../OfflineTip/OfflineTip';

// AI菜谱视频生成组件（演示版，无API依赖）
const AIRecipeVideo: React.FC = () => {
  const [recipeText, setRecipeText] = useState<string>('番茄炒蛋，简单易做');
  const [videoStyle, setVideoStyle] = useState<string>('动漫');
  const { loading, recipe, error, edgeNode, generateAIRecipe } = useAIRecipe();

  // 生成演示视频
  const handleGenerate = async () => {
    await generateAIRecipe(recipeText, 'demo_user_001');
  };

  return (
    <div className={styles.aiVideoContainer}>
      <h3 className={styles.title}>AI漫画菜谱视频生成（演示版）</h3>
      <OfflineTip />
      <div className={styles.formItem}>
        <label className={styles.label}>菜谱描述：</label>
        <textarea
          className={styles.textarea}
          value={recipeText}
          onChange={(e) => setRecipeText(e.target.value)}
          placeholder="输入菜谱描述，如：番茄炒蛋，简单易做"
          rows={4}
        />
      </div>
      <div className={styles.formItem}>
        <label className={styles.label}>视频风格：</label>
        <select
          className={styles.select}
          value={videoStyle}
          onChange={(e) => setVideoStyle(e.target.value)}
        >
          <option value="动漫">动漫风格</option>
          <option value="美漫">美漫风格</option>
          <option value="水彩">水彩风格</option>
          <option value="写实">写实风格</option>
        </select>
      </div>
      <div className={styles.formItem}>
        <button
          className={styles.generateBtn}
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? '生成中...' : '生成菜谱+视频'}
        </button>
        <span className={styles.edgeTip}>当前边缘节点：{edgeNode}</span>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {recipe && (
        <div className={styles.recipeResult}>
          <h4 className={styles.recipeTitle}>{recipe.name}</h4>
          <div className={styles.recipeItem}>
            <h5>食材清单：</h5>
            <ul>
              {recipe.ingredients.map((item: any, index: number) => (
                <li key={index}>{item.name} - {item.quantity}</li>
              ))}
            </ul>
          </div>
          <div className={styles.recipeItem}>
            <h5>烹饪步骤：</h5>
            <ol>
              {recipe.steps.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className={styles.videoPreview}>
            <h5>视频预览（演示图）：</h5>
            <img
              src="/sample/sample-video-cover.png"
              alt="视频封面"
              className={styles.videoCover}
            />
            <p className={styles.videoTip}>视频风格：{videoStyle}（演示版，实际为高清视频）</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRecipeVideo;
