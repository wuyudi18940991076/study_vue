import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld.vue'
import ocComponent from '@/view/oc_component.vue'
import ocComponent2 from '@/view/oc_component2.vue'
import ocComponent3 from '@/view/oc_component3.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ocComponent',
      name: 'ocComponent',
      component: ocComponent
    },
    {
      path: '/ocComponent2',
      name: 'ocComponent2',
      component: ocComponent2
    },
    {
      path: '/ocComponent3',
      name: 'ocComponent3',
      component: ocComponent3
    }
  ]
})
