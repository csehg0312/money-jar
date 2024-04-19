<script setup>
import MoneyJars from './components/MoneyJars.vue';
import VirtualStore from './components/VirtualStore.vue';
import UsageVisualizer from './components/UsageVisualizer.vue'

</script>

<template>
  <div>
    <MoneyJars />
    <button @click="toggleShopVisibility" style="margin: 3em 0 3em 0;"> {{ isShopVisible ? 'Piac elhagyása' : 'Piachoz' }}</button>
    <VirtualStore v-if="isShopVisible" />
    <UsageVisualizer/>
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
      UsageVisualizer,
    },

    data() {
      return {
        isShopVisible: false,
      }
    },

    methods: {
      toggleShopVisibility() {
        this.isShopVisible = !this.isShopVisible
      }
    }
  };
</script>

