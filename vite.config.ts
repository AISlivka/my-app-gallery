import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import path from 'path';
import Unfonts from 'unplugin-fonts/vite';
import postCSSNesting from 'postcss-nesting';
import postCSSMixins from 'postcss-mixins';
import autoprefixer from 'autoprefixer';
import postCSSCustomMedia from 'postcss-custom-media';
import postCSSGlobalData from '@csstools/postcss-global-data';

export default defineConfig({
  server: {
    port: 3000,
  },
  base: process.env.BASE_URL || '/',
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  optimizeDeps: {
    // "vue-demi" for vueuse/sound
    exclude: ['vue-demi'],
  },
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        minifyInternalExports: true,
        manualChunks(id) {
          if (
            id.includes('@vue') ||
            id.includes('vue-i18n') ||
            id.includes('vue-router') ||
            id.includes('pinia')
          ) {
            return 'vue-package';
          }

          if (id.includes('sentry')) {
            return 'sentry';
          }

          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }

          return 'vendor';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postCSSGlobalData({
          files: ['./src/app/styles/media.css'],
        }),
        postCSSNesting,
        postCSSMixins({
          mixinsFiles: ['./src/app/styles/mixins.css'],
        }),
        autoprefixer,
        postCSSCustomMedia,
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/shared/lib/i18n/locales/*.ts'),
    }),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Inter',
            local: 'Inter',
            src: ['./src/app/styles/fonts/*.woff2', './src/app/styles/fonts/*.woff'],

            transform(font) {
              const fontMapper = {
                ['Inter-Regular']: 400,
                ['Inter-Medium']: 500,
                ['Inter-Bold']: 700,
              };

              font.weight = fontMapper[font.basename];

              return font;
            },
          },
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
