// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdC9RKsaMXT7xcPpkAfjZjuYuWD5SWMpw",
  authDomain: "fir-front-8391f.firebaseapp.com",
  projectId: "fir-front-8391f",
  storageBucket: "fir-front-8391f.appspot.com",
  messagingSenderId: "46157303872",
  appId: "1:46157303872:web:670dc42d82392467dc4fa5",
  measurementId: "G-P2WVZ37QSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
