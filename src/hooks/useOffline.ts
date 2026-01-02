// 直接替换整个文件内容，确保有命名导出
// 关键：添加export，让TS识别为模块
export const useOffline = () => {
  // 模拟离线状态
  const isOffline = false;
  const cachedRecipes = [{ id: "1001", name: "番茄炒蛋" }];

  return {
    isOffline,
    cachedRecipes,
    checkOfflineStatus: () => console.log("检查离线状态")
  };
};
