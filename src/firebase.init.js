// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVaEPKLTYkJAMb9vg-edLg5PT6ZGPhmww",
  authDomain: "wedding-photography-c1317.firebaseapp.com",
  projectId: "wedding-photography-c1317",
  storageBucket: "wedding-photography-c1317.appspot.com",
  messagingSenderId: "527922052445",
  appId: "1:527922052445:web:1a3888af18fa1bf4f67cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;