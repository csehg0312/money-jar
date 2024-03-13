<script setup>
import MoneyJars from './components/MoneyJars.vue';
import VirtualStore from './components/VirtualStore.vue';

</script>

<template>
  <div>
    <MoneyJars />
    <VirtualStore />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script>
  export default {
    components: {
      MoneyJars,
      VirtualStore,
    },
  };
</script>

