import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import login from '../pages/login/login'
import register from '../pages/register/register'
import index from '../pages/index/index'
import home from '../pages/index/components/home'
import classify from '../pages/index/components/classify'
import shopcar from '../pages/index/components/shopcar'
import mine from '../pages/index/components/mine'

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'shopcar',
          component: shopcar
        },
        {
          path: 'mine',
          component: mine
        },
        {
          path: '',
          redirect: 'home'
        }
      ]
    }
  ]
})
