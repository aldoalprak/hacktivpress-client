<template>
  <div class="home">
    <Navbar/>
    <Sidenav/>
    <MainArticle/>
    <div class="fixed-action-btn" v-if="adminStatus == true">
            <button @click="addArticle()" class="btn-floating btn-large waves-effect waves-light red lighten-2 pulse"><i class="material-icons">add</i></button> 
    </div>
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
  },
   data(){
    return {
      adminStatus:false
    }
  },
  created() {
    if(localStorage.hasOwnProperty('token')){
      console.log(this.adminStatus);
      this.adminStatus = true
    }else{
      this.adminStatus = false
    }
  },
  methods: {
    addArticle() {
      this.$router.push("/add")
    }
  }
}
</script>