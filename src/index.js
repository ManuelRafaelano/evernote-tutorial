import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAUxgHt2fMz0rIJco-EDu6xnqdQiHiE7YQ",
  authDomain: "evernote-clone-68d45-d36ba.firebaseapp.com",
  databaseURL: "https://evernote-clone-68d45-d36ba.firebaseio.com",
  projectId: "evernote-clone-68d45",
  storageBucket: "evernote-clone-68d45.appspot.com",
  messagingSenderId: "473485383160",
  appId: "1:473485383160:web:75f2d16bb37e7062"
});

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
