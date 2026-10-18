import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: './',

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      // 暂时不使用 manualChunks，待完全模块化后再启用
      // output: {
      //   manualChunks: {
      //     managers: [...],
      //   },
      // },
    },

    // 压缩优化 (使用 esbuild，比 terser 更快)
    minify: 'esbuild',

    // 构建优化
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },

  server: {
    open: true,
    port: 3000,
    host: true,
  },

  preview: {
    port: 8080,
  },

  // 优化依赖预构建
  optimizeDeps: {
    include: [],
  },

  // CSS 配置
  css: {
    devSourcemap: true,
  },
});
