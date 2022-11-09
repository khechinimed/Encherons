import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHNGbEKTulFbNLeUcpbaR9uObdzHheDt4",
  authDomain: "encherons-ebc99.firebaseapp.com",
  databaseURL: "https://encherons-ebc99-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "encherons-ebc99",
  storageBucket: "encherons-ebc99.appspot.com",
  messagingSenderId: "614416153204",
  appId: "1:614416153204:web:e997f4e1448230e1bbef21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);