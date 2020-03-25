<template>
  <section>
    <b-field label="title"
             type="is-success"
             message="This title is available">
      <b-input v-model="form.title"></b-input>
    </b-field>
    <b-field label="description">
      <b-input type="is-success"
               v-model="form.description">
      </b-input>
    </b-field>
    <b-field>
      <b-button @click="edit()" class="button is-primary">edit</b-button>
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
      let obj = this.$store.getters['getItemByIdForEdit'](this.$route.params.id)
      this.form.title = obj.title
      this.form.description = obj.description
    },
    methods: {
      edit: function () {
        let obj = {
          id: this.$route.params.id,
          title: this.form.title,
          description: this.form.description
        }
        this.$store.commit('editPost', obj)
      }
    }
  }
</script>
<style scoped lang="scss">

</style>