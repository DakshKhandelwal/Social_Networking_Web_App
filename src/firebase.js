//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD2-2h6IJhJAIhKSm8SqXyjSLZ_iFcBnSc",
  authDomain: "developer-connector-dff28.firebaseapp.com",
  projectId: "developer-connector-dff28",
  storageBucket: "developer-connector-dff28.appspot.com",
  messagingSenderId: "529065222982",
  appId: "1:529065222982:web:54bb9e2d833b00ffe93b47",
  measurementId: "G-H30ZPLDCV0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;
