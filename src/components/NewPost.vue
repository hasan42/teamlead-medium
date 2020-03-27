<template>
  <section>
    <b-field label="title">
      <b-input v-model="form.title"></b-input>
    </b-field>
    <b-field label="description">
      <b-input type="textarea"
               v-model="form.description">
      </b-input>
    </b-field>
    <b-field>
      <b-button @click="newPost()" class="button is-primary">Create</b-button>
    </b-field>
  </section>
</template>

<script>
  export default {
    name: 'EditPostComponent',
    data () {
      return {
        form: {
          title: '',
          description: '',
        }
      }
    },
    mounted: function () {
    },
    methods: {
      newPost: function () {
        let obj = {
          title: this.form.title,
          description: this.form.description
        }

        this.form.title = '';
        this.form.description = '';

        this.$store.commit('posts/newPost', obj)
        this.$router.push({ name: "Home"})
      }
    }
  }
</script>
<style scoped lang="scss">

</style>