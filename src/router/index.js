import Vue from 'vue'
import Router from 'vue-router'
import HeaderTop from '@/components/header'
import Hello from '@/page/home/Hello'
import Firststep from '@/page/firststep/firststep'
import Secondstep from '@/page/secondstep/secondstep'
import Threestep from '@/page/threestep/threestep'
import Fourstep from '@/page/fourstep/fourstep'
import ajaxtest from '@/page/firststep/ajaxtest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'HeaderTop',
      component: HeaderTop
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/firststep',
          name: 'Firststep',
          component: Firststep,
          children: [
            {
              path: '/ajaxtest',
              name: 'ajaxtest',
              component: ajaxtest
            }
          ]
        },
        {
          path: '/secondstep',
          name: 'Secondstep',
          component: Secondstep
        },
        {
          path: '/threestep',
          name: 'Threestep',
          component: Threestep
        },
        {
          path: '/fourstep',
          name: 'Fourstep',
          component: Fourstep
        }
      ]
    }
  ]
})
