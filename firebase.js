import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAXI6uvgYIV7Kk5uTOTmOajXw6Pr_M0DZk",
    authDomain: "facebook-clone-bbc2e.firebaseapp.com",
    projectId: "facebook-clone-bbc2e",
    storageBucket: "facebook-clone-bbc2e.appspot.com",
    messagingSenderId: "854278275038",
    appId: "1:854278275038:web:fe0941486754e7b591274f"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };