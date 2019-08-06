import React from 'react';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAqTz8ekMXm9QxxrEPWmTL41baMANckhio",
  authDomain: "books-d274e.firebaseapp.com",
  databaseURL: "https://books-d274e.firebaseio.com",
  projectId: "books-d274e",
  storageBucket: "books-d274e.appspot.com",
  messagingSenderId: "924584312516",
  appId: "1:924584312516:web:f7818c5e00ad7260"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const bookList = document.querySelector('#book-grid')

function renderBook(doc){
  let div = document.createElement('div');
  let img = document.createElement('img')
  let title = document.createElement('h3');
  let description = document.createElement('p');
  
  img.src = doc.data().ImageURL;
  div.style.cssText = 'border-raduis:4px;border: 1px solid gray; width:400em;margin:5px;box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);'
  img.style.cssText = 'width:15em;'
  description.style.cssText = 'margin:0 50px 0;'
  
  div.setAttribute('data-id', doc.id);
  title.textContent = doc.data().Title;
  description.textContent = doc.data().description;

  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(description);

  document.getElementById("book-grid").appendChild(div);
}

db.collection('books').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBook(doc);
    })
})

export default function MediaCard() {
  const divStyle = {
    margin: '40px',
    display: 'flex',
    flexwrap: 'wrap',
  };
  
  return (
    <div id="book-grid" style={divStyle}></div>
  )
}