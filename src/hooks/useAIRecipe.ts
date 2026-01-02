// 关键：导出组件所需的所有属性和方法，解决 TS2339 报错
export const useAIRecipe = () => {
  // 模拟组件需要的所有状态属性
  const loading = false;
  const error = null;
  const edgeNode = "华东边缘节点（演示版）";
  // 模拟菜谱数据（与组件中使用的 recipe 结构一致）
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
  // 模拟原有钩子的属性（兼容其他使用场景）
  const mockRecipe = {
    name: "番茄炒蛋",
    ingredients: [{ name: "番茄", quantity: "2个" }, { name: "鸡蛋", quantity: "3个" }],
    steps: ["1. 切块", "2. 煎蛋", "3. 翻炒"]
  };

  // 模拟 AI 菜谱生成方法（接收组件传递的参数，匹配组件调用逻辑）
  const generateAIRecipe = async (recipeText: string, userId: string) => {
    console.log(`演示版：根据描述「${recipeText}」为用户「${userId}」生成AI菜谱`);
    // 模拟异步操作
    return new Promise((resolve) => {
      setTimeout(() => resolve(recipe), 500);
    });
  };

  // 原有方法（保留兼容性）
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
