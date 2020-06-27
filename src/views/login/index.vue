<template>
  <div class="container">
    <svg-icon icon-class="banner" />
    <a>{{ username }}</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: mapState({
    username: state => state.user.username
  })
}
</script>

<style lang="stylus" scoped>
a {
  color: red;
}
</style>
