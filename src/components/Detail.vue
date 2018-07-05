<template>
    <div class="col s9" id="content">
        <h3>{{$route.params.title}}</h3> 
        <div class="card hoverable blue-grey darken-1">
            <div class="card-content white-text" v-for="(article,index) in currArticleAlt" :key="index">
                <span class="card-title">{{article.title}}</span>
                <p>{{article.content}}</p>
            </div>
        </div>
    </div>    
</template>

<script>
import {mapState,mapActions} from 'vuex'
import axios from "axios"

export default {
    props:['title'],
    data() {
        return {
           currArticle:[],
           currArticleAlt:[]
        }
    },
    created() {
        this.getArticles()
        this.getOneArticle()    
    },
    watch: {
        '$route' (to, from) {
            this.getOneArticle()
        },    
    },
    computed:{
        ...mapState([
            'articles'
        ])
    },
    methods:{
       ...mapActions([
           'getArticles'
       ]),
       getOneArticle() {
           axios({
               method:"get",
               url:`http://localhost:3000/articles/showone/${this.$route.params.title}`
           })
           .then(response=>{
              
               this.currArticleAlt = response.data.dataArticle
                console.log("sssss",this.currArticleAlt);
           })
       } 
    }
}
</script>

