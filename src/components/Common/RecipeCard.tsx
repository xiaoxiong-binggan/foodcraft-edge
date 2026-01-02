// 直接替换整个文件内容，确保有默认导出
function RecipeCard() {
  return (
    <div style={{ border: "1px solid #eee", padding: "16px", margin: "8px" }}>
      <h3>菜谱卡片</h3>
      <p>番茄炒蛋 - 简易家常菜</p>
    </div>
  );
}
// 关键：添加默认导出，让TS识别为模块
export default RecipeCard;
