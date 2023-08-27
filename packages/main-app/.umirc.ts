import { defineConfig } from "umi";

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
  plugins: ['@umijs/plugins/dist/qiankun'],
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
});
