import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/Find'
import ListDetail from '@/pages/ListDetail'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/hello',
      children: []
    }, {
      path: '/index',
      name: 'index',
      component: Index,

      children: [{
      path: '/hello',
      name: 'hellp',
      component: HelloWorld
    }, {
      path: '/find',
      name: 'find',
      component: Find
    }]
    }, {
      path: '/listdetail',
      name: 'listdetail',
      component: ListDetail
    },

  ]
})
