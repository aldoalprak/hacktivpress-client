<template>
        <div id="login-page" class="row" >
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="col s4"></div>
            <div class="col s4 z-depth-4 card-panel">
                <form class="login-form">
                    <div class="row">
                        <div class="input-field col s12 center">
                            <img src="" alt="" class="circle responsive-img valign profile-image-login">
                            <p class="center login-form-text">Login Hacktivpress</p>
                        </div>
                    </div>
                    <div class="row margin">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="text" v-model="email" name="email" v-validate="'required|email'">
                            <span class="helper-text">{{errors.first('email')}}</span>
                            <label for="email" class="center-align">Email</label>
                        </div>
                    </div>
                    <div class="row margin">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">lock</i>
                            <input id="password" type="password" v-model="password" name="password" v-validate="'required|alpha_num'">
                            <span class="helper-text">{{errors.first('password')}}</span>
                            <label for="password">Password</label>
                        </div>
                    </div>
                
                </form>
                <div class="row">
                    <div class="col s12">
                        <button id="loginButton" class="btn waves-effect waves-light col s12" v-on:click="signIn()">Login</button>
                    </div>
                </div>
            </div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
        </div>

</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            email:"",
            password:""
        }
    },    
    created: function() {
        if(localStorage.hasOwnProperty("token")) {
            this.$router.push("/")
        }
    },
    methods:{
        signIn() {
            this.$validator.validate().then(result=>{
                if(!result) {
                    console.log(result)
                }else{
                    axios({
                        method:"post",
                        url:"http://localhost:3000/users/signin",
                        data: {
                            email: this.email,
                            password:this.password
                        }
                    })
                    .then(response=>{
                        localStorage.setItem("token",response.data.token)
                        this.$router.push('/')
                    })
                    .catch(err=>{
                        console.log("xxxx");
                        
                        console.log(err.response);
                        
                    })
                }
            })        
        }
    }
}

</script>



<style scoped>


#loginButton {
    background-color:#e57373
}

.helper-text {
    color:red
}

</style>

