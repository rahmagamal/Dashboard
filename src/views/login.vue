<template>
<section class="login">
    <div class="container">
        <div class="row">
              <div class="col-md-5 card">
                  <form @submit.prevent="login">
                      <h3>Login</h3>
                      <b-col sm="2">
                        <label for="input-default">Email:</label>
                        </b-col>
                        
                     
                        <b-col sm="12" class="mb-3 email  ">
                        <b-form-input  v-model.trim="$v.form.email.$model" id="input-default"
                        :class="{ 'is-invalid': $v.form.email.$error }"
                        class="form__input"
                         size="sm" placeholder="Enter your Email"
                         type="text"
                        
                         ></b-form-input>
                         <div class="error" >
                             <p
                                v-if="!$v.form.email.required && $v.form.email.$error"
                               
                                >
                                Email is required.
                                </p>
                                <p
                                v-if="!$v.form.email.email && $v.form.email.$error"
                               
                                >
                                Enter valid email.
                                </p>
                         </div>
                        </b-col>
                        <i class="fas fa-envelope emailIcon"></i>
              

                     
                        <b-col sm="2">
                        <label for="input-default"  >Password:</label>
                        </b-col>
                        <b-col sm="12" class="mb-3 password">
                        <b-form-input type="password" 
                        v-model.trim="$v.form.password.$model"
                        :class="{ 'is-invalid': $v.form.password.$error }"
                         id="input-default" size="sm" placeholder="Enter your Password"></b-form-input>
                       <div class="error">
                            <div class="error" >
                             <p
                                v-if="!$v.form.password.required && $v.form.password.$error"
                               
                                >
                                Password is required.
                                </p>
                                <p
                                v-if="!$v.form.password.minLength && $v.form.password.$error"
                               
                                >
                                Password must have at least {{$v.form.passwords.$params.minLength.min}} letters.
                                </p>
                         </div>
                       </div>
                    

                        </b-col>
                         <i class="fas fa-lock passwordIcon"></i>
                  <!-- <router-link   to='/all_resourses'> -->
                      <b-row class="my-1 mb-3">
                     
                            <b-button  pill variant="outline-secondary" @click="submit()" :disabled="submitStatus === 'PENDING'">Login</b-button>
                      
                      </b-row>
                    <!-- </router-link >  -->

                    <hr style="width:100%; background-color:rgb(148 189 183) ; height:1px">
                    <h6>DON'T HAVE ANY ACCOUNT ? <a href="register">SIGNUP</a></h6>

               <div>
  
        </div>
        </form>
              </div>
        </div>
    </div>
</section>
</template>

<script>
import {mapActions ,mapGetters} from 'vuex'

import { required , minLength , email} from '../../node_modules/vuelidate/lib/validators'
export default {
data(){
    return{
       form:
       { email:'',
        password:'',
        },
         submitStatus: null
    }
},
 validations: {
form:{    email: {
      required,
      email
      
    },
    password: {
      required,
      minLength:minLength(3)
    }}
  },
  mounted(){
   
  },
  computed:{
    ...mapGetters({
           authenticated:'auth/authenticated',
           user:'auth/user',
     
  
     }),
     
    
  },
   methods: {

   
   ...mapActions({
       logIn:'auth/logIn' //module name /function name
     }),
     submit() {
        this.logIn(this.form).then(()=>{

          this.$router.push({
            name:'AllResourses'
          })
        }).catch(()=>{
          console.log('faild')
        })

    
     

     },
     

     
  },
  
}
</script>

<style>

body .login{
    background-image:url('../assets/images/img3.jpg');
     height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>