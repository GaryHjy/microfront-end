import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  history: {
    type: 'hash'
  },
  plugins: ['@umijs/plugins/dist/qiankun'],
  qiankun: {
    slave: {},
  },
});
