// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAW307vAx_UFs3I3OzivCbm1CeHrAiKDK0",
  authDomain: "discord-clone-2ad4d.firebaseapp.com",
  projectId: "discord-clone-2ad4d",
  storageBucket: "discord-clone-2ad4d.appspot.com",
  messagingSenderId: "781590423977",
  appId: "1:781590423977:web:15b350dc09c278daa0bcb8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };