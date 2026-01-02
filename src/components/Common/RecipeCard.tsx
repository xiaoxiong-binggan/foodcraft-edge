// 定义 recipe 属性的类型接口，明确接收的属性结构
interface RecipeCardProps {
  recipe: {
    id: string;
    name: string;
    cuisine: string;
    mainIngredient: string;
    cover: string;
    isOffline: boolean;
    steps: string[];
  };
  key?: string; // 可选接收 key 属性
}

// 接收 recipe 属性并声明类型，解决 TS2322 报错
function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div style={{ border: "1px solid #eee", padding: "16px", margin: "8px" }}>
      <h3>{recipe.name}</h3>
      <p>菜系：{recipe.cuisine}</p>
      <p>主料：{recipe.mainIngredient}</p>
      <p>离线可用：{recipe.isOffline ? '是' : '否'}</p>
    </div>
  );
}

// 关键：添加默认导出，让 TS 识别为模块
export default RecipeCard;
