<template>
    <div>
      <div v-for="item in items" :key="item.id" @click="handleItemPurchase(item)">
        {{ item.name }} - ${{ item.price }}
      </div>
    </div>
  </template>
  
  <script>
  import store from "../data/store.json"
  export default {
    data() {
      return {
        items: store.store
        
      };
    },
  };
  </script>
  