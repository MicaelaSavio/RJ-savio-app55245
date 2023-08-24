// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_jqkJVt6uQLt8jrwjHblCdDXmdN4XaAE",
  authDomain: "rj-eccomerce-natitax.firebaseapp.com",
  projectId: "rj-eccomerce-natitax",
  storageBucket: "rj-eccomerce-natitax.appspot.com",
  messagingSenderId: "88472199215",
  appId: "1:88472199215:web:de297532e3d9aee994e6da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)