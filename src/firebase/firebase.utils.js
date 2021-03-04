import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAUoiDsQx0xOkZRMB0XlvB4hF51hkAC8q8",
    authDomain: "clothing-database-89627.firebaseapp.com",
    projectId: "clothing-database-89627",
    storageBucket: "clothing-database-89627.appspot.com",
    messagingSenderId: "207846376857",
    appId: "1:207846376857:web:4b17f4a39f0243c63abf08",
    measurementId: "G-2Y2RHLE6Q7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;