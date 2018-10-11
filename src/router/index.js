import Vue from 'vue'
import Router from 'vue-router'
import learnSomething from '@/components/learnSomething'
import learnVue from '@/components/learnVue'
import learnVue1 from '@/components/learnVue1'
import markdown from '@/components/markdown'
import mytest from '@/components/mytest'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'learnSomething',
      component: learnSomething
    },
    {
      path: '/0',
      name: 'learnVue',
      component: learnVue
    },
    {
      path: '/test',
      name: 'mytest',
      component: mytest
    },
    {
      path: '/t',
      name: 'test',
      component: test
    },
    {
      path: '/1',
      name: 'learnVue1',
      component: learnVue1,
      children: [
        {
          path: '/3',
          name: 'learnVue',
          component: learnVue
        },
        {
          path: '/2',
          name: 'markdown',
          component: markdown
        }
      ]
    },
    {
      path: '/2',
      name: 'markdown',
      component: markdown
    }
  ]
})
