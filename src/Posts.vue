<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="post-grid">
        <div class="posts" v-for='post in posts' :key='post.id'>
                <h3> <span>Post Title: </span> {{post.title}}</h3>
                <h4><span> Post Body: </span> {{post.body}}</h4>
                <router-link 
                    :to="{ name: 'Post', params: { id:post.id } }">
                    <button>
                        Click to see comments
                    </button>
                </router-link>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      msg: 'Welcome to my Vuex Posts'
    }
  },
  computed: {
    posts() {
    return this.$store.state.posts
    }
  },
  mounted() {
      if(this.$store.state.posts.length < 1){
        this.$store.dispatch("getPosts");
      }
    
  }
}
</script>

<style scoped>

.post-grid{
    display: grid;
    grid-template-columns: 1fr;
}
.posts{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 20em;
   margin: 1em 1.5em;
   padding: 1em;
   background-color: rgb(46, 45, 45);
   border-radius: 20px;
   align-items: flex-start;

}

h1{
    font-size: 1.8em;
    text-align: center;
    margin-top: 2em;
}

h3{
    font-size: 1.5em;
    font-weight: bolder;
    
}

h4{
    font-size: 1.1em;
    font-weight: lighter;
    margin-top: 1em;
}

button{
  padding: 0.5em;
  font-size: 1.1em;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: magenta;
    color:white;
  
}

button:hover{
    color: magenta;
    background-color:white;
    transition: all linear .5s;
  
}

@media screen and (min-width:700px){
   .post-grid{
    grid-template-columns: 1fr 1fr;
}
}

@media screen and (min-width:980px){
   .post-grid{
    grid-template-columns: repeat(3, 1fr);
}
}
</style>