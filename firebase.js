// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaX5Qp1Q0CN3uMPST3LCBawrerSfJi9Oo",
  authDomain: "ai-flashcards-3ea7c.firebaseapp.com",
  projectId: "ai-flashcards-3ea7c",
  storageBucket: "ai-flashcards-3ea7c.appspot.com",
  messagingSenderId: "298445466258",
  appId: "1:298445466258:web:c7abdc666970332effd44b",
  measurementId: "G-MD3DCTZWQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);