import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import 'ant-design-vue/dist/antd.less'
import store from './store'

createApp(App).use(store, Antd).use(router).mount('#app')
