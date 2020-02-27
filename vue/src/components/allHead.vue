<template>
  <div class="allheader">
    <div id="allheader">
      <div class="left">
        <my-menu></my-menu>
      </div>
      <div class="right">
        <my-header></my-header>
      </div>
    </div>
  </div>
</template>

<script>
import MyMenu from '../components/menu'
import MyHeader from '../components/header'
export default {
  name: 'allheader',
  components: { MyMenu, MyHeader }
}
</script>
<style>
#allheader {
  display: flex;
}
.left {
  max-width: 280px;
}
.right {
  flex: 1;
  width: 0;
}
</style>
