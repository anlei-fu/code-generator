import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/page/login'
import home from '@/components/page/home'
import log from '@/components/page/log'
import changePassword from '@/components/page/changePassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/',
      name: 'home',
      component: home,
      children: [{
        path: 'log',
        name: 'log',
        component: log,
      }, {
        path: 'changePassword',
        name: 'changePassword',
        component: changePassword,
      }]

    }
  ]
})
