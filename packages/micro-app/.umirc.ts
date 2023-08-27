import { defineConfig } from "umi";

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  publicPath: 'http://localhost:3000/',
  npmClient: 'pnpm',
  history: {
    type: 'hash'
  },
  plugins: ['@umijs/plugins/dist/qiankun', '@umijs/plugins/dist/mf'],
  qiankun: {
    slave: {},
  },
  // plugins: ['@umijs/plugins/dist/mf'],
  mf: {
    // name: 'hostUser',
    remotes: [
      {
        // 可选，未配置则使用当前 remotes[].name 字段
        // aliasName: 'remoteMain',
        name: 'remoteMain',
        entry: 'http://127.0.0.1:8000/remote.js',
      },
    ],
    // 配置 MF 共享的模块
    shared,
  }
});
