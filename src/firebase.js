import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDlne-A5dYEhmVWChHpt-DDzpF2T3PGnjY',
    authDomain: 'short-links-2021.firebaseapp.com',
    projectId: 'short-links-2021',
    storageBucket: 'short-links-2021.appspot.com',
    messagingSenderId: '1070516923112',
    appId: '1:1070516923112:web:a268a7e456522a53d6775d',
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
