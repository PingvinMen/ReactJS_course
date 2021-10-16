import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0Bl1WlqpS4qLFg0ZZX2sGXRORk6pwdx4",
  authDomain: "projectreactgb.firebaseapp.com",
  projectId: "projectreactgb",
  storageBucket: "projectreactgb.appspot.com",
  messagingSenderId: "705027607728",
  appId: "1:705027607728:web:0f4997a9c7e4728401ff75"
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.database();
export const auth = firebase.auth();