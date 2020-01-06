import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREABSE_API_KEY,
  authDomain: process.env.REACT_APP_FIREABSE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREABSE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREABSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREABSE_MENSSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREABSE_APP_ID,
  measurementId: process.env.REACT_APP_FIREABSE_MEASUREMENT_ID
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
