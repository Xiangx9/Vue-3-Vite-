import './style.css'
import { createApp } from 'vue'
import router from './router'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import "amfe-flexible/index.js";
pinia.use(piniaPluginPersistedstate);
// 创建app
const app = createApp(App)
// 注入
app.use(pinia)
app.use(router)
app.use(ElementPlus)
// 挂载实例
app.mount('#app')
