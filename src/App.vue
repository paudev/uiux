<template>
  <div id="app">
    <div class="font">Hello!</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
  @import 'assets/styles/app.scss';
</style>
