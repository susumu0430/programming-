// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUZjB_WT7t35fm21bZYN8CKE4DGoKBLUU",
  authDomain: "blog-f540d.firebaseapp.com",
  projectId: "blog-f540d",
  storageBucket: "blog-f540d.appspot.com",
  messagingSenderId: "863466622832",
  appId: "1:863466622832:web:f3f80cdde06200073c09b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth,provider,db };