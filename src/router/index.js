import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import Register from '../views/register.vue'

import contactus from '../views/contactus.vue'
import AllResourses from '../views/all_resourses.vue'
import AllUsers from '../views/all_users.vue'



import Home from '../views/home.vue'

import { BootstrapVue, IconsPlugin } from '../../node_modules/bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const routes = [
  {
    path: '/home ',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/',
    name: 'Login',
    component: login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/all_resourses',
    name: 'AllResourses',
    component: AllResourses
  },
  {
    path: '/all_users',
    name: 'AllUsers',
    component: AllUsers
  },
 
  {
    path: '/contactus',
    name: 'contactus',
    component: contactus
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
