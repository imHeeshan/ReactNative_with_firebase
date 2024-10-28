// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCvDntC8y7h1PEhbu627uK-VRZmClZe8Ro",
    authDomain: "rnauthentication-14a55.firebaseapp.com",
    projectId: "rnauthentication-14a55",
    storageBucket: "rnauthentication-14a55.appspot.com",
    messagingSenderId: "853044953167",
    appId: "1:853044953167:web:faec51c78c86362325ea3a",
    measurementId: "G-ELPE2B48S5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);