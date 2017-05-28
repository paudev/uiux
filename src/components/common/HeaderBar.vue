<template>
    <div class="header">
        <div class="header-content">Hello</div>
        <div class="header-nav">Hello</div>
    </div>
</template>

<script>
    export default {
      name: 'header-bar',
    };
</script>

<style lang="scss" scoped>
    .header {
        font-family: $font-family;
        font-size: $font-large;
        height:105px !important;
        width: 100%;
        border-bottom: 1px solid $black;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1) !important;
    }
</style>
