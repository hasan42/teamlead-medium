<template>
  <section>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <p class="title">{{pageName}}</p>
        <b-field label="title">
          <b-input v-model="form.title"></b-input>
        </b-field>
        <b-field label="description">
          <b-input v-model="form.description" type="textarea">
          </b-input>
        </b-field>
        <b-field v-if="showMessage !== ''"
                 type="is-danger"
                 :message="showMessage">
        </b-field>
        <b-field>
          <b-button @click="edit()" class="button is-primary" icon-pack="fas" icon-left="edit">{{buttonName}}</b-button>
        </b-field>
      </div>
    </div>
    
  </section>
</template>

<script>
  export default {
    name: 'EditPostComponent',
    data () {
      return {
        pageName: '',
        buttonName: '',
        showMessage: '',
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
        this.pageName = 'Edit post';
        this.buttonName = 'Save';
        let obj = this.$store.getters['posts/getItemByIdForEdit'](this.$route.params.id)
        this.form.title = obj.title;
        this.form.description = obj.description;
        this.form.id = this.$route.params.id;
        this.form.method = 'posts/editPost';
      }else{
        this.pageName = 'Create new post';
        this.buttonName = 'Create';
        this.form.method = 'posts/newPost';
      }
    },
    methods: {
      edit: function () {

        try{
          if(this.form.title === ''){
            throw 'Error: Need typee title.';
          }
          if(this.form.description === ''){
            throw 'Error: Need typee description.';
          }

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

        }catch(e){
          this.showMessage = e;
        }
      }
    }
  }
</script>
<style scoped lang="scss">

</style>