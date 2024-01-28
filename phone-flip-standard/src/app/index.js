import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from "../firebase/clientApp";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-fireabse-hooks/firestore";

export default function Home() {
    const [user, loading, error] = useAuthState(firebase.auth());
    
    
    return <div>Hi Mom!</div>
}