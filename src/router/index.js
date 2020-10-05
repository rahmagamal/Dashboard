import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import Register from '../views/register.vue'

import AllResourses from '../views/all_resourses.vue'
import SingleResources from '../views/single_resources.vue'

import AllUsers from '../views/all_users.vue'


// import store from '../store' 
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
    path: '/single_resources',
    name: 'SingleResources',
    component: SingleResources
  },
  {
    path: '/all_users',
    name: 'AllUsers',
    component: AllUsers
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.notRequiresAuth) {
//       if (store.getters.isLoggedIn) {
//           next({ name: 'AllResourses' })
//           return
//       }
//       next()
//   } else {
//       if (store.getters.isLoggedIn) {
//           next()
//           return
//       }
//       next({ name: 'Login' })
//   }
//   next()
// })

export default router
