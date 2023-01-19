// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYBiEoeSJDZqtCcw4wCWbdT1Wo9Ypppt8",
  authDomain: "tv-maze-app-979b6.firebaseapp.com",
  databaseURL:
    "https://tv-maze-app-979b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tv-maze-app-979b6",
  storageBucket: "tv-maze-app-979b6.appspot.com",
  messagingSenderId: "605214345543",
  appId: "1:605214345543:web:e2aa9fc68b1e0d1287a462",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new firebase.auth.GoogleAuthProvider();
export const database = getDatabase(app);
