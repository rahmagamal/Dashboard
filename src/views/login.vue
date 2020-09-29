<template>
<section class="login">
    <div class="container">
        <div class="row mt-5">
              <div class="col-md-5 card">
                  <form @submit.prevent="login">
                      <h3>Login</h3>
                      <b-col sm="2">
                        <label for="input-default">Email:</label>
                        </b-col>
                        
                     
                        <b-col sm="12" class="mb-3 email  ">
                        <b-form-input  v-model.trim="$v.email.$model" id="input-default"
                        :class="{ 'is-invalid': $v.email.$error }"
                        class="form__input"
                         size="sm" placeholder="Enter your Email"
                         type="text"
                        
                         ></b-form-input>
                         <div class="error" >
                             <p
                                v-if="!$v.email.required && $v.email.$error"
                               
                                >
                                Email is required.
                                </p>
                                <p
                                v-if="!$v.email.email && $v.email.$error"
                               
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
                        v-model.trim="$v.password.$model"
                        :class="{ 'is-invalid': $v.password.$error }"
                         id="input-default" size="sm" placeholder="Enter your Password"></b-form-input>
                       <div class="error">
                            <div class="error" >
                             <p
                                v-if="!$v.password.required && $v.password.$error"
                               
                                >
                                Password is required.
                                </p>
                                <p
                                v-if="!$v.password.minLength && $v.password.$error"
                               
                                >
                                Password must have at least {{$v.passwords.$params.minLength.min}} letters.
                                </p>
                         </div>
                       </div>
                    

                        </b-col>
                         <i class="fas fa-lock passwordIcon"></i>

                     <b-row class="my-1 mb-3">
                          <b-button  pill variant="outline-secondary" @click="login()" :disabled="submitStatus === 'PENDING'">Login</b-button>
                     </b-row>
                    <hr style="width:100%; background-color:rgb(148 189 183) ; height:1px">
                    <h6>DON'T HAVE ANY ACCOUNT ? <a href="#">SIGNUP</a></h6>

               <div>
  
        </div>
        </form>
              </div>
        </div>
    </div>
</section>
</template>

<script>
import { required , minLength , email} from '../../node_modules/vuelidate/lib/validators'
export default {
data(){
    return{
        email:'',
        password:'',
         submitStatus: null
    }
},
 validations: {
    email: {
      required,
      email
      
    },
    password: {
      required,
      minLength:minLength(8)
    }
  },
   methods: {

     login() {
    
      this.$v.$touch()
      
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
      console.log(this.submitStatus)
    }
  }
}
</script>

<style>

body{
    background-image:url('../assets/images/img3.jpg');
     height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>