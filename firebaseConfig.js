// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVJLYqiWQQGcZVTaHWIFhD6rDAlcwiVyQ",
  authDomain: "file-sharing-app-fbeb4.firebaseapp.com",
  projectId: "file-sharing-app-fbeb4",
  storageBucket: "file-sharing-app-fbeb4.firebasestorage.app",
  messagingSenderId: "884697173202",
  appId: "1:884697173202:web:966dc0d83abe7e4a9c310b",
  measurementId: "G-NXR7YYN3Y2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
