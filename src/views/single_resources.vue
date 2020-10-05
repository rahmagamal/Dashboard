<template>
  <div class="allUsers">
    <Header />
      <div class="container">
         <div class="navigation mb-3">
          <h4>Single Resources</h4>
         
        </div>
          <table class="table table-striped table-responsive-md">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Year</th>
                <th scope="col">Color</th>
                <th scope="col">Pantone Value</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                <th >{{singelResource.data.id}}</th>
                <td>{{singelResource.data.name}}</td>
                <td>{{singelResource.data.year}}</td>
                <td>{{singelResource.data.color}}</td>
                <td>{{singelResource.data.pantone_value}}</td>
                </tr>
            
            </tbody>
         </table>
    
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
            singelResource:{},
            errors:[],
            data:{},
      }
  },
  methods:{
      getsingelResource(){
          axios.get(`https://reqres.in/api/unknown/2`)
        .then(response => {
        this.singelResource = response.data
        this.data=response.data
        console.log("ressssssssssssss", this.singelResource )
        })
              
        }
  },
  mounted() {

        this.getsingelResource()
    
  }
}
</script>

