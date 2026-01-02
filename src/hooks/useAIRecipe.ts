export const useAIRecipe = () => {
  // 补充组件所需所有属性
  const loading = false;
  const error = null;
  const edgeNode = "华东边缘节点（演示版）";
  const recipe = {
    name: "番茄炒蛋",
    ingredients: [
      { name: "番茄", quantity: "2个" },
      { name: "鸡蛋", quantity: "3个" },
      { name: "食盐", quantity: "1小勺" },
      { name: "食用油", quantity: "2大勺" }
    ],
    steps: [
      "1. 番茄洗净切块，鸡蛋打入碗中搅匀备用",
      "2. 锅中倒入食用油，油热后倒入鸡蛋液，煎至定型后盛出",
      "3. 锅中留少许底油，放入番茄块翻炒至出汁",
      "4. 倒入煎好的鸡蛋，加入食盐，翻炒均匀后即可出锅"
    ]
  };
  const mockRecipe = {
    name: "番茄炒蛋",
    ingredients: [{ name: "番茄", quantity: "2个" }, { name: "鸡蛋", quantity: "3个" }],
    steps: ["1. 切块", "2. 煎蛋", "3. 翻炒"]
  };

  // 匹配组件调用的方法
  const generateAIRecipe = async (recipeText: string, userId: string) => {
    console.log(`演示版：根据描述「${recipeText}」为用户「${userId}」生成AI菜谱`);
    return new Promise((resolve) => {
      setTimeout(() => resolve(recipe), 500);
    });
  };

  const generateRecipe = () => console.log("模拟生成菜谱");

  // 导出所有需要的属性和方法
  return {
    loading,
    recipe,
    error,
    edgeNode,
    mockRecipe,
    generateRecipe,
    generateAIRecipe
  };
};
