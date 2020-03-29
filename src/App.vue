<template>
  <div id="app">
    <nav id="nav" class="navbar is-link">
      <div class="container">
        
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" v-if="role==='writer'" to="/new">Create new post</router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link class="button is-light" to="/login">Login</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container wrap">
      <router-view/>
    </div>
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
  .wrap {
    padding-top: 30px;
  }
</style>
