// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Go3ttRiZGL6EuJUUjfJHmMBQE2mwYxA",
  authDomain: "noticias-30b1e.firebaseapp.com",
  projectId: "noticias-30b1e",
  storageBucket: "noticias-30b1e.appspot.com",
  messagingSenderId: "939838906347",
  appId: "1:939838906347:web:c8f5bbb8310614e28b83ae",
  measurementId: "G-RNYEKBGPPL"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();