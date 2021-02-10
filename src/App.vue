<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <b-dropdown class="ml-3" right text="Menu">
      <b-dropdown-item @click="logOut">cerrar Sesion</b-dropdown-item>
      <!-- <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Item 3</b-dropdown-item> -->
    </b-dropdown>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
  methods: mapActions(['logOut']),
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
