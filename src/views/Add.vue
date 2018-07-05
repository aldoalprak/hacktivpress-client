<template>
  <div class="add">    
    <div class="row">
      <Navbar/>  
      <Sidenav/>
      <AddArticle/>  
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src


import Sidenav from '@/components/Sidenav.vue'
import Navbar from '@/components/Navbar.vue'
import AddArticle from '@/components/Add.vue'

export default {
  name: 'add',
  components: {
    Sidenav,
    Navbar,
    AddArticle
  },
  created() {
    if(!localStorage.hasOwnProperty('token')){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
