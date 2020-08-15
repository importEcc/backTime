/**
 * @Classname api.js
 * @Description TODO
 * @Date 2019-07-05 17:00
 * @Created by 123
 */

import axios from 'axios';
// import qs from 'qs';
import store from '@/store/index';

function startLoading() {
  store.dispatch('setLoading', true);
}
// function endLoading() {
//   store.commit('setLoading', false);
// }

let needLoadingRequestCount = 0;

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
// let time = setTimeout(() => {
//     endLoading()
// }, 1200);
// function tryHideFullScreenLoading() {
//   if (needLoadingRequestCount <= 0) return;
//   needLoadingRequestCount--;
//   if (needLoadingRequestCount === 0 ) {
//       endLoading()
//   }
// }

axios.defaults.withCredentials = false;
axios.defaults.headers = { "Accept": 'application/json', 'Content-Type': 'application/json', };

let baseUrl = '';

// const DEV_BASE_API = "http://183.215.122.144:1318"; // 测试环境
const DEV_BASE_API = "/api"; 

const PROD_BASE_API = "http://183.215.122.144:1318";

if (process.env.NODE_ENV == 'development') {
  baseUrl = DEV_BASE_API;
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = PROD_BASE_API;
} else {
  baseUrl = '';
}


const service = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 12,
});
// axios 拦截器、
// 请求前 TODO 添加请求的UI
service.interceptors.request.use(request => {
  request.headers.Authorization = localStorage.getItem('token');
  if (request.url === '/hello/login') {

  } else {

    // if(request.method === 'post'){
    //   request.headers.token = token;
    //   request.data = {
    //     ...request.data,
    //     token
    //   }
    // }else if (request.method === 'get'){
    //   request.params = {
    //     ...request.params,
    //   }
    // }
  }
  // if(request.method === 'post' || request.method === 'POST'){
  //   // post请求要序列化
  //   // let data = qs.parse(request.data);
  //   //
  //   // request.data = qs.stringify({
  //   //   ...data
  //   // });
  // }else if(request.method === 'get' || request.method === 'GET'){
  //   // request.params = {
  //   //   ...request.params
  //   // }
  // }
  // showFullScreenLoading();
  return request;
}, error => {
  Promise.reject(error);
});

// 请求后
service.interceptors.response.use(
  response => {
    const res = response.data;
    // tryHideFullScreenLoading();
    // if (res.code == 405) {
    //   Notification.error({
    //     title: '',
    //     message: res.message,
    //   });
    //   setTimeout(() => {
    //     window.location.replace('/#/login');
    //   }, 1000 * .5)
    // }
    if (res.code == 200) {
      // process.env.NODE_ENV == 'development' ? '' : '';   // 开发环境日志
      return res;
    } else {
      if (process.env.NODE_ENV == 'development') {
        // 开发环境接口报错
        // Notification.error({
        //   title: '',
        //   message: res.message,
        // });
      }
      Promise.reject(new Error(res.msg));
      return false;
    }
  }
);

export default service;
