import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKCq04DBS3MAsg8C0B_ogw_-t6XYjHyvM",
  authDomain: "socialapp-472b5.firebaseapp.com",
  projectId: "socialapp-472b5",
  storageBucket: "socialapp-472b5.appspot.com",
  messagingSenderId: "849168702219",
  appId: "1:849168702219:web:75da7cd1c693b35800600e",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };