import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
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
      path: '/lodding',
      name: 'Lodding',
      component: Lodding
    }
  ]
})
