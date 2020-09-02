/*
 * @Author: 王精华
 * @Date: 2020-05-30 14:44:33
 * @LastEditTime: 2020-09-02 13:51:15
 * @LastEditors: 王精华
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import ElementUI from 'element-ui'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueLazyload from 'vue-lazyload'
import { default as api } from './untils/api'
import './mineStyle/style.scss' //样式重置文件
import './mineStyle/borderStyle.scss' //1像素边框的解决方案
import './mineStyle/scroll.scss' //滚动条样式

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
})
Vue.use(ElementUI)
Vue.use(Vant)
Vue.prototype.$api = api
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    window.document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
