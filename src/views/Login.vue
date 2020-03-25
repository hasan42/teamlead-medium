<template>
  <div class="container">
    <LoginComponent ></LoginComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    LoginComponent
  }
}
</script>
