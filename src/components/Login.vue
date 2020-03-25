<template>
  <section>
    <b-field label="Username"
             type="is-success"
             message="This username is available">
      <b-input v-model="name" maxlength="30"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password"
               v-model="password"
               password-reveal>
      </b-input>
    </b-field>
    <b-field>
      <b-button class="button is-primary">Login</b-button>
    </b-field>
  </section>
</template>
<script>
  export default {
    name: 'LoginComponent',
    data() {
      return {
        name: 'John Silver',
        password: 'John Silver',
      }
    }
  }
</script>
<style scoped lang="scss"></style>