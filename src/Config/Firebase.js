// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-07q_48wQkGBFZP4CQ5riPZy49ZNIkqk",
  authDomain: "productos-utn-af544.firebaseapp.com",
  projectId: "productos-utn-af544",
  storageBucket: "productos-utn-af544.firebasestorage.app",
  messagingSenderId: "15138872181",
  appId: "1:15138872181:web:27e51f96c4b4fc3437d13c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{db}