<template>
  <div class="tile is-vertical is-ancestor">
    <PostComponent  v-for="post of itemsStore"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.description"
        :claps="post.claps"
        :createdAt="post.createdAt"
        :updateAt="post.updateAt"
        :userId="post.userId" />
  </div>
</template>

<script>
  import PostComponent from './Post.vue';

  export default {
    name: 'ListComponent',
    components: {
      PostComponent
    },
    computed: {
      itemsStore () {
        return this.$store.getters['posts/getItems']()
      }
    },
    methods: {}
  }
</script>
<style scoped lang="scss">

</style>