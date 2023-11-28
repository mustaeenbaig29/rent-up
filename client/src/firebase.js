// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentup-5b432.firebaseapp.com",
  projectId: "rentup-5b432",
  storageBucket: "rentup-5b432.appspot.com",
  messagingSenderId: "793804262723",
  appId: "1:793804262723:web:25f311988acbf1b9fcb3f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);