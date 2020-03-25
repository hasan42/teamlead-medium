<template>
  <div>
    <PostComponent  v-for="post of itemsStore"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.description"
        :claps="post.claps"
        :createdat="post.createdAt"
        :updateat="post.updateAt"
        :userid="post.userId" />
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
        return this.$store.getters['getItems']()
      }
    },
    methods: {
    }

  }
</script>
<style scoped lang="scss">

</style>