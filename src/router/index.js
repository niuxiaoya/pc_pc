import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Buy from '@/components/buy/buy'  //直买
import Vip from '@/components/vip/vip'  //会籍
import Information from '@/components/information/information'  //资讯
import Detail from '@/components/information/detail'  //资讯详情
import About from '@/components/about/about'  //关于我们
import Login from '@/components/login/login'  //登陆
import Lodding from '@/components/lodding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/information/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/lodding',
      name: 'Lodding',
      component: Lodding
    }
  ]
})
