import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home'

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
      path:'/detali',
      name:"detali",
      component:()=>import("@/page/Detali")
    }
  ]
})
