import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Login from './views/Login.vue'
import Album from './views/Album.vue'
import Favorite from './views/Favorite.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: List
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    }
  ]
})
