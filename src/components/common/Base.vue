<template>
    <div class="base">
        <header-bar />
    </div>
</template>

<script>
    import HeaderBar from './HeaderBar';
    
    export default {
      name: 'base',
      components: {
        HeaderBar,
      },
    };
</script>
