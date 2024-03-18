import { createApp } from 'vue'
import './style.css'
import VueSweetalert2 from 'vue-sweetalert2'
// import './src/sw.js'
// import 'sweetalert2/dist/sweetalert2.min.css';


import App from './App.vue'

const app = createApp(App)

app.use(VueSweetalert2)

app.mount('#app')

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(error => {
      console.log('ServiceWorker registration failed: ', error);
    });
  }