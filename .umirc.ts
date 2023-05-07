import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  codeSplitting: { // 代码拆分策略
    jsStrategy: 'granularChunks',
  },
  cssMinifierOptions: { // cssMinifier CSS 压缩工具配置选项
    minifyWhitespace: true,
    minifySyntax: true,
  },
  cssLoaderModules: { // 配置 css modules 的行为-驼峰式使用
    exportLocalsConvention: 'camelCase'
  },
  deadCode: { // 检测未使用的文件和导出，仅在 build 阶段开启
    detectUnusedFiles: true, // 是否检测未使用的文件
    detectUnusedExport: true, // 是否检测未使用的导出
  },
  esbuildMinifyIIFE: true, // 修复 esbuild 压缩器自动引入的全局变量导致的命名冲突问题
  favicons: [], // 配置页面icon
  hash: true, // 开启 hash 模式，让 build 之后的产物包含 hash 后缀
  inlineLimit: 10000, // 配置图片文件是否走 base64 编译的阈值
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },
  metas: [
    { name: 'keywords', content: 'umi, UmiJs，UmiJs-Demo' },
    { name: 'description', content: 'UmiJs构建的初始化demo项目' },
  ],
  proxy: { // 开启本地代理功能
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    }
  },
  request: {},
  layout: {
    title: 'Umi Demo',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});

