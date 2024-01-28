import { collection, doc, addDoc } from "firebase/firestore";
import {db} from 'clientApp';

function getPages(album_id) {
    albumRef = doc(db, 'albums', album_id);
    pageCollection = collection(db, 'pages');
}