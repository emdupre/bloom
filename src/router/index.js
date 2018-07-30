import Vue from 'vue'
import Router from 'vue-router'
import cv from '@/components/cv'
import pubs from '@/components/pubs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cv',
      name: 'cv',
      component: cv
    },
    {
      path: '/pubs',
      name: 'pubs',
      component: pubs
    },
  ]
})
