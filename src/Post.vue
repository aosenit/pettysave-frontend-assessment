<template>
  <div class="post-body">
    <h1>{{ message }}</h1>
    <div  class="post">
        <h3>{{activePost.body}}</h3>
        
        <ul>
            <h4>COMMENTS</h4>
            <li v-for="comment in comments" :key="comment.id">{{comment.body}}</li>   
        </ul>
        <router-link to="/posts" >
        <h5 class="back"> Click to go back to Posts</h5>   
        </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'post',
  data () {
    return {
      message: 'View Post and Its Comments',
      comments: [],
      activePost: []
    }
  },

    methods: {
        getComments(id){
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => {
            this.comments = response.data
            })
        },
        getPost(id){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
            this.activePost = response.data
            })
        }
    },

  mounted() {
      const {history:{current:{params}}} = this.$router
      if(!params.id){
          this.$router.push("/post")
          return
      }
      const {id} = params

    
    this.getPost(id)
    this.getComments(id)
  }
}
</script>

<style scoped>
  .post-body{
        margin-top: 2em;
        
  }
    .post{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 60vh;
        margin: 1em 1.5em;
        padding:2em 1em;
        background-color: rgb(46, 45, 45);
        border-radius: 20px;
        align-items: center;
    }
        h1{
            font-size: 1.8em;
            text-align: center;
            margin-top: 1em;
           
        }

        h3{
            font-size: 1.3em;
            font-weight: bolder;
            margin-bottom: 2em;
             line-height: 1.5em;
             word-spacing: .2em;
        }

        h4{
            text-align: center;
            color: magenta;
            padding-bottom: .5em;
        }

        li{
            
            margin-bottom: 2em;
            padding: 1em;
            border: radius 10px;
            text-align: center;
            box-shadow: 2px 2px 3px rgba(0,0,0, .5),
                         -2px -2px 3px rgba(0,0,0, .5);

        }

        @media screen and (min-width:700px){
            h3{
                width: 60%;
                margin: 1em auto;
            }

            li{
            width: 60%;
            margin: 2em auto;
            height: 6em;
            }
        }

        @media screen and (min-width:980px){
            .post{
                width: 60%;
                margin: 1em auto;
                min-height: 80vh;
            }

             h4{
        
            margin-bottom: -1.5em;
        }
        }

</style>