<template>
  <div class="tile is-vertical box">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="is-size-7">Create: {{create}}</p>
        </div>
        <div class="level-item" v-if="update">
          <p class="is-size-7">Update: {{update}}</p>
        </div>
      </div>
      <div class="level-right"></div>
    </div>
    <p class="is-size-4">{{title}}</p>
    <p>{{description}}</p>
    
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p title="claps"><b-icon pack="fas" icon="sign-language" size="is-small"></b-icon> {{claps}}</p>
        </div>
      </div>

      <div class="level-right">
        <p class="level-item" v-if="role==='reader'">
          <b-button @click="clap(id)" class="button is-primary" icon-pack="fas" icon-left="sign-language">clap</b-button>
        </p>
        <p class="level-item" v-if="role==='writer'">
          <b-button @click="del(id)" class="button is-primary" icon-pack="fas" icon-left="trash-alt">del</b-button>
        </p>
        <p class="level-item" v-if="role==='writer'">
          <b-button @click="edit(id)" class="button is-primary" icon-pack="fas" icon-left="edit">edit</b-button>
        </p>
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
        this.$router.push( { name: 'Edit', params: { id: id }} )
      }
    }
  }
</script>
<style scoped lang="scss"></style>