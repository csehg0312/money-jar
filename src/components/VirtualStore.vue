<!-- VirtualStore.vue -->
<template>
    <div>
      <div v-for="item in items" :key="item.id" @click="handleItemPurchase(item)">
        {{ item.name }} - ${{ item.price }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Toy', price: 10 },
          { id: 2, name: 'Book', price: 5 },
          // Add more items as needed
        ],
      };
    },
    methods: {
      handleItemPurchase(item) {
        // Implement logic to handle item purchase
      },
    },
  };
  </script>
  