/// <reference types="vite/client" />

// 声明CSS模块类型，解决TS无法识别.module.css文件的报错
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// 可选：声明其他静态资源类型（避免后续导入图片等文件报错）
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare module '*.mp3';
