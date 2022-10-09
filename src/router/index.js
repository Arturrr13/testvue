import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/what',
    name: 'what',
    component: () => import('../views/WhatView.vue')
  },
  {
    path: '/where',
    name: 'where',
    component: () => import('../views/WhereView.vue')
  },
  {
    path: '/who',
    name: 'who',
    component: () => import('../views/WhoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
