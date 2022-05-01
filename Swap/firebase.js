// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_qTdXOirwdC6uOH-fY9j_NwG4N9bN3kE",
  authDomain: "swap-b247e.firebaseapp.com",
  projectId: "swap-b247e",
  storageBucket: "swap-b247e.appspot.com",
  messagingSenderId: "809490967210",
  appId: "1:809490967210:web:5cbf6b51bc22873531fed3",
  measurementId: "G-4PF7S7XRM5"
};

//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}
const auth = firebase.auth()

export { auth };
//export default firebase;
