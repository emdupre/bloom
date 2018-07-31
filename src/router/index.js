import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import About from '@/components/About'
import CV from '@/components/CV'
import Pubs from '@/components/Pubs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    },
    {
      path: '/pubs',
      name: 'Pubs',
      component: Pubs
    },
  ]
})
