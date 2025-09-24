import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-challenge-cs392.firebaseapp.com",
  projectId: "react-challenge-cs392",
  storageBucket: "react-challenge-cs392.firebasestorage.app",
  messagingSenderId: "867933824788",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-HYWCM4DQFL"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);