<template>
  <div class="completeArticle">    
    <div class="row">
      <Navbar/>  
      <Sidenav/>
      <Detail/> 
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/Sidenav.vue'
import Detail from '@/components/Detail.vue'

export default {
  name: 'completeArticle',
  components: {
    Navbar,
    Sidenav,
    Detail
  }
}
</script>