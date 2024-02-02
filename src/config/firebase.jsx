// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged,signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCE4_oje0ZknaKX1xU2-8ZMR594CBjF4oM",
  authDomain: "smit-ba688.firebaseapp.com",
  databaseURL: "https://smit-ba688-default-rtdb.firebaseio.com",
  projectId: "smit-ba688",
  storageBucket: "smit-ba688.appspot.com",
  messagingSenderId: "1014681951996",
  appId: "1:1014681951996:web:e01a72f6ad5840a89c4179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export{
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}