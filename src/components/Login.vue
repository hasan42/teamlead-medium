<template>
  <section>
    <div v-if="login === null">
      <b-field label="Login">
        <b-input type="email" 
                 v-model="form.login"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="password" autocomplete="off"
                 v-model="form.password">
        </b-input>
      </b-field>
      <b-field v-if="showMessage"
               type="is-danger"
               message="Wrong login or password">
      </b-field>
      <b-field>
        <b-button class="button is-primary" @click="loginIn()">Login</b-button>
      </b-field>
    </div>
    <div v-if="login !== null">
      <p>{{login[0].login}}</p>
      <p>{{login[0].role}}</p>
      <b-field>
        <b-button class="button is-primary" @click="exit()">Exit</b-button>
      </b-field>
    </div>
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
      },
      async exit(){
        await this.$store.commit('users/userExit')
      }
    }
  }
</script>
<style scoped lang="scss"></style>