import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(() => {
  return {
    plugins: [vue()],
    envDir: './dotenv',
    resolve: {
      alias: {
        '@': resolve('./src'),
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
