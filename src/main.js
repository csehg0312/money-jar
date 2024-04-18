import { createApp } from 'vue'

import './style.css'
import VueSweetalert2 from 'vue-sweetalert2';

import localStore from './js/save';

import App from './App.vue'


const app = createApp(App)

app.use(localStore)
app.use(VueSweetalert2)

app.mount('#app')

window.addEventListener('load', () => {
  if (!('serviceWorker' in navigator)) {
    return
  }
  navigator.serviceWorker.register('/sw.js').then(registration => {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(error => {
    console.log('ServiceWorker registration failed: ', error);
  });
})