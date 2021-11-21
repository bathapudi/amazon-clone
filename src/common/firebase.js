import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8s_8N46O0oxCvoGbPJ2veYNpmA7ImzAU",
  authDomain: "challenge-c3255.firebaseapp.com",
  projectId: "challenge-c3255",
  storageBucket: "challenge-c3255.appspot.com",
  messagingSenderId: "708439374078",
  appId: "1:708439374078:web:30da76eb9cdd3dc5d54daf",
  measurementId: "G-HWQN2NM27G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };