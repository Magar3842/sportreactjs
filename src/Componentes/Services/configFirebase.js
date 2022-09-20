import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC7f6LWIKeL8fFf4T0M9FnlpliHwSzLhKA",
  authDomain: "deco-inspire2022.firebaseapp.com",
  projectId: "deco-inspire2022",
  storageBucket: "deco-inspire2022.appspot.com",
  messagingSenderId: "583010266897",
  appId: "1:583010266897:web:bbdc4b8011f6b5392fe6b0",
  measurementId: "G-GVZS2Z6T08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 