import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({  // make new centrilized store to store data and use it in many components 
  state: {
   
  },

  mutations: {
  
  },
  actions: {
   
  },
  modules: {
    auth 
  }

})
