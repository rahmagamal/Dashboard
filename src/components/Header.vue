<template>
  <div class="header">  
      <nav class="navbar">
         <div class="container">
             <div class="row content">
                   
                 <div class="col-sm-3">
                   <span class="text">SYS<span class="text2">TEM</span> </span>
                   <!--- responsive menu --->
              
                   
                      <i class="fas fa-bars  menu"></i>
                 </div>
                 <div class="col-sm-6">
                   
                     <ul >
                         <li class="list"> <a href="all_resourses" > All Resources </a></li>
                         <li class="list "> <a href="all_users" > All Users  </a>
                         </li>
                        
                         
                         <li class="list"> <a href="single_resources">Single Resources  </a></li>
                        
                     </ul>
                    
                 </div>
                 <div class="col-sm-3 textfont textcolor icon">
                    
                      <!-- <i class="fas fa-user" ></i> -->
                      <i  @click="logout" class="fas fa-sign-out-alt"></i>Logout
                      
                                
                 </div>
             </div>

             
         
         </div>
      
      </nav>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
methods:{
    ...mapActions({
        logoutAction:'auth/logout'
    }),

    logout(){
        this.logoutAction()
        this.$router.replace('/')
     
        
    }
}
}
</script>

<style>

</style>