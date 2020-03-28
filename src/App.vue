<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link v-if="role==='writer'" to="/new">Create new post</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted: function () {
  },
  computed: {
    role() {
      if(this.$store.state['users'].user !== null){
        return this.$store.state['users'].user[0].role
      }else{
        return false
      }
    }
  },
}
</script>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
