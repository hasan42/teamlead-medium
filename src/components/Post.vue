<template>
  <div class="post">
    <p>{{id}}</p>
    <p>{{title}}</p>
    <p>{{description}}</p>
    <p>{{claps}}</p>
    <p>{{createdAt}}</p>
    <p>{{updateAt}}</p>
    <p>{{userId}}</p>
    <b-field>
      <b-button @click="clap(id)" class="button is-primary">clap</b-button>
      <b-button @click="del(id)" class="button is-primary">del</b-button>
      <router-link :to="{ name: 'Edit', params: { id: id }}" class="button is-primary">edit</router-link>
    </b-field>
  </div>
</template>
<script>
  export default {
    name: 'PostComponent',
    props: ['id', 'title', 'description', 'claps', 'createdAt', 'updateAt', 'userId'],
    computed: {},
    methods: {
      clap: function (id) {
        this.$store.commit('clapPost', id)
      },
      del: function (id) {
        this.$store.commit('deletePost', id)
      },
      edit: function (id) {
        this.$store.commit('editPost', id)
      }
    }
  }
</script>
<style scoped lang="scss"></style>