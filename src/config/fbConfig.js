import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBT5OlacxYSYj2qaLanu15OTtpJuNr4PZQ",
  authDomain: "auth-development-1a319.firebaseapp.com",
  databaseURL: "https://auth-development-1a319-default-rtdb.firebaseio.com",
  projectId: "auth-development-1a319",
  storageBucket: "auth-development-1a319.appspot.com",
  messagingSenderId: "482886704590",
  appId: "1:482886704590:web:2481956fd3bfe7b1b49f9f"
};
firebase.initializeApp(config);

export default firebase;
