<template>
  <div id="app">
   <div id="header-link">
      <router-link id="header" :to="{ name: 'Hello' }">Home</router-link>
      <router-link  id="header" to="/posts">Posts</router-link>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300;500;700&display=swap');
#app {
  font-family: 'Mukta', 'sans-serif';;
 min-width: 280px;
 max-width: 1200px;
 width: 100%;
}

#header-link{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  font-size: 1.5em;
}
#header{
    padding-bottom: 0;
    padding-top: 0;
}
.router-link-exact-active{
    border-bottom: 2px solid var(--styleColor);
  
}
</style>
