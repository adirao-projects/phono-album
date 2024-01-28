import firebase from "../clientApp";
import { getFirestore, doc } from "firebase/firestore";
import { getData } from "./getData";

const db = getFirestore(firebase)

export async function getAlbums() {
    const albums = null;
    const album_ids = null;
    const error = null;
    try {
        const user = firebase.auth().currentUser;
        const user_data = await getData('users', user.uid);
        const album_ids = user_data.result.data().albums;

        const albums = {};
        for (let i=0; i<album_ids.length; i++) {
            albums[album_ids[i]] = getData('albums', album_ids[i]).data;
        }

    } catch (e) {
        const error = e;
    }

    return { albums, album_ids, error }
}