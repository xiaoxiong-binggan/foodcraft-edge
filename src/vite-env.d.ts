/// <reference types="vite/client" />

// 声明CSS模块
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// 声明静态资源
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare module '*.mp3';
