import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:'AIzaSyBrn0vgigyj6z04PGv2BhLgPJbFZIaoF3w',
  authDomain:'encherons.firebaseapp.com',
  projectId:'encherons',
  storageBucket:'encherons.appspot.com',
  messagingSenderId:'539652270657',
  appId:'1:539652270657:web:41ef90452164f2932c34c0',
  measurementId:'G-0JEF965LDY'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);