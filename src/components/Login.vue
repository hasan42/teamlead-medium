<template>
  <section>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div v-if="login === null">
          <p class="title">Login</p>
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
              <b-button class="button is-primary" @click="loginIn()" icon-pack="fas" icon-left="sign-in-alt">Login</b-button>
            </b-field>
          </form>
        </div>
        
        <div v-if="login !== null">
          <p class="title">Current user</p>
          <b-field label="Login">
            {{login[0].login}}
          </b-field>
          <b-field label="Role">
            {{login[0].role}}
          </b-field>
          <b-field>
            <b-button class="button is-primary" @click="exit()" icon-pack="fas" icon-left="sign-out-alt">Exit</b-button>
          </b-field>
        </div>
      </div>
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