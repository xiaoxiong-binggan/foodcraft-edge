// src/utils/mockData.ts

export interface Recipe {
  id: string;
  name: string;
  cuisine: string; // 菜系
  mainIngredient: string; // 主料
  desc: string; // 描述
  cover: string; // 封面图 URL
  heat: number; // 热度（1-10）
  isOffline: boolean; // 是否支持离线（注意是 isOffline，不是 offline！）
  steps: string[]; // 烹饪步骤（至少空数组）
}

// TOP5 热门菜谱（用于轮播）
export const hotRecipes: Recipe[] = [
  {
    id: 'r001',
    name: '宫保鸡丁',
    cuisine: '川菜',
    mainIngredient: '鸡胸肉',
    desc: '经典川菜，酸甜微辣，花生香脆',
    cover: 'https://example.com/images/kungpao.jpg',
    heat: 9.8,
    isOffline: true,
    steps: ['切鸡丁', '调酱汁', '炒花生', '爆香干辣椒', '合炒出锅']
  },
  {
    id: 'r002',
    name: '红烧肉',
    cuisine: '本帮菜',
    mainIngredient: '五花肉',
    desc: '肥而不腻，入口即化',
    cover: 'https://example.com/images/hongshaorou.jpg',
    heat: 9.5,
    isOffline: true,
    steps: ['焯水', '炒糖色', '炖煮1小时']
  }
  // 可继续添加至5个
];

// 所有模拟菜谱
export const mockRecipes: Recipe[] = [
  ...hotRecipes,
  {
    id: 'r003',
    name: '番茄炒蛋',
    cuisine: '家常菜',
    mainIngredient: '鸡蛋',
    desc: '国民家常菜，简单又营养',
    cover: 'https://example.com/images/tomato-egg.jpg',
    heat: 8.7,
    isOffline: true,
    steps: ['打蛋', '炒蛋盛出', '炒番茄', '混合调味']
  },
  {
    id: 'r004',
    name: '麻婆豆腐',
    cuisine: '川菜',
    mainIngredient: '豆腐',
    desc: '麻辣鲜香，下饭神器',
    cover: 'https://example.com/images/mapo.jpg',
    heat: 9.2,
    isOffline: false, // 假设这个不支持离线
    steps: ['焯豆腐', '炒肉末', '加豆瓣酱', '炖煮收汁']
  }
];
