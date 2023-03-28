import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const config = loadEnv( mode, './')
  return {
    plugins: [
      vue()
    ],
    resolve:{
      alias:{
        "@": resolve(__dirname, "src"),
        'views': resolve(__dirname, 'src/views'),
        'api': resolve(__dirname, 'src/api')
      },
      extensions: ['.js', '.mjs', '.vue', '.json', '.less', '.css']
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import './src/assets/css/base.less';`
        }
      }
    },
    server:{
      host: '0.0.0.0',
      port: 3000,
      open: true,
      https: false,
      proxy:{
        '/api': {
          //target: 'https://tst2.chinesean.com',//代理接口
          target: config.VITE_RES_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/,'')
        }
      }
    }
  }  
})