import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome/welcome'
import associationList from '@/components/association-list/association-list'
import association from '@/components/association/association'
import associationDetail from '@/components/association-detail/association-detail'
import teacherList from '@/components/teacher-list/teacher-list'
import associationTidbits from '@/components/association-tidbits/association-tidbits'

let router = new Router({
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
      props: true,
      children: [
        {
          path: '',
          redirect: 'associationDetail'
        },
        {
          path: 'associationDetail',
          component: associationDetail
        },
        {
          path: 'teacherList',
          component: teacherList
        },
        {
          path: 'associationTidbits',
          component: associationTidbits
        }
      ]
    }
  ]
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

Vue.use(Router)

export default router
