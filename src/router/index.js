/*
 * @Author: 王精华
 * @Date: 2020-05-30 14:44:33
 * @LastEditTime: 2020-09-02 16:15:20
 * @LastEditors: 王精华
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/404',
    name: '404',
    component: (resolve) => require(['@/pages/404/404'], resolve),
    meta: { title: '404', islogin: false, isLink: false },
  },
  {
    path: '/index',
    name: 'index',
    component: (resolve) => require(['@/pages/index/index'], resolve),
    meta: { title: '首页', islogin: false, isLink: false },
  },
  {
    path: '/videos',
    name: 'videos',
    component: (resolve) => require(['@/pages/videos/videos'], resolve),
    meta: { title: '视频', islogin: false, isLink: false },
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: (resolve) => require(['@/pages/mobile/mobile'], resolve),
    meta: { title: '移动端', islogin: false, isLink: false },
  },
  {
    path: '/mouse',
    name: 'mouse',
    component: (resolve) => require(['@/pages/mouse/mouse'], resolve),
    meta: { title: '鼠标', islogin: false, isLink: false },
  },
  {
    path: '/test',
    name: 'test',
    component: (resolve) => require(['@/pages/test/test'], resolve),
    meta: { title: '笔记', islogin: false, isLink: false },
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
