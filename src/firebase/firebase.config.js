// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmeWnSg4WfiQIBUjse72ig1loU_wAUIm8",
  authDomain: "react-real-estate-project.firebaseapp.com",
  projectId: "react-real-estate-project",
  storageBucket: "react-real-estate-project.appspot.com",
  messagingSenderId: "826381393874",
  appId: "1:826381393874:web:74feeabcf2e77a8730720b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;