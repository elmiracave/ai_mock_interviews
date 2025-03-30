// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUsB-LmrpfuvvdXGp7wAM5k8RUJrfIAzE",
  authDomain: "prepwise-26e1e.firebaseapp.com",
  projectId: "prepwise-26e1e",
  storageBucket: "prepwise-26e1e.firebasestorage.app",
  messagingSenderId: "220242580941",
  appId: "1:220242580941:web:b7870daf3b13f785836084",
  measurementId: "G-XN7L4XZN2W",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
