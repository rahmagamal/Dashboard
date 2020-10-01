<template>
  <div class="">
    sASSSSSSSSSS
  counter: {{counter}}
  </div>
</template>

<script>
export default {
  data(){
     return {

     }
  },
  mounted(){
    console.log("homeeeeeee")
  },
  computed:{
      counter(){
        return this.$store.state.counter
   
      }
  },
  components: {
    
  }
}
</script>
