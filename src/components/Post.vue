<template>
  <div class="tile is-vertical box">
    <p>{{id}}</p>
    <p class="title">{{title}}</p>
    <p>{{description}}</p>
    
    <p>{{userId}}</p>
    
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p>claps: {{claps}}</p>
        </div>
        <div class="level-item">
          <p>{{create}}</p>
        </div>
        <div class="level-item" v-if="update">
          <p>update: {{update}}</p>
        </div>
      </div>

      <div class="level-right">
        <p class="level-item" v-if="role==='reader'"><b-button @click="clap(id)" class="button is-primary">clap</b-button></p>
        <p class="level-item" v-if="role==='writer'"><b-button @click="del(id)" class="button is-primary">del</b-button></p>
        <p class="level-item" v-if="role==='writer'"><router-link :to="{ name: 'Edit', params: { id: id }}" class="button is-primary">edit</router-link></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PostComponent',
    data(){
      return {
        create: null,
        update: null
      }
    },
    props: ['id', 'title', 'description', 'claps', 'createdAt', 'updateAt', 'userId'],
    computed: {
      role() {
        if(this.$store.state['users'].user !== null){
          return this.$store.state['users'].user[0].role
        }else{
          return false
        }
        // console.log('role',this.$store.state['users'].user[0].role)
        // return this.$store.state['users'].user
      }
    },
    watch: {
      role: function (newRole) {
        console.log(newRole.then((resp)=>{console.log(resp)}))
        // if(newlogin !== null){
        //   this.$router.push({ name: "Home"})
        // }
      }
    },
    mounted() {
      this.create = new Date(this.createdAt).toDateString()
      this.update = this.createdAt === this.updateAt ? null : new Date(this.updateAt).toDateString()
    },
    methods: {
      clap: function (id) {
        this.$store.commit('posts/clapPost', id)
      },
      del: function (id) {
        this.$store.commit('posts/deletePost', id)
      },
      edit: function (id) {
        this.$store.commit('posts/editPost', id)
      }
    }
  }
</script>
<style scoped lang="scss"></style>