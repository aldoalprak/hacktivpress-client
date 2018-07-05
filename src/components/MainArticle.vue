<template>
    <div class="wrapper">
        <div class="row">
            <div class="col s12" id="content">
                <h3>Home</h3> 
                <div class="card hoverable small blue-grey darken-2" v-for="(article,index) in articles" :key="index">
                    <div class="card-content white-text">
                        <span class="card-title">@{{article.userId.username}}</span>
                        <span class="card-title">{{article.title}}</span>
                        <p>{{article.content}}</p>
                        <!-- <p>{{article.content}}</p> -->
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="col s2">
                                <router-link :to="`/content/${article.title}`">Read More</router-link>
                            </div>
                            <div class="col s2 offset-s10"  v-if="adminStatus == true">
                                <router-link :to="`/update/${article.title}`"><button class="btn-floating btn-small waves-effect waves-light" ><i class="material-icons">edit</i></button></router-link>
                                <button class="btn-floating btn-small waves-effect waves-light red" @click="deleteArticle(article._id)"><i class="material-icons">delete</i></button>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
        
</template>

<script>

import axios from 'axios'
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return{
            adminStatus:true
        }
    },
    created() {
        if(localStorage.hasOwnProperty('token')){
            console.log(this.adminStatus);
            this.adminStatus = true
        }else{
            this.adminStatus = false
        }
        this.getArticles()
    },
    computed: {
        ...mapState([
            "articles"
        ])
    },
    methods: {
        ...mapActions([
            "getArticles"
        ]),
        deleteArticle(id) {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result) => {
                console.log(result);
                console.log(id);
                
                if (result.value) {
                    axios({
                        method:"delete",
                        url:`http://localhost:3000/articles/delete/${id}`,
                        headers:{
                            token: localStorage.getItem("token")
                        }
                    })
                    .then(({data})=>{
                        this.getArticles()
                        swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
                    .catch(err=>{
                        console.log(err);
                        
                    })   
                }else{
                    console.log("asdad");
                    
                }
            })
        },
        
    }
}
</script>


<style scoped>
.wrapper {
    padding-left: 301px;
}

@media only screen and (max-width : 992px) {
      .wrapper {
        padding-left: 0;
      }
    }
</style>
