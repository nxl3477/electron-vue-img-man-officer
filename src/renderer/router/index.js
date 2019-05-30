import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'album',
      component: require('../views/album/album.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
