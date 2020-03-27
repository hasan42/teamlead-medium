<template>
  <section>
    <p>{{login}}</p>
    <b-field label="Login">
      <b-input type="email" 
               v-model="form.login"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password"
               v-model="form.password"
               password-reveal>
      </b-input>
    </b-field>
             <p v-if="errorMsg">Wrong login or password</p>
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
        newlogin: null,
        oldlogin: null,
        showMessage: false,
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
      errorMsg(){
        return this.$store.state['errorMsg']
      }
    },
    watch: {
      // эта функция запускается при любом изменении вопроса
      login: (newLogin) => () => {
        console.log(newLogin)
        if(newLogin === null){
          this.showMessage = true;
        }else{
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