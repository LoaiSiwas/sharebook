import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyATBG2Q0SG1Md7EePZjOG92M3YX8NpgBdA",
//     authDomain: "share-book-d99d5.firebaseapp.com",
//     databaseURL: "https://share-book-d99d5.firebaseio.com",
//     projectId: "share-book-d99d5",
//     storageBucket: "share-book-d99d5.appspot.com",
//     messagingSenderId: "938760144413",
//     appId: "1:938760144413:web:7d88e8975c088ee2"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCHIoAo6qLzFrh-vp8RehzGi8bhM_XQxAQ",
  authDomain: "testsignup-b895d.firebaseapp.com",
  databaseURL: "https://testsignup-b895d.firebaseio.com",
  projectId: "testsignup-b895d",
  storageBucket: "testsignup-b895d.appspot.com",
  messagingSenderId: "484631265260",
  appId: "1:484631265260:web:7d9718c14ebb8c1b"
};





firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
    window.SignUpForm.setState({ user: user })
    window.SubmitForm.setState({ user: user })

});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
