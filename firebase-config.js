// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVcOAEigqicX1L1XZHk0IJfZxkHq0V1cE",
  authDomain: "actingdriverhiring.firebaseapp.com",
  databaseURL: "https://actingdriverhiring-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "actingdriverhiring",
  storageBucket: "actingdriverhiring.appspot.com",
  messagingSenderId: "130834005404",
  appId: "1:130834005404:web:a4641fa471b48c43215c59"
};


// Initialize Firebases
const app = initializeApp(firebaseConfig);
// export const authentication = getAuth(app);

export const db = getFirestore(app);