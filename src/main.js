import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMvEIwmqse6FgTpUMfE52AkDy9Eyal3U",
  authDomain: "to-do-list-oleg.firebaseapp.com",
  projectId: "to-do-list-oleg",
  storageBucket: "to-do-list-oleg.firebasestorage.app",
  messagingSenderId: "647239557651",
  appId: "1:647239557651:web:a2ca79db9137cc180295e6",
  measurementId: "G-5PQ4DMK8KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createApp(App).mount('#app')
