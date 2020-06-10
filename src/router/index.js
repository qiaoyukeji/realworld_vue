/*
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-10 21:40:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-10 22:06:56
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import("../views/home")
      }, {
        name: 'login',
        path: 'login',
        component: () => import("../views/login")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
