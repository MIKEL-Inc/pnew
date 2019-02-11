import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fstest',
      name: 'fstest',
      // route level code-splitting
      // this generates a separate chunk (fstest.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "fstest" */ './views/Fstest.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      // route level code-splitting
      // this generates a separate chunk (editor.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "editor" */ './views/Editor.vue')
    }
  ]
})
