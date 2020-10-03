import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default {  
    namespaced:true,
  state: {
   token: '',
   user:'',
 
  },
  getters:{
    authenticated(state){
      return state.token 
    },

    user(state){
      return state.user
    }
  },

  mutations: {
     SET_TOKEN(state,token){
       state.token=token
     },

     SET_USER(state,data){
      state.user=data
    }
  },
  actions: {
   
    async signIn(_ , credentails){
     
      console.log('aaa',credentails)
        let response = await axios.post('https://reqres.in/api/register' ,credentails)
        console.log('token',response.status)
      localStorage.setItem('token',response.data.token) 

        // dispatch('attempt',response.data.token)
        
    },
    // async attempt({commit},token){
    //   commit('SET_TOKEN' ,token)
    //   try{
    //       let response= axios.get('https://reqres.in/api/register')
    //     commit('SET_USER' ,response.data)

    //   }
    //   catch(e){
    //     console.log('faild')
    //   }
    // },


  async logIn(_ , credentails){
     
    console.log('aaa',credentails)
      let response = await axios.post('https://reqres.in/api/login' ,credentails)
      console.log('token',response)
      localStorage.setItem('token',response.data.token) 
      // if (response.status == 200) {
      //   document.location.href ='/all_resourses'
        
      // }

  },
  
  }
}
