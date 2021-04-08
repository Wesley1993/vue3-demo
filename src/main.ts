import { createApp } from 'vue' // 引入vue文件，并导出 `createApp`
import App from './App.vue' // 引入自定义组件，页面上看的东西基本都在这个组件里面
import Antd from 'ant-design-vue' //
import router from './router'
import 'ant-design-vue/dist/antd.css'
import store from './store'

const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router).mount('#app') // 把APP组件挂载到#app节点上，在public目录下的index.html找节点
