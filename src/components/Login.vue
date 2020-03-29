<template>
  <section>
    <div v-if="login === null">
      <form>
        <b-field label="Login">
          <b-input type="email" 
                   v-model="form.login"></b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password" autocomplete="off"
                   v-model="form.password">
          </b-input>
        </b-field>
        <b-field v-if="showMessage !== ''"
                 type="is-danger"
                 :message="showMessage">
        </b-field>
        <b-field>
          <b-button class="button is-primary" @click="loginIn()">Login</b-button>
        </b-field>
      </form>
    </div>
    
    <div v-if="login !== null">
      <p>Login: {{login[0].login}}</p>
      <p>Role: {{login[0].role}}</p>
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
        try{
          if(this.form.login === ''){
            throw 'Error: Need typee login.';
          }
          if(this.form.login.indexOf('@') < 0){
            throw 'Error: Login is email.';
          }
          if(this.form.password === ''){
            throw 'Error: Need typee password.';
          }
          let obj = {
            login: this.form.login,
            password: this.form.password
          }
          await this.$store.commit('users/userLogin', obj)
        }catch(e){
          this.$store.commit('users/makeError', e)
        }
      },
      async exit(){
        await this.$store.commit('users/userExit')
      }
    }
  }
</script>
<style scoped lang="scss"></style>