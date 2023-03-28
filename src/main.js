import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import i18n from './locale'
import router from './router'
//import '../assets/css/base.less'
import '@/assets/css/base.less'
import App from './App.vue'

import directive from '@/emoji/index'
console.log(directive)

const pinia = createPinia()
const app = createApp(App)



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')

directive(app)