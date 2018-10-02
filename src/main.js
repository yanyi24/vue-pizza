import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routers} from './routers';
import VueResource from 'vue-resource';
import axios from 'axios';
import {store} from './store/store';


Vue.use(VueRouter);
Vue.use(VueResource);

// 配置默认路径
// axios.defaults.baseURL = 'https://vue-pizza-y.firebaseio.com/';
// 配置Vue原型（在任何组件中都可以正常使用this.$axios）
Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes: routers,
  mode: 'history',
  scrollBehavior(to, from, savedPosition ){
    //当页面可以滚动时，指定跳转的位置
 /*return {
      x: 0,
      y: 100
    }
    // 固定的一个位置，
    */
 // return {selector: '.btn'}
    //当使用浏览器当前进后退时：
    if(savedPosition){
      return savedPosition;
    }else {
      return{x: 0, y: 0}
    }
  }
});
// router.beforeEach((to, from, next) => {
//   if (to.path === '/register' || to.path === '/login') {
//     next();
//   }else{
//     alert('还未登陆，请先登录！');
//     next('/login');
//   }
// });
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
