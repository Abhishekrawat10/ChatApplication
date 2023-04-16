import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-c3854.firebaseapp.com",
  projectId: "chat-c3854",
  storageBucket: "chat-c3854.appspot.com",
  messagingSenderId: "213783809927",
  appId: "1:213783809927:web:2e8b92a30840c1f9800d22",
  measurementId: "G-TTLE612W84",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
