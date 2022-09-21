//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC9HYQugC9kLtLppP8zSzs1Prr8pYynMss",
    authDomain: "linkedin-clone-df47d.firebaseapp.com",
    projectId: "linkedin-clone-df47d",
    storageBucket: "linkedin-clone-df47d.appspot.com",
    messagingSenderId: "713236133265",
    appId: "1:713236133265:web:674be2be268b36bc391630"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;
