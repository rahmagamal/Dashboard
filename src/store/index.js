import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({  // make new centrilized store to store data and use it in many components 
  state: {
    counter:0 , //var use it 
  },
  getters:{
    decrease(state){
      return state.counter-1;
    },
   double(state){
   return state.counter*2;
   }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
