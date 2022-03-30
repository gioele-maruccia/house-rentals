// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMviv8PftstJXlvre6h3lZxVCwsgBYQDk",
    authDomain: "case-vacanze-930c3.firebaseapp.com",
    projectId: "case-vacanze-930c3",
    storageBucket: "case-vacanze-930c3.appspot.com",
    messagingSenderId: "1092606466367",
    appId: "1:1092606466367:web:a12ef5a1ef065eaa989b8a",
    measurementId: "G-68081LJS91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)