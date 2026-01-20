import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDchiy_Ct5H8v9CbFBD8PXdHdlun8ot0YY",
  authDomain: "authentication-44a6a.firebaseapp.com",
  projectId: "authentication-44a6a",
  storageBucket: "authentication-44a6a.firebasestorage.app",
  messagingSenderId: "64290793158",
  appId: "1:64290793158:web:3c17bd090c5254e16519c7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
