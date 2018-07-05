<template>
  <div class="home">
    <Navbar/>
    <Sidenav/>
    <MainArticle/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/Sidenav.vue'
import MainArticle from '@/components/MainArticle.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Sidenav,
    MainArticle
  }
}
</script>