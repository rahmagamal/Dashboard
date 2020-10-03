import axios from 'axios'
export default {  
    namespaced:true,
  state: {
   token:'',
   user:'',
 
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
        // dispatch('attempt',response.data.token)
        if (response.status == 200) {
          console.log('2000000')
          this.$router.push({path:"/all_resourses"});
        }
    },
    async attempt({commit},token){
      commit('SET_TOKEN' ,token)
      try{
          let response= axios.get('https://reqres.in/api/register')
        commit('SET_USER' ,response.data)

      }
      catch(e){
        console.log('faild')
      }
    },


  async logIn(_ , credentails){
     
    console.log('aaa',credentails)
      let response = await axios.post('https://reqres.in/api/login' ,credentails)
      console.log('token',response)
     
      if (response.status == 200) {
      
        this.$router.push({path:"/all_resourses"});
      }
  },
  
  }
}
