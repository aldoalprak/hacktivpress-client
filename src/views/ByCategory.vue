<template>
  <div class="home">
    <Navbar/>
    <Sidenav/>
    <Category/>
    <div class="fixed-action-btn" v-if="adminStatus == true">
            <button @click="addArticle()" class="btn-floating btn-large waves-effect waves-light red lighten-2 pulse"><i class="material-icons">add</i></button> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/Sidenav.vue'
import Category from '@/components/Category.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Sidenav,
    Category
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