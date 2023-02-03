import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBKTB3diorv87X54cWDOo7cqGSdVfGWp8o",
  authDomain: "savenote-3ecb3.firebaseapp.com",
  projectId: "savenote-3ecb3",
  storageBucket: "savenote-3ecb3.appspot.com",
  messagingSenderId: "958064618875",
  appId: "1:958064618875:web:16424a3bc1107fea7ea1de"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, db, auth, marcaTiempo }