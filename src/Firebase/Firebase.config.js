// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA_Gq7GDC_4U1tKg_YlhAGW-hjkKpdZMc",
  authDomain: "the-dragon-news-fb1a0.firebaseapp.com",
  projectId: "the-dragon-news-fb1a0",
  storageBucket: "the-dragon-news-fb1a0.appspot.com",
  messagingSenderId: "875051749211",
  appId: "1:875051749211:web:9533299836f6cfda5f547e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;