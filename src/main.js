// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.$axios = axios;
import './assets/css/index.less';

Vue.config.productionTip = false
Vue.use(VueRouter);   // 注册
/* eslint-disable no-new */    // new 一个实例要赋值给一个对象，加上这句可以不赋给对象
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
