import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlfPz36pzkXNPytjeT5KQa6QP0gMstErA",
  authDomain: "storytellersociety-837cb.firebaseapp.com",
  projectId: "storytellersociety-837cb",
  storageBucket: "storytellersociety-837cb.appspot.com",
  messagingSenderId: "728123443467",
  appId: "1:728123443467:web:98189c9c4a4e22088c7a0e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
