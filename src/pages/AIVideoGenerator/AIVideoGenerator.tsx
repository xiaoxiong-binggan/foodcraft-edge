// 直接替换整个文件内容，确保有默认导出
function AIVideoGenerator() {
  return (
    <div>
      <h1>AI视频生成页面（演示版）</h1>
    </div>
  );
}
// 关键：添加默认导出，让TS识别为模块
export default AIVideoGenerator;
