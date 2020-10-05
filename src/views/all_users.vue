<template>
  <div class="allUsers"> 
       <Header />
      <div class="container">
        <div class="navigation mb-3">
          <div class="row">
            <div class="col-md-10">
                  <h4>Users</h4>
            </div>
            <div class="col-md-2">
              <!-- <button type="button" class="btn btn-info">Create user</button> -->
           
            </div>
          </div>
        
          
        </div>
          <table class="table table-striped table-responsive-md">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                
                <th scope="col">Avatar</th>
                <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(user , index) in allUsers" :key="index">
                <th scope="row">{{user.id}}</th>
                <td>{{user.first_name}}</td>
                <td>{{user.last_name}}</td>
                <td>{{user.email}}</td>
                <td> <img :src=user.avatar /></td>
                <td class="textcolor">
              <i class="far fa-edit mr-2"
               @click="updateUser(user.id)"
              ></i>
                 <i
              @click="removeUser(user.id,index)"
              class="far fa-trash-alt"
            ></i>
                </td>

                </tr>
            
            </tbody>
         </table>
  <div class="col-md-4 offset-md-4">
  <b-pagination size="md" :total-rows="3" v-model="currentPage" :per-page="1"
          @input="getallUsers(currentPage)"
         ></b-pagination>

  </div>
       
        
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
            name:'rahma',
            job:'developer',
            currentPage:1,
             limit: 6,
      }
  },
  methods:{
      getallUsers(){
          axios.get('https://reqres.in/api/users?page='+this.currentPage+'&_limit='+this.limit)
        .then(response => {
        this.allUsers = response.data.data
        this.data=response.data
        console.log("ressssssssssssss",response)
        })
      
        },
        removeUser(id,index){
          console.log(id,index)
          axios.delete('https://reqres.in/api/users/'+id)
          .then( this.allUsers.splice(index, 1));
   
        },

        updateUser(id){
            axios.post(`https://reqres.in/api/users/`+id, {
              name: this.name,
              job:this.job
            })
            // .then(response => {})
            .catch(e => {
              this.errors.push(e)
          })
        }
  },
  mounted(currentPage) {
      
        this.getallUsers(currentPage)
    
  }
}
</script>

