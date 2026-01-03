// 热门菜谱数据（前5名，带图片、热度）
export const hotRecipes = [
  {
    id: "r001",
    name: "红烧肉",
    cuisine: "家常菜",
    mainIngredient: "五花肉",
    desc: "肥而不腻，香甜松软，入口即化",
    cover: "https://img2.baidu.com/it/u=3825456789,2345678901&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    heat: 986,
    offline: true
  },
  {
    id: "r002",
    name: "番茄炒蛋",
    cuisine: "家常菜",
    mainIngredient: "番茄、鸡蛋",
    desc: "酸甜可口，做法简单，老少皆宜",
    cover: "https://img2.baidu.com/it/u=1234567890,9876543210&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    heat: 852,
    offline: true
  },
  {
    id: "r003",
    name: "麻婆豆腐",
    cuisine: "川菜",
    mainIngredient: "豆腐、牛肉末",
    desc: "麻辣鲜香，口感嫩滑，下饭神器",
    cover: "https://img2.baidu.com/it/u=2345678901,1234567890&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    heat: 795,
    offline: true
  },
  {
    id: "r004",
    name: "清蒸鲈鱼",
    cuisine: "粤菜",
    mainIngredient: "鲈鱼",
    desc: "鲜嫩多汁，清淡营养，原汁原味",
    cover: "https://img2.baidu.com/it/u=3456789012,2345678901&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    heat: 723,
    offline: true
  },
  {
    id: "r005",
    name: "鱼香肉丝",
    cuisine: "川菜",
    mainIngredient: "猪肉、胡萝卜",
    desc: "咸甜酸辣，香气浓郁，口感丰富",
    cover: "https://img2.baidu.com/it/u=4567890123,3456789012&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    heat: 689,
    offline: false
  }
];

// 补充：普通热门菜谱列表（用于 RecipeList 和 Home 的非轮播部分）
export const mockRecipes = [
  ...hotRecipes,
  {
    id: "r006",
    name: "宫保鸡丁",
    cuisine: "川菜",
    mainIngredient: "鸡胸肉、花生",
    desc: "酸甜微辣，鸡肉嫩滑，花生酥脆",
    cover: "https://img2.baidu.com/it/u=5678901234,4567890123&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    heat: 621,
    offline: true
  },
  {
    id: "r007",
    name: "糖醋排骨",
    cuisine: "江浙菜",
    mainIngredient: "猪小排",
    desc: "色泽红亮，酸甜适口，肉质酥烂",
    cover: "https://img2.baidu.com/it/u=6789012345,5678901234&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    heat: 589,
    offline: true
  }
];
