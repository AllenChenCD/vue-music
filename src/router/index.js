import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Singer from '@/pages/Singer'
import Rank from '@/pages/Rank'
import SingerDetail from '@/pages/SingerDetail'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail,

        }
      ]
    }
    ,
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    }
  ]
})
