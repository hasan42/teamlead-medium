<template>
  <section>
    <b-field label="Login">
      <b-input type="email" 
               v-model="form.login"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" autocomplete="off"
               v-model="form.password">
      </b-input>
    </b-field>
    <b-field  v-if="showMessage"
               type="is-danger"
               message="Wrong login or password">
    </b-field>
    <b-field>
      <b-button class="button is-primary" @click="loginIn()">Login</b-button>
    </b-field>

  </section>
</template>

<script>
  export default {
    name: 'LoginComponent',
    data() {
      return {
        newloginW: null,
        oldloginW: null,
        form: {
          login: '',
          password: '',
        }
      }
    },
    computed: {
      login() {
        return this.$store.state['users'].user
      },
      showMessage(){
        return this.$store.state['users'].errorMsg
      }
    },
    watch: {
      login: function (newlogin) {
        if(newlogin !== null){
          this.$router.push({ name: "Home"})
        }
      }
    },
    methods: {
      async loginIn() {
        let obj = {
          login: this.form.login,
          password: this.form.password
        }
        await this.$store.commit('users/userLogin', obj)
      }
    }
  }
</script>
<style scoped lang="scss"></style>