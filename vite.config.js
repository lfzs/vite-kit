import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { CDN_CSS, CDN_JS } from './src/constants/cdn'
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      Components(),
      createHtmlPlugin({
        entry: 'src/main.js',
        inject: {
          data: {
            CDN_CSS: CDN_CSS.filter(i => i.mode.includes(mode)).map(j => j.path),
            CDN_JS: CDN_JS.filter(i => i.mode.includes(mode)).map(j => j.path),
          },
        },
      }),
    ],
    envDir: './dotenv',
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/static/style/var.less";',
        },
      },
    },
    build: {
      // https://cn.vitejs.dev/config/build-options.html#build-target
      // https://esbuild.github.io/api/#target
      target: [
        'chrome87',
        'firefox78',
        'safari14',
        'edge88',
      ],
    },
  }
})
