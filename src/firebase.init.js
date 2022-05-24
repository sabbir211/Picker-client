// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd2L8k25sHxgdnIwyF83Hjyq_NavZOVjw",
  authDomain: "picker-44e7a.firebaseapp.com",
  projectId: "picker-44e7a",
  storageBucket: "picker-44e7a.appspot.com",
  messagingSenderId: "725101252336",
  appId: "1:725101252336:web:b9664e6bae5fb6c3807c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;