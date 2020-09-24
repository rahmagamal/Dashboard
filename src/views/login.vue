<template>
<section class="login">
    <div class="container">
        <div class="row mt-5">
              <div class="col-md-5 card">
                      <h3>Login</h3>
                      <b-col sm="2">
                        <label for="input-default">Email:</label>
                        </b-col>
                        
                     
                        <b-col sm="12" class="mb-3 email">
                        <b-form-input id="input-default" size="sm" placeholder="Enter your Email"></b-form-input>
                        </b-col>
                        <i class="fas fa-envelope emailIcon"></i>
              

                     
                        <b-col sm="2">
                        <label for="input-default">Password:</label>
                        </b-col>
                        <b-col sm="12" class="mb-3 password">
                        <b-form-input id="input-default" size="sm" placeholder="Enter your Password"></b-form-input>
                        </b-col>
                         <i class="fas fa-lock passwordIcon"></i>

                     <b-row class="my-1 mb-3">
                          <b-button  pill variant="outline-secondary">Login</b-button>
                     </b-row>
                    <hr style="width:100%; background-color:rgb(148 189 183) ; height:1px">
                    <h6>DON'T HAVE ANY ACCOUNT ? <a href="#">SIGNUP</a></h6>

               <div>
  
        </div>
              </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>

body{
    background-image:url('../assets/images/img5.jpg');
     height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>