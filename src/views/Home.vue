<template>
  <div class="home">
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
  }
}
</script>
