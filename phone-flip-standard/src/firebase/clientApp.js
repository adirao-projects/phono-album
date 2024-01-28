import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getApps, initializeApp } from "firebase/app";

const clientCredentials = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

if (getApps().length < 1) {
    initializeApp(clientCredentials);
    // Initialize other firebase products here
  }

export const db = getFirestore(app);
export default firebase;