// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQt6ffOnDojr9bN6ESgxSrOvJqOCKyesk",
  authDomain: "coffee-store-76c79.firebaseapp.com",
  projectId: "coffee-store-76c79",
  storageBucket: "coffee-store-76c79.firebasestorage.app",
  messagingSenderId: "199116549057",
  appId: "1:199116549057:web:b9a76e84ed82d5819c9d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth;