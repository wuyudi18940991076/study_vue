<template>
  <div class="home">
    <div id="home">
      <div class="left">
        <my-menu></my-menu>
      </div>
      <div class="right">
        <my-header></my-header>
      </div>
    </div>
    <my-date></my-date>
  </div>
</template>

<script>
import MyMenu from '../components/menu'
import MyHeader from '../components/header'
import MyDate from '../components/date'
export default {
  name: 'home',
  components: { MyMenu, MyHeader, MyDate }
}
</script>
<style>
#home {
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
