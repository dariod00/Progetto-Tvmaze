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
  apiKey: "AIzaSyAIxt6WUs0PvTY3KmcB8UqaYLg1706oxOU",
  authDomain: "tvmaze-app-b31da.firebaseapp.com",
  projectId: "tvmaze-app-b31da",
  storageBucket: "tvmaze-app-b31da.appspot.com",
  messagingSenderId: "568599896560",
  appId: "1:568599896560:web:3daf7dff9431cee189bd35",
  databaseURL: 'https://tvmaze-app-b31da-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new firebase.auth.GoogleAuthProvider();
export const database = getDatabase(app);
