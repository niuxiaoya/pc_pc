import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Buy from '@/components/buy/buy'  //直买
import BuyDetail from '@/components/buy/detail'  //直买详情
import Purchase from '@/components/buy/Purchase'  //购买详情


import Vip from '@/components/vip/vip'  //会籍
import VipDeatil from '@/components/vip/detail'  //会籍详情
import Information from '@/components/information/information'  //资讯
import Detail from '@/components/information/detail'  //资讯详情
import About from '@/components/about/about'  //关于我们

import Login from '@/components/login/login'  //登陆
import People from '@/components/login/people'  //个人中心
import Public from '@/components/login/public'  //我的发布
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
      path: '/buy/detail',
      name: 'BuyDetail',
      component: BuyDetail
    },
    {
      path: '/buy/purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/vip/detail',
      name: 'VipDeatil',
      component: VipDeatil
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
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/public',
      name: 'Public',
      component: Public
    },
    {
      path: '/lodding',
      name: 'Lodding',
      component: Lodding
    }
  ]
})
