import firebase from "firebase"; //8.2.3
// import firebase from "firebase/compat/app"; //for 9.6.10
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnphmS9AhqhsXSBxsVvYxz3AMSfikpN7g",
  authDomain: "swap-a43a7.firebaseapp.com",
  projectId: "swap-a43a7",
  storageBucket: "swap-a43a7.appspot.com",
  messagingSenderId: "109611668591",
  appId: "1:109611668591:web:9e2c6e785ae2fddd73a99a",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
