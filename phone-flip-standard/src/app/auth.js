import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";
import {createUserWithEmailAndPassword, GoogleAuthProvider, getAuth} from "firebase/auth";


const uiConfig = {
    signInSuccessURL: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}


function SignInScreen() {
    return (
        <div
            style={{
                maxWidth: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <h1>Phone Flip Login</h1>
            <p>Select a provider to sign-in</p>
            <StyledFirebaseAuth uiConfig={uiConfig} 
            firebaseAuth={firebase.auth()} />
        </div>
    );
}