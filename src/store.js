import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:"",
    email:"",
    currUserId:"",
    articles:[]
  },
  mutations: {
    SET_ARTICLES(state,payload) {
      console.log("msk mtate");
      
      state.articles = payload
    },
    SET_USER(state,payload) {
      state.username = payload.username,
      state.email = payload.email,
      state.currUserId = payload._id
    }
  },
  actions: {
    getArticles({commit}, payload) {
      axios({
          method: "get",
          url: "http://localhost:3000/articles/show" 
      })
      .then(({data})=>{
          console.log("xxxxxxx",data.dataArticles);
          payload = data.dataArticles
          commit("SET_ARTICLES", payload)
          
      })
      .catch(err=>{
          console.log(err.message);        
      })
    },
    showUser({commit}) {
      axios({
        method:"get",
        url:"http://localhost:3000/users/showone",
        headers:{
          token:localStorage.getItem("token")
        }
      })
      .then(({data})=>{
        console.log("dt user===>",data);
        
        commit('SET_USER',data)
      })
      .catch(err=>{
        console.log(err.message);
        
      })
    }
  }
})

