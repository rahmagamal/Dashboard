<template>
  <div class="">
    
  
   counter :{{counter}}
   <button @click="increase">increase</button>
  </div>
</template>

<script>
export default {
   computed:{
      counter(){
        return this.$store.state.counter
       
      }
  },
  methods:{
      increase(){
          return this.$store.state.counter ++;
      }
  }
}
</script>
