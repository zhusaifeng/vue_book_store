import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//引入axios
import axios from 'axios'
//将axios挂载到原型链上
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//应用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router,

}).$mount('#app')
