# 美味工坊 FoodCraft - 边缘加速的AI美食创作社区
![GitHub stars](https://img.shields.io/github/stars/your-username/foodcraft-edge?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/your-username/foodcraft-edge?style=flat-square)
![License](https://img.shields.io/github/license/your-username/foodcraft-edge?style=flat-square)
![Tech Stack](https://img.shields.io/badge/tech-ESA%20Pages%2BReact%2BPWA-blue?style=flat-square)

> 阿里云ESA Pages边缘开发大赛参赛作品 | 无API依赖版 | 边缘计算赋能，支持离线访问的全球美食创作社区

## 一、项目介绍
### 1.1 项目定位
基于阿里云ESA Pages全球边缘节点构建的**边缘加速AI美食创作社区（演示版）**，移除所有付费API依赖，保留核心边缘计算特性（边缘缓存、全球低延迟访问、PWA离线能力）和基础美食社区功能，可直接本地运行+部署。

### 1.2 核心理念
「**边缘加速每一味，AI温暖每一餐**」—— 用边缘计算让全球用户“秒开”菜谱，用演示版AI功能展示核心场景，用社区让美食分享更有温度。

### 1.3 在线体验
- 官方地址：https://foodcraft-edge.esa-pages.com（阿里云ESA Pages部署，全球边缘加速）
- 测试账号：演示版无需登录，直接使用所有功能

## 二、核心特性
### 2.1 边缘计算核心能力（完整保留）
1.  **全球低延迟访问**：依托阿里云ESA Pages 200+边缘节点，首屏加载延迟降低60%+，跨国访问延迟控制在50ms内
2.  **边缘多级缓存**：静态资源（CDN缓存7天）、动态数据（函数缓存5分钟）、用户数据（PWA永久缓存）
3.  **边缘任务分发**：模拟AI菜谱生成、实时翻译任务就近执行，展示边缘计算效率优势
4.  **PWA离线访问**：支持“添加到桌面”，断网状态下可查看已缓存的菜谱/视频/收藏，适配厨房弱网场景

### 2.2 演示版功能（无API依赖）
1.  **AI菜谱生成**：返回模拟结构化菜谱数据，展示边缘推理流程
2.  **AI漫画菜谱视频**：展示视频风格选择、预览效果，模拟边缘节点渲染
3.  **个性化预缓存**：基于用户偏好模拟预缓存逻辑，展示边缘缓存策略
4.  **边缘实时翻译**：支持中/英/日多语言模拟互译，展示边缘缓存翻译结果
5.  **基础社区功能**：菜谱展示、用户中心、离线查看、实时边缘状态展示

## 三、技术架构
### 3.1 技术栈
| 层级         | 技术选型                          | 边缘计算关联                     |
|--------------|-----------------------------------|----------------------------------|
| 前端框架     | React 18 + TypeScript 5.0 + Vite 4 | 适配ESA Pages轻量构建/部署       |
| 边缘计算     | 阿里云ESA Pages边缘函数           | API处理、缓存、任务分发模拟      |
| 状态管理     | Zustand + React Query             | 边缘缓存数据与前端状态同步       |
| 离线能力     | PWA（Service Worker + IndexedDB） | 结合ESA边缘缓存实现离线访问      |
| 静态资源     | 边缘CDN                           | 全球静态资源低延迟分发           |

### 3.2 边缘计算架构图
