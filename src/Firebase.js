import firebase from "firebase/app";
import"firebase/auth"

/* REACT_APP_FIREBASE_API_KEY this key should always be as a string eg. REACT_APP_FIREBASE_API_KEY =  "...key..." */
/* local env is created for development of project */

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
})
export const auth  = app.auth()
export default app 