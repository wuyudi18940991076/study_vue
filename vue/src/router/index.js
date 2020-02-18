import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
