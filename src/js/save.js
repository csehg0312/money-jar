import { createStore } from 'vuex'
import { localStoragePlugin } from './localStoragePlugin'

const localStore = createStore({

  state: {
      inHandMoney: 0,
      savingAmount:localStorage.getItem('savingAmount') || 0,
      spendingAmount: localStorage.getItem('spendingAmount') || 0,
      givingAmount: localStorage.getItem('givingAmount') || 0,
  },
  computed: {
      canTakeFromSaving() {
          return this.takeAmount <= this.savingAmount;
        },

        isNumberPositive() {
          var regex = /^(0|[1-9]\d*)$/;

          return regex.test(this.takeAmount);
        }
  },
  mutations: {
    handleJarClick(state, payload) {
      
      switch (payload.jar) {
        case 'saving':
          state.savingAmount += payload.amount;
          // state.inHandMoney = 0;
          break;
        case 'spending':
          state.spendingAmount += payload.amount;
          // state.inHandMoney = 0;
          break;
        case 'giving':
          state.givingAmount += payload.amount;
          // state.inHandMoney = 0;
          break;
        default:
          break;
      }
      
    },
    handleOfJarTaking(state, payload) {

      state.savingAmount = state.savingAmount - payload.amount;
      
    },
    

    updateInHand(state, payload){
      state.inHandMoney += payload.amount
    },

    takeTransfer(state, payload){
      state.inHandMoney = payload.amount
    },

    spendInHand(state, payload){
      state.inHandMoney -= payload.amount
      state.spendingAmount += payload.amount
    },
  },



  plugins: [localStoragePlugin]
}) 

export default localStore