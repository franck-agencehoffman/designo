import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import Projects from '@/views/Projects'
import Locations from '@/views/Locations'
import About from '@/views/About'
import Contact from '@/views/Contact'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects/:category',
      name: 'projects',
      component: Projects
    },
    {
      path: '/our-company',
      name: 'our-company',
      component: About
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return { x: 0, y: 0 }
  }
})

export default router
