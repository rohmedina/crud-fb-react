import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBK9dZsCjD89Kn8NiOl-nfK9o_uuRJk-j0",
  authDomain: "fb-crud-react-76365.firebaseapp.com",
  databaseURL: "https://fb-crud-react-76365.firebaseio.com",
  projectId: "fb-crud-react-76365",
  storageBucket: "fb-crud-react-76365.appspot.com",
  messagingSenderId: "417792025821",
  appId: "1:417792025821:web:75f1bfedcfbc94962e2734",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
