// src/utils/mockData.ts

export interface Recipe {
  id: string;
  name: string;
  cuisine: string; // 菜系
  mainIngredient: string; // 主料
  desc: string; // 描述
  cover: string; // 封面图 URL（真实有效）
  heat: number; // 热度（1-10）
  isOffline: boolean; // 是否支持离线
  steps: string[]; // 烹饪步骤
}

// TOP5 热门菜谱（用于首页轮播）
export const hotRecipes: Recipe[] = [
  {
    id: 'r001',
    name: '宫保鸡丁',
    cuisine: '川菜',
    mainIngredient: '鸡胸肉',
    desc: '经典川菜，酸甜微辣，花生香脆',
    cover: 'https://images.unsplash.com/photo-1603057928385-3d5e8f4a7f5c?auto=format&fit=crop&w=600',
    heat: 9.8,
    isOffline: true,
    steps: ['鸡胸肉切丁腌制', '调制宫保汁', '炒香干辣椒和花椒', '加入鸡丁翻炒', '放入炸花生米拌匀']
  },
  {
    id: 'r002',
    name: '红烧肉',
    cuisine: '本帮菜',
    mainIngredient: '五花肉',
    desc: '肥而不腻，入口即化',
    cover: 'https://images.unsplash.com/photo-1563245372-f34131c52f10?auto=format&fit=crop&w=600',
    heat: 9.5,
    isOffline: true,
    steps: ['五花肉焯水去腥', '炒糖色至枣红色', '加入肉块翻炒上色', '加酱油、料酒、水炖煮1小时', '收汁装盘']
  },
  {
    id: 'r003',
    name: '麻婆豆腐',
    cuisine: '川菜',
    mainIngredient: '豆腐',
    desc: '麻辣鲜香，下饭神器',
    cover: 'https://images.unsplash.com/photo-1626082927389-6cd66c7b5e5a?auto=format&fit=crop&w=600',
    heat: 9.3,
    isOffline: true,
    steps: ['豆腐切块焯水', '炒香牛肉末', '加入豆瓣酱炒出红油', '加高汤煮豆腐', '勾芡撒花椒粉']
  },
  {
    id: 'r004',
    name: '鱼香肉丝',
    cuisine: '川菜',
    mainIngredient: '里脊肉',
    desc: '鱼香味型，酸甜咸辣兼备',
    cover: 'https://images.unsplash.com/photo-1606732777394-98e5a86e4c85?auto=format&fit=crop&w=600',
    heat: 9.1,
    isOffline: false,
    steps: ['里脊切丝腌制', '配制鱼香汁', '炒肉丝盛出', '爆香姜蒜泡椒', '合炒调味']
  },
  {
    id: 'r005',
    name: '糖醋排骨',
    cuisine: '江浙菜',
    mainIngredient: '猪小排',
    desc: '色泽红亮，酸甜适口',
    cover: 'https://images.unsplash.com/photo-1626082927425-6c9e3f0d8e5d?auto=format&fit=crop&w=600',
    heat: 9.0,
    isOffline: true,
    steps: ['排骨焯水', '煎至微黄', '加糖炒焦糖色', '倒入醋、酱油、水', '小火炖30分钟收汁']
  }
];

// 所有模拟菜谱（包含 hotRecipes + 其他）
export const mockRecipes: Recipe[] = [
  ...hotRecipes,
  {
    id: 'r006',
    name: '番茄炒蛋',
    cuisine: '家常菜',
    mainIngredient: '鸡蛋',
    desc: '国民家常菜，简单又营养',
    cover: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600',
    heat: 8.7,
    isOffline: true,
    steps: ['鸡蛋打散加盐', '番茄切块', '先炒鸡蛋盛出', '炒软番茄', '混合鸡蛋翻炒']
  },
  {
    id: 'r007',
    name: '清蒸鲈鱼',
    cuisine: '粤菜',
    mainIngredient: '鲈鱼',
    desc: '原汁原味，鲜嫩无比',
    cover: 'https://images.unsplash.com/photo-1606732777394-98e5a86e4c85?auto=format&fit=crop&w=600',
    heat: 8.5,
    isOffline: false,
    steps: ['鲈鱼洗净划刀', '姜片塞鱼腹', '蒸8分钟', '倒掉蒸鱼水', '淋热油和蒸鱼豉油']
  },
  {
    id: 'r008',
    name: '葱油拌面',
    cuisine: '本帮菜',
    mainIngredient: '面条',
    desc: '香气扑鼻，简单快手',
    cover: 'https://images.unsplash.com/photo-1603133872878-7484b6a6bf78?auto=format&fit=crop&w=600',
    heat: 8.3,
    isOffline: true,
    steps: ['煮面过凉', '熬制葱油', '混合酱油和糖', '拌入面条', '撒葱花']
  }
];
