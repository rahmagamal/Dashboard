import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// import './axios'
/**
 * import main scss
 */
import '@/assets/sass/main.scss'


Vue.config.productionTip = false

new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')
