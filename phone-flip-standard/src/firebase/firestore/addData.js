import firebase from "../clientApp";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";


const db = getFirestore(firebase)


export default async function addData(collection_name, id, data) {
    let result = null;
    let error = null;

    try {
        if (id = null) {
            const newDocRef = doc(collection(db, collection_name));
            result = await setDoc(newDocRef, data);

        } else {
            result = await setDoc(doc(db, colllection_name, id), data, {
                merge: true,
            });
            const newDocRef = null;
        }
    } catch (e) {
        error = e;
    }

    return { result, newDocRef, error };
}