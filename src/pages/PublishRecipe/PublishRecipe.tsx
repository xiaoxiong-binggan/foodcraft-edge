import { useState } from 'react';
import styles from './PublishRecipe.module.css';

// 食材类型定义
interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

// 步骤类型定义
interface Step {
  desc: string;
  image: File | null;
}

const PublishRecipe = () => {
  // 基本信息
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [cookTime, setCookTime] = useState('30');
  const [serving, setServing] = useState('2');
  const [budget, setBudget] = useState('50');
  const [coverImage, setCoverImage] = useState<File | null>(null);

  // 食材列表
  const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: '', quantity: '', unit: '' }]);
  
  // 步骤列表
  const [steps, setSteps] = useState<Step[]>([{ desc: '', image: null }]);

  const [isSubmitting, setIsSubmitting] = useState(false);


  // 封面图片上传
  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  // 步骤图片上传
  const handleStepImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const newSteps = [...steps];
      newSteps[index].image = e.target.files[0];
      setSteps(newSteps);
    }
  };


  // 新增食材
  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: '' }]);
  };

  // 修改食材
  const updateIngredient = (index: number, key: keyof Ingredient, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index][key] = value;
    setIngredients(newIngredients);
  };


  // 新增步骤
  const addStep = () => {
    setSteps([...steps, { desc: '', image: null }]);
  };

  // 修改步骤描述
  const updateStepDesc = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index].desc = value;
    setSteps(newSteps);
  };


  // 提交发布
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 简单校验
    if (!title || !desc || ingredients.some(i => !i.name) || steps.some(s => !s.desc)) {
      alert('请填写必填信息！');
      return;
    }

    setIsSubmitting(true);
    // 模拟接口请求
    setTimeout(() => {
      alert('菜谱发布成功！');
      // 重置表单
      setTitle('');
      setDesc('');
      setCookTime('30');
      setServing('2');
      setBudget('50');
      setCoverImage(null);
      setIngredients([{ name: '', quantity: '', unit: '' }]);
      setSteps([{ desc: '', image: null }]);
      setIsSubmitting(false);
    }, 1500);
  };


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>发布菜谱</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* 基本信息 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>基本信息</h3>
          <div className={styles.formGroup}>
            <label className={styles.label}>菜谱标题 *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              placeholder="给你的菜谱起个名字"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>菜谱描述 *</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className={styles.textarea}
              placeholder="介绍这道菜的特色"
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>封面图片</label>
            <div className={styles.uploadArea}>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverUpload}
                className={styles.fileInput}
                disabled={isSubmitting}
              />
              <span className={styles.uploadText}>
                {coverImage ? coverImage.name : "点击或拖拽图片到这里"}
              </span>
              <p className={styles.uploadTip}>支持JPG、PNG等，最大1MB</p>
            </div>
          </div>

          <div className={styles.rowGroup}>
            <div className={styles.rowItem}>
              <label className={styles.label}>烹饪时间（分钟）</label>
              <input
                type="number"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                className={styles.smallInput}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.rowItem}>
              <label className={styles.label}>分量（人份）</label>
              <input
                type="number"
                value={serving}
                onChange={(e) => setServing(e.target.value)}
                className={styles.smallInput}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.rowItem}>
              <label className={styles.label}>预算（元）</label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={styles.smallInput}
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>


        {/* 食材用料 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>食材用料</h3>
          {ingredients.map((ingredient, index) => (
            <div key={index} className={styles.ingredientRow}>
              <input
                type="text"
                value={ingredient.name}
                onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                className={styles.ingredientInput}
                placeholder="食材名称"
                disabled={isSubmitting}
              />
              <input
                type="text"
                value={ingredient.quantity}
                onChange={(e) => updateIngredient(index, 'quantity', e.target.value)}
                className={styles.ingredientSmallInput}
                placeholder="数量"
                disabled={isSubmitting}
              />
              <input
                type="text"
                value={ingredient.unit}
                onChange={(e) => updateIngredient(index, 'unit', e.target.value)}
                className={styles.ingredientSmallInput}
                placeholder="单位"
                disabled={isSubmitting}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className={styles.addBtn}
            disabled={isSubmitting}
          >
            + 添加食材
          </button>
        </div>


        {/* 烹饪步骤 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>烹饪步骤</h3>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepGroup}>
              <h4 className={styles.stepTitle}>步骤 {index + 1}</h4>
              <textarea
                value={step.desc}
                onChange={(e) => updateStepDesc(index, e.target.value)}
                className={styles.stepTextarea}
                placeholder="描述这一步的操作"
                rows={3}
                disabled={isSubmitting}
              />
              <div className={styles.uploadArea}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleStepImageUpload(index, e)}
                  className={styles.fileInput}
                  disabled={isSubmitting}
                />
                <span className={styles.uploadText}>
                  {step.image ? step.image.name : "点击或拖拽图片到这里"}
                </span>
                <p className={styles.uploadTip}>支持JPG、PNG等，最大1MB</p>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            className={styles.addBtn}
            disabled={isSubmitting}
          >
            + 添加步骤
          </button>
        </div>


        {/* 提交按钮 */}
        <div className={styles.btnGroup}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={() => window.history.back()}
            disabled={isSubmitting}
          >
            取消
          </button>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "发布中..." : "发布菜谱"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublishRecipe;
