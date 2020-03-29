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
          method: '',
          id: '',
          title: '',
          description: '',
        }
      }
    },
    mounted: function () {
      if(this.$route.params.id){
        let obj = this.$store.getters['posts/getItemByIdForEdit'](this.$route.params.id)
        this.form.title = obj.title;
        this.form.description = obj.description;
        this.form.id = this.$route.params.id;
        this.form.method = 'posts/editPost';
      }else{
        this.form.method = 'posts/newPost';
      }
    },
    methods: {
      edit: function () {
        let objId = this.$route.params.id ? {id: this.$route.params.id} : null;
        let obj = {
          title: this.form.title,
          description: this.form.description
        }
        this.form.title = '';
        this.form.description = '';

        if(this.$route.params.id){
          obj = {...obj, ...objId}
        }

        this.$store.commit(this.form.method, obj)
        this.$router.push({ name: "Home"})
      }
    }
  }
</script>
<style scoped lang="scss">

</style>