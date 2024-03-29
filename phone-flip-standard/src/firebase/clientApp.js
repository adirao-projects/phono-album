import firebase from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

const app = initializeApp(clientCredentials);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
export default firebase;
/*
if (getApps().length < 1) {
    const app = initializeApp(clientCredentials);
    // Initialize other firebase products here
  }

export const db = getFirestore(app);
export default firebase;
*/