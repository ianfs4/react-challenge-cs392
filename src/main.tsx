import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import './index.css'
import App from './App.tsx'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCvJMZB_QsDcgAc3D9sIHPz31x1O4HjCG8",
  authDomain: "react-challenge-cs392.firebaseapp.com",
  projectId: "react-challenge-cs392",
  storageBucket: "react-challenge-cs392.firebasestorage.app",
  messagingSenderId: "867933824788",
  appId: "1:867933824788:web:9c7f204674f3bdb8c68401",
  measurementId: "G-HYWCM4DQFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
void analytics;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
