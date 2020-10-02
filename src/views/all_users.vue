<template>
  <div class="allUsers"> 
       <Header />
      <div class="container">
        <div class="navigation mb-3">
          <h4>Users</h4>
        </div>
          <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                
                <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in allUsers" :key="user.id">
                <th scope="row">{{user.id}}</th>
                <td>{{user.first_name}}</td>
                <td>{{user.last_name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.avatar}}</td>
                </tr>
            
            </tbody>
         </table>
         
        <!-- <pagination :data="data" @pagination-change-page="getallUsers"></pagination> -->

      </div>
   
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header'
export default {
  components:{
    Header
  },
  data(){
      return{
            allUsers:[],
            errors:[],
            data:{},
      }
  },
  methods:{
      getallUsers(){
          axios.get(`https://reqres.in/api/users?page=2`)
        .then(response => {
        this.allUsers = response.data.data
        this.data=response.data
        console.log("ressssssssssssss",response)
        })
                // setTimeout(() => {
                //         this.$router.replace({
                //             query: {
                //                 page: page
                //             }
                //         })
                //     }, 100)
        .catch(e => {
        this.errors.push(e)
        })

        }
  },
  mounted() {
        // const page = typeof this.$route.query.page != 'undefined' ? this.$route.query.page : 1

        this.getallUsers()
    
  }
}
</script>

