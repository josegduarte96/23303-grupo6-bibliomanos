// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHKxdzg35SV12wYDc_dX2ms_GedWajVyU",
  authDomain: "journal-react-app-55cc0.firebaseapp.com",
  projectId: "journal-react-app-55cc0",
  storageBucket: "journal-react-app-55cc0.appspot.com",
  messagingSenderId: "62027794704",
  appId: "1:62027794704:web:c57f71b7bc60f96e34bd95",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Auth Firebase
export const auth = getAuth(app)
