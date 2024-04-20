<script setup>
import MoneyJars from './components/MoneyJars.vue';
import VirtualStore from './components/VirtualStore.vue';
import UsageVisualizer from './components/UsageVisualizer.vue'
import InfoPanel from './components/InfoPanel.vue'
import BadgeContainer from './components/BadgeContainer.vue';

</script>

<template>
  <div>
    <InfoPanel />
    <MoneyJars />
    <button @click="toggleShopVisibility" style="margin: 3em 0 3em 0;"> {{ isShopVisible ? 'Piac elhagyása' : 'Piachoz' }}</button>
    <VirtualStore v-if="isShopVisible" />
    <BadgeContainer :badges="earnedBadges"/>
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

button {
  color:#f9f9f9;
  background-color: #1a1a1a;
}
</style>

<script>
  export default {
    components: {
      MoneyJars,
      VirtualStore,
      UsageVisualizer,
      InfoPanel, 
      BadgeContainer
    },

    data() {
      return {
        isShopVisible: false,
        earnedBadges: [
        { name: 'Beginner Benefactor', image: '/badges/beginner_benefactor.svg' },        
      ]
      }
    },

    methods: {
      toggleShopVisibility() {
        this.isShopVisible = !this.isShopVisible
      }
    }
  };
</script>

