import firebase from "../clientApp";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase)

export default async function getPages(album_id) {
    try {
        const album_data = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    const pages = album_data.pages

    const page_data = {};
    for (i=0; i<pages.length; i++) {
        page_data[i] = getData('pages', pages[i]);
    }

    return { page_data, error }
}