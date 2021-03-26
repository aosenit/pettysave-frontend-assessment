<template>
  <div id="app">
    <router-link :to="{ name: 'Hello' }">Home</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>

#app {
 min-width: 280px;
 max-width: 1200px;

}
</style>
