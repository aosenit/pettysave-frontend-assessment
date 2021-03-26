import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Post from '@/Post'
import Posts from '@/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post,
      props:true
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
      }

  ]
})