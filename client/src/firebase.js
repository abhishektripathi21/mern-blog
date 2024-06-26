// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-243c5.firebaseapp.com",
  projectId: "mern-blog-243c5",
  storageBucket: "mern-blog-243c5.appspot.com",
  messagingSenderId: "55740369021",
  appId: "1:55740369021:web:2eccdf34acf387d6fd4914"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);