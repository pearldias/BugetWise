import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2qz0vg4BCyX2IT8KoFdnRg-bZdd8XrWM",
  authDomain: "bugetwise-2aa69.firebaseapp.com",
  projectId: "bugetwise-2aa69",
  storageBucket: "bugetwise-2aa69.appspot.com",
  messagingSenderId: "206414363319",
  appId: "1:206414363319:web:93082be5163baa6995eb32",
  measurementId: "G-7QVHNDS77K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Initialize authentication
const analytics = getAnalytics(app);

export { auth }; // ✅ Export 'auth' so other files can use it
