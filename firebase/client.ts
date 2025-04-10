// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCwEmYxGBS9ajb2yOFcNGOZFk6XbtixlG8",
  authDomain: "prepwise-cc896.firebaseapp.com",
  projectId: "prepwise-cc896",
  storageBucket: "prepwise-cc896.firebasestorage.app",
  messagingSenderId: "361301112393",
  appId: "1:361301112393:web:9e11921781e14b61187198",
  measurementId: "G-PHN4DV3SWH"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)