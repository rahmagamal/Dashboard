<template>
  <div class="allUsers"> 
       <Header />
      <div class="container">
        <div class="navigation mb-3">
          <div class="row">
              <div class="col-md-10">
                    <h4>Users</h4>
                
              </div>
               <!---- Create modal ----->
                <div class="col-md-2">
                 
                  <b-button v-b-modal.modal-prevent-closing variant="success">Create</b-button>
                <b-modal
                  id="modal-prevent-closing"
                  ref="modal"
                  title="Submit Your Name"
                 
                  @ok="handleOk"
                >
                  <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                      :state="nameState"
                      label="Name"
                      label-for="name-input"
                      invalid-feedback="Name is required"
                    >
                      <b-form-input
                        id="name-input"
                        v-model="name"
                        :state="nameState"
                        required
                      ></b-form-input>
                      
                    </b-form-group>
                      <b-form-group
                      :state="nameState"
                      label="job"
                      label-for="job-input"
                      invalid-feedback="job is required"
                    >
                     <b-form-input
                        id="job-input"
                        v-model="job"
                        :state="nameState"
                        required
                        
                      ></b-form-input>

                      </b-form-group>
                  </form>
                  
                </b-modal>
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
                <th scope="col">Delete</th>

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
           
               <!-- <b-button v-b-modal.modal-prevent-closing variant="primary"  @click="updateUser(user.id)">Edit</b-button> -->
            
               <b-button  variant="danger" @click="removeUser(user.id,index)" class="ml-2">Delete</b-button>

             
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
            name:'',
            job:'',
            currentPage:1,
             limit: 6,
          
        nameState: null,
        submittedNames: [],
        editName:'',
        editJob:'',
             
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
              name: this.editName,
              job:this.editJob
          
            })
            // .then(response => {})
            .catch(e => {
              this.errors.push(e)
          })
        },
          resetModal() {
        this.name = ''
        this.nameState = null
      },
     
        checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
    
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        });
        axios.post(`https://reqres.in/api/users`, {
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

