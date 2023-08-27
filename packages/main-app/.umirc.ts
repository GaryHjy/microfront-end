import { defineConfig } from "umi";

// 提取变量是为了和 MFSU 配合使用保持配置一致
const remoteMFName = 'remoteMain';

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
  npmClient: 'pnpm',
  history: {
    type: 'hash'
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/docs',
      component: '@/pages/docs',
    },
    {
      path: '/micro-app/*',
      microApp: 'micro-app',
    },
  ],
  plugins: ['@umijs/plugins/dist/qiankun', '@umijs/plugins/dist/mf'],
  qiankun: {
    master: {
      apps: [
        {
          name: 'micro-app',
          entry: '//localhost:3000',
          props: {
            $store: {
              userInfo: {
                name: 'micro-app'
              }
            }
          }
        },
      ],
    },
  },
  // plugins: ['@umijs/plugins/dist/mf'],
  mf: {
    name: remoteMFName,
    shared,
    // 可选，远端模块库类型, 如果模块需要在乾坤子应用中使用建议配置示例的值，
    // 注意这里的 name 必须和最终 MF 模块的 name 一致
    // library: { type: "window", name: remoteMFName },
  },
  publicPath: 'http://127.0.0.1:8000/',
  mfsu: false
});
