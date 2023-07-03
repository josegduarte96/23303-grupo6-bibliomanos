// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNUPt9k4SSzCCbRIthutOdp9BZQfW6m4I",
  authDomain: "grupo623303.firebaseapp.com",
  projectId: "grupo623303",
  storageBucket: "grupo623303.appspot.com",
  messagingSenderId: "910754111728",
  appId: "1:910754111728:web:1d2b7d94beda946f5ba235"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Auth Firebase
export const auth = getAuth(app)
// Initialize Firestore Firebase
export const db = getFirestore(app)
