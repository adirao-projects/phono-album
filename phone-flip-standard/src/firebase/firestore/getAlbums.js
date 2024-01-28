import firebase_app from "../clientApp";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default async function getAlbums() {
    try {
        const user = firebase.auth().currentUser;
    } catch (e) {
        error = e;
    }

    const album_ids = getDoc('users', user.uid);
    const albums = {};

    for (i=0; i<album_ids.length; i++) {
        albums[album_id[i]] = getData('albums', albums[i]);
    }

    return { albums, error }
}