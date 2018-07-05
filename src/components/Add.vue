<template>

    <div>
        <div class="col s9">
        <h2>Add Article</h2>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="title" class="materialize-textarea" v-model="title"></textarea>
                    <label for="title">Title</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="content" class="materialize-textarea" v-model="content"></textarea>
                    <label for="content">Content</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="category" class="materialize-textarea" placeholder="choose one: tips,tutorial,music" v-model="category"></textarea>
                    <label for="category">Category</label>
                </div>
            </div>
            <div class="row">
                <div class="col s2">
                    <button class="waves-effect waves-light btn" v-on:click="addArticle()"><i class="material-icons left">email</i>Submit</button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios'

export default {
    data() {
        return{
            title:"",
            content:"",
            category:""
        }
    },
    created() {
        this.getArticles()
    },
    methods:{
        ...mapActions([
            'getArticles'
        ]),
        addArticle() {
            axios({
                method:"post",
                url:"http://localhost:3000/articles/add",    
                data: {
                    title:this.title,
                    content: this.content,
                    category: this.category
                },
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            .then(response=>{
                 swal(
                    'Article Added!',
                    '.',
                    'success'
                )
                .then(()=>{
                    this.$router.push('/')
                })
            })
            .catch(err=>{
                console.log(err.message)
            })
        }   
    }
}
</script>

