import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import yod from '@/components/yod'
import yod1 from '@/components/yodModule/yod1'
import yod2 from '@/components/yodModule/yod2'
import yod3 from '@/components/yodModule/yod3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/yod',

      component: yod,
      children:[
        // {path:'/',component: yod},
        {path:'index',component: yod1},
        {path:'pay',component: yod2},
        {path:'result',component: yod3}
      ]
    }
  ]
})
