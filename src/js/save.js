import { createStore } from 'vuex'
import { localStoragePlugin } from './localStoragePlugin'

const localStore = createStore({
  state: {
    inHandMoney: 0,
    savingAmount: localStorage.getItem('savingAmount') || 0,
    spendingAmount: localStorage.getItem('spendingAmount') || 0,
    givingAmount: localStorage.getItem('givingAmount') || 0,
    earnedBadges: []
  },
  getters: {
    canTakeFromSaving(state) {
      return state.takeAmount <= state.savingAmount;
    },
    isNumberPositive(state) {
      var regex = /^(0|[1-9]\d*)$/;
      return regex.test(state.takeAmount);
    }
  },
  mutations: {
    addBadge(state, badge) {
      if (state.earnedBadges) {
        if (!state.earnedBadges.some(b => b.name === badge.name)) {

          state.earnedBadges.push(badge);
    
        }
  
      } else {
  
        state.earnedBadges = [badge]
  
      }
    },
    handleJarClick(state, payload) {
      switch (payload.jar) {
        case 'saving':
          state.savingAmount += payload.amount;
          break;
        case 'spending':
          state.spendingAmount += payload.amount;
          break;
        case 'giving':
          state.givingAmount += payload.amount;
          break;
        default:
          break;
      }
    },
    handleOfJarTaking(state, payload) {
      state.savingAmount = state.savingAmount - payload.amount;
    },
    updateInHand(state, payload) {
      if (!payload || typeof payload.amount!== 'number') {
        throw new Error('Invalid payload');
      }
      if (payload.isSale) {
        state.inHandMoney += payload.amount
        state.spendingAmount -= payload.amount
      } else {
        state.inHandMoney += payload.amount
      }
    },
    takeTransfer(state, payload) {
      state.inHandMoney = payload.amount
    },
    spendInHand(state, payload) {
      state.inHandMoney -= payload.amount
      state.spendingAmount += payload.amount
    }
  },
  plugins: [localStoragePlugin]
})

localStore.watch((state, getters) => state.savingAmount, (newValue) => {
  if (newValue >= 100) {
    localStore.commit('addBadge', { name: 'Kezdő mentőjelvény', image: '/badges/beginner_saver.svg' })
  }
})

localStore.watch((state, getters) => state.savingAmount, (newValue) => {
  if (newValue >= 200) {
    localStore.commit('addBadge', { name: 'Penny Pincher profi jelvény', image: '/badges/penny_pincher.svg' })
  }
})

localStore.watch((state, getters) => state.savingAmount, (newValue) => {
  if (newValue >= 250) {
    localStore.commit('addBadge', { name: 'Megmentő csillag jelvény', image: '/badges/saver_star.svg' })
  }
})

localStore.watch((state, getters) => state.savingAmount, (newValue) => {
  if (newValue >= 500) {
    localStore.commit('addBadge', { name: 'Takarékos Titán jelvény', image: '/badges/thrifty_titan.svg' })
  }
})

localStore.watch((state, getters) => state.savingAmount, (newValue) => {
  if (newValue >= 750) {
    localStore.commit('addBadge', { name: 'Megtakarítás szuperhős jelvénye', image: '/badges/saving_superhero.svg' })
  }
})

localStore.watch((state, getters) => state.givingAmount, (newValue) => {
  if (newValue >= 50) {
    localStore.commit('addBadge', { name: 'Kezdő jótevő kitűző', image: '/badges/beginner_benefactor.svg' })
  }
})

localStore.watch((state, getters) => state.givingAmount, (newValue) => {
  if (newValue >= 150) {
    localStore.commit('addBadge', { name: 'Jótékonysági bajnokjelvény', image: '/badges/charity_champ.svg' })
  }
})

localStore.watch((state, getters) => state.givingAmount, (newValue) => {
  if (newValue >= 300) {
    localStore.commit('addBadge', { name: 'Hatalmas hatás kitűző', image: '/badges/huge_impact.svg' })
  }
})

localStore.watch((state, getters) => state.givingAmount, (newValue) => {
  if (newValue >= 500) {
    localStore.commit('addBadge', { name: 'Kedvesség keresztes lovag jelvény', image: '/badges/kindness_crusader.svg' })
  }
})

export default localStore