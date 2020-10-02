<template>
  <div class="allUsers">
    <Header />
      <div class="container">
         <div class="navigation mb-3">
          <h4>Resources</h4>
        </div>
          <table class="table table-striped">
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
                <tr v-for="resourse in allResourses" :key="resourse.id">
                <th scope="row">{{resourse.id}}</th>
                <td>{{resourse.name}}</td>
                <td>{{resourse.year}}</td>
                <td>{{resourse.color}}</td>
                <td>{{resourse.pantone_value}}</td>
                </tr>
            
            </tbody>
         </table>
        <!-- <pagination :data="data" @pagination-change-page="getAllResourses"></pagination> -->

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
            allResourses:[],
            errors:[],
            data:{},
      }
  },
  methods:{
      getAllResourses(){
          axios.get(`https://reqres.in/api/unknown`)
        .then(response => {
        this.allResourses = response.data.data
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

        this.getAllResourses()
    
  }
}
</script>

