import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1ENCJ-7YrxVPej4Fb9ONyt0hK6x0Ifk0",
    authDomain: "react-app-curso-c0b6b.firebaseapp.com",
    projectId: "react-app-curso-c0b6b",
    storageBucket: "react-app-curso-c0b6b.appspot.com",
    messagingSenderId: "482078149117",
    appId: "1:482078149117:web:23836b2a5298339cf0b194"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export {
    db,
    googleAuthProvider,
    firebase
}