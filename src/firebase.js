// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_dmF9CC1eUZLxhqmxaapq0XO3a2aWh3Q",
  authDomain: "auth-yt-fbc29.firebaseapp.com",
  projectId: "auth-yt-fbc29",
  storageBucket: "auth-yt-fbc29.appspot.com",
  messagingSenderId: "588689322369",
  appId: "1:588689322369:web:09ac5ce65936569079b880",
  measurementId: "G-NJHS3H7RBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
