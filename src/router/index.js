import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

  const routes = [
  {
    path:'/',
    redirect: '/index' 
  },
  {
    path:'/404',
    name:'404',
    component:resolve => require(["@/pages/404/404"],resolve),
    mate:{title:'404',islogin:false,isLink:false}
  },
  {
    path:'/index',
    name:'index',
    component:resolve => require(["@/pages/index/index"],resolve),
    mate:{title:'首页',islogin:false,isLink:false},
  },
  {
    path:'/videos',
    name:'videos',
    component:resolve => require(["@/pages/videos/videos"],resolve),
    mate:{title:'视频',islogin:false,isLink:false}
  },
  {
    path:'/mobile',
    name:'mobile',
    component:resolve => require(["@/pages/mobile/mobile"],resolve),
    mate:{title:'移动端',islogin:false,isLink:false}
  }
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
