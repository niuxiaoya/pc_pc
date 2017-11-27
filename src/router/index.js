import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Buy from '@/components/buy/buy'  //资讯
import Information from '@/components/information/information'  //资讯
import About from '@/components/about/about'  //关于我们
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
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/lodding',
      name: 'Lodding',
      component: Lodding
    }
  ]
})
