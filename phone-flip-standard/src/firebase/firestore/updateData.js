import firebase_app from "../clientApp";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default async function updateData(collection, id, data) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await updateDoc(docRef, data);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
