<template>
  <div class="tile is-vertical is-ancestor">
    <PostComponent  v-for="post of posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.description"
        :claps="post.claps"
        :createdAt="post.createdAt"
        :updateAt="post.updateAt"
        :userId="post.userId" />

    <hr>
    <b-pagination v-if="pageCount > 10"
        :total="pageCount"
        :per-page="perPage"
        :current.sync="currentPage"
        icon-pack="fas"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">
    </b-pagination>
  </div>
</template>

<script>
  import PostComponent from './Post.vue';

  export default {
    name: 'ListComponent',
    components: {
      PostComponent
    },
    data() {
      return {
        perPage: 10,
        currentPage: 1
      }
    },
    watch: {
      currentPage(newVal){
        this.currentPage = newVal;
        this.$store.commit('posts/changePage',this.currentPage)
      }
    },
    computed: {
      posts () {
        return this.$store.state['posts'].posts
      },
      pageCount(){
        return this.$store.state['posts'].postsLength
      },
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">

</style>