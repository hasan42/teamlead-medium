<template>
  <div class="tile is-ancestor">
    <ListComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ListComponent from '@/components/List.vue'

export default {
  name: 'Home',
  components: {
    ListComponent
  },
  mounted: function () {
    this.$store.commit('posts/getAllPostsRemote')
    this.$store.commit('posts/getPostsByPageRemote')
  },
}
</script>
