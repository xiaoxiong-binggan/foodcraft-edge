// 模拟菜谱数据
export const mockRecipes = [
  {
    id: "1001",
    name: "番茄炒蛋",
    cuisine: "家常菜",
    mainIngredient: "番茄",
    cover: "/assets/images/recipe-default.jpg",
    isOffline: true,
    steps: ["1. 备料", "2. 炒制", "3. 出锅"]
  },
  {
    id: "1002",
    name: "青椒炒肉",
    cuisine: "川菜",
    mainIngredient: "猪肉",
    cover: "/assets/images/recipe-default.jpg",
    isOffline: true,
    steps: ["1. 备料", "2. 炒制", "3. 出锅"]
  },
  {
    id: "1003",
    name: "麻婆豆腐",
    cuisine: "川菜",
    mainIngredient: "豆腐",
    cover: "/assets/images/recipe-default.jpg",
    isOffline: true,
    steps: ["1. 备料", "2. 烧制", "3. 出锅"]
  },
  {
    id: "1004",
    name: "鱼香肉丝",
    cuisine: "川菜",
    mainIngredient: "猪肉",
    cover: "/assets/images/recipe-default.jpg",
    isOffline: false,
    steps: ["1. 备料", "2. 炒制", "3. 出锅"]
  },
  {
    id: "1005",
    name: "水煮肉片",
    cuisine: "川菜",
    mainIngredient: "牛肉",
    cover: "/assets/images/recipe-default.jpg",
    isOffline: false,
    steps: ["1. 备料", "2. 煮制", "3. 出锅"]
  },
  {
    id: "1006",
    name: "宫保鸡丁",
    cuisine: "川菜",
    mainIngredient: "鸡肉",
    cover: "/assets/images/recipe-default.jpg",
    isOffline: true,
    steps: ["1. 备料", "2. 炒制", "3. 出锅"]
  }
];

// 模拟用户数据
export const mockUser = {
  id: "demo_user_001",
  name: "美食爱好者",
  avatar: "/assets/images/default-avatar.png",
  level: "初级厨师",
  favorites: mockRecipes.filter(item => item.isOffline)
};
