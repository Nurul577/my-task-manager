// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanager-d6744.firebaseapp.com",
  projectId: "taskmanager-d6744",
  storageBucket: "taskmanager-d6744.firebasestorage.app",
  messagingSenderId: "823368752341",
  appId: "1:823368752341:web:aa9e443b32c0df23bf565c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
