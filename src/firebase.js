// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvt3MMgE205UwKqQmDfoeVL0aLBAKcRIw",
  authDomain: "dzproprity-92498.firebaseapp.com",
  projectId: "dzproprity-92498",
  storageBucket: "dzproprity-92498.appspot.com", 
  messagingSenderId: "282703190292",
  appId: "1:282703190292:web:d3357be4bfe1875b5cca01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);
