// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiKDDDCo0KRj8iYZMcl0EuPwGS44jgO-A",
  authDomain: "netflix-gpt-9fd71.firebaseapp.com",
  projectId: "netflix-gpt-9fd71",
  storageBucket: "netflix-gpt-9fd71.appspot.com",
  messagingSenderId: "607664773835",
  appId: "1:607664773835:web:c4865427b5bac1046e194e",
  measurementId: "G-QPT1C0FNJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();