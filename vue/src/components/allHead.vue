<template>
  <div class="allHeader">
    <my-menu></my-menu>
    <my-header></my-header>
  </div>
</template>
<script>
import MyMenu from './menu'
import MyHeader from './header'
export default {
  name: 'allHeader',
  components: { MyMenu, MyHeader },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
.allHeader {
  display: flex;
}
</style>