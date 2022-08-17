
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig =({
    apiKey: "AIzaSyAJ_35DVTP9jjHG3m89I-Jfxg9mtGudQyo",
    authDomain: "netflix-copy-f88ab.firebaseapp.com",
    projectId: "netflix-copy-f88ab",
    storageBucket: "netflix-copy-f88ab.appspot.com",
    messagingSenderId: "751805661439",
    appId: "1:751805661439:web:f317803b2551a2f2e1ccca"
    // apiKey: process.env.REACT__APP_API_KEY,
    // authDomain: process.env.REACT__APP_AUTH_DOMAIN,
    // projectId: process.env.REACT__APP_PROJECT_ID,
    // storageBucket: process.env.REACT__APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT__APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT__APP_APP_ID
});


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const provider = new GoogleAuthProvider()

export const getFirestoreApp = () => {
    return app;
}

