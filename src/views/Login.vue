<template>
    <div class="login">
        <div class="container">
            <Login/>
        </div>
        
    </div>
    
</template>

<script>
import Login from '../components/Login.vue'

export default {
    name:"login",
    components:{
        Login   
    }
}
</script>

<style scoped>
.login {
    background-image: url("https://i.stack.imgur.com/jGlzr.png");
    background-size: cover
}


</style>
