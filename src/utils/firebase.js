// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWUKBmuUACobMOaWUIX52FG4AP7ZdiFDE",
  authDomain: "netflixgpt-10344.firebaseapp.com",
  projectId: "netflixgpt-10344",
  storageBucket: "netflixgpt-10344.firebasestorage.app",
  messagingSenderId: "508667124561",
  appId: "1:508667124561:web:5e5bf15dbff13e46bed170",
  measurementId: "G-QY1JKESCSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);