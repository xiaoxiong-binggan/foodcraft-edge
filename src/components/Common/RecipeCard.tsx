// 定义属性类型
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
  key?: string;
}

// 接收并使用属性
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

export default RecipeCard;
