import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome/welcome'
import associationList from '@/components/association-list/association-list'
import association from '@/components/association/association'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/associationList',
      name: 'associationList',
      component: associationList
    },
    {
      path: '/association/:id',
      name: 'association',
      component: association,
      props: true
    }
  ]
})
