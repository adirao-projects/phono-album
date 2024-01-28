import firebase from "../clientApp";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase)

export async function getData(collection, id) {
    console.log(collection, id);
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
