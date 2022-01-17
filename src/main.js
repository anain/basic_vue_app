import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8aI159wnOAzB6e8X9ubVQWlUGps7pyEs",
  authDomain: "hello-d9243.firebaseapp.com",
  projectId: "hello-d9243",
  storageBucket: "hello-d9243.appspot.com",
  messagingSenderId: "1090585560741",
  appId: "1:1090585560741:web:2f11ccd541b09213d2af4c"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
