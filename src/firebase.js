/* Firebase integration */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAUG3He4e172LuZ6QkpPWaAS16nckPRWyk",
    authDomain: "realtime-chatapp-svelte.firebaseapp.com",
    projectId: "realtime-chatapp-svelte",
    storageBucket: "realtime-chatapp-svelte.appspot.com",
    messagingSenderId: "542253207397",
    appId: "1:542253207397:web:569d4cb8d1b5c27f179b8c",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()