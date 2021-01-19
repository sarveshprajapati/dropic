// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoOg_iluqNG4U0chBkW3dA9gWhxF9PyEE",
  authDomain: "dropic-60094.firebaseapp.com",
  projectId: "dropic-60094",
  storageBucket: "dropic-60094.appspot.com",
  messagingSenderId: "775705320884",
  appId: "1:775705320884:web:60c572d09cae76afbc26e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFirestore, timestamp };