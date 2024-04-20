<template>
    <div class="trophy-room">
      <h2>Kitüntetések terme</h2>
      <div v-if="badges.length === 0" class="empty-message">You haven't earned any badges yet.</div>
      <div class="badge-container" v-else>
        <div v-for="(badge, index) in badges" :key="index" class="badge-item">
          <img :src="badge.image" :alt="badge.name" class="badge-image">
          <div class="badge-name">{{ badge.name }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BadgeContainer',
    props: {
      badges: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .trophy-room {
    text-align: center;
    margin-top: 20px;
  }
  
  .badge-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .badge-item {
    display: flex;
    flex-direction: column;
  }
  
  .badge-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  
  .badge-name {
    margin-top: 5px;
  }
  </style>  