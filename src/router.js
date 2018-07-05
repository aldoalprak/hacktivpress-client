import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Add from './views/Add.vue'
import CompleteArticle from './views/CompleteArticle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/content/:title',
      name: 'completeArticle',
      component: CompleteArticle,
      props:true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],mode:"history"
})
