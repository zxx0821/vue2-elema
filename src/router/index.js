import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',    /* 设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置*/
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../pages/Home.vue'], resolve),
      children:[
        {
          path: '/',
          name: 'goods',
          component: resolve => require(['../pages/googs/goods.vue'], resolve)
        },
        {
          path: '/goods',
          name: 'goods',
          component: resolve => require(['../pages/googs/goods.vue'], resolve)
        },
        {
          path: '/ratings',
          name: 'Ratings',
          component: resolve => require(['../pages/ratings/ratings.vue'], resolve)
        },
        {
          path: '/seller',
          name: 'seller',
          component: resolve => require(['../pages/seller/seller.vue'], resolve)
        }
      ]
    }
  ]
})
