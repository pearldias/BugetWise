// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2qz0vg4BCyX2IT8KoFdnRg-bZdd8XrWM",
  authDomain: "bugetwise-2aa69.firebaseapp.com",
  projectId: "bugetwise-2aa69",
  storageBucket: "bugetwise-2aa69.firebasestorage.app",
  messagingSenderId: "206414363319",
  appId: "1:206414363319:web:93082be5163baa6995eb32",
  measurementId: "G-7QVHNDS77K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);