import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import contactus from '../views/contactus.vue'

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
