<template>
    <div>
      <div v-for="item in shopItems" :key="item.id">
        <span style="margin: 0.5em 1.5em 1.5em 1.5em 1.5em ;">{{ item.name }} - ${{ item.price }}</span>
        <button v-if="!item.isPurchased" @click="handleItemPurchase(item)" style="background-color: greenyellow; margin: 0 0 1.5em 2.5em;">Megvesz</button>
        <template v-if="item.isPurchased">
          <button style="background-color: blue; margin: 0 0 1.5em 0.5em;">Megnyitás</button>
          <button @click="handleItemSale(item)" style="background-color: orange; margin: 0 0 1.5em 0.5em">Eladás</button>
        </template>
      </div>
      <div>Keszpenzed: {{ inHandMoney }}</div>
    </div>
  </template>
  
  <script>
  
  import store from '../js/data'
  import localStore from '../js/save';
  import { mapState, mapMutations } from 'vuex'
  export default {


    name: 'VirtualStore',
    data() {
      return {
        shopItems: store.items
      }
    },

    computed: {
      ...mapState(['inHandMoney'])
    },

    methods: {

      ...mapMutations([
        'spendInHand',
        'updateDailyMoney'

      ]),

      handleItemPurchase(item) {
        if (item.price <= this.inHandMoney){
          item.isPurchased = true
          localStore.commit({
            type: 'spendInHand',
            amount: item.price
          })
        }else{
          this.notifyUser("Nincs elég készpénzed, tegyél félre hogy megvehesd!",'warning')
        }
      },
      handleItemSale(item){
       
        item.isPurchased = false
        localStore.commit({
          type: 'updateInHand',
          amount: item.price
        })
        
  
      },

      notifyUser(message, iconParameter) {
        this.$swal({
          title: 'Hello,',
          text: message,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          icon: iconParameter
        })
      },
    },
    localStore
  
  };
  </script>
  