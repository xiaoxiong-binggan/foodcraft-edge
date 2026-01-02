// 直接替换整个文件内容，确保有命名导出
// 关键：添加export，让TS识别为模块
export const useAIRecipe = () => {
  // 模拟菜谱数据
  const mockRecipe = {
    name: "番茄炒蛋",
    ingredients: [{ name: "番茄", quantity: "2个" }, { name: "鸡蛋", quantity: "3个" }],
    steps: ["1. 切块", "2. 煎蛋", "3. 翻炒"]
  };

  return {
    mockRecipe,
    generateRecipe: () => console.log("模拟生成菜谱")
  };
};
