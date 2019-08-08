// import React from 'react';
// import firebase from 'firebase';
// import SearchCard from './SearchCard';


// const db = firebase.firestore()
//   function SearchBook(doc){
//     if(doc.data().Title.includes(SearchBookValue)){
//     let div = document.createElement('div');
//     let img = document.createElement('img')
//     let title = document.createElement('h2');
//     let Address = document.createElement('p');
//     let details = document.createElement('a');
//     //let SearchTitle = 'Search Results';
    
    
//     img.src = doc.data().ImageURL;
//     details.style.cssText = 'padding: 0.5em 1em;margin-bottom:1em; display: inline-block;text-decoration: none;border: 1px solid silver;box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);'
//     div.style.cssText = 'font-family: "Roboto", "Helvetica", "Arial", sans-serif;border-raduis:4px;border: 1px solid silver; width:15em;margin:5px;box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);'
//     img.style.cssText = 'width:15em;'
//     Address.style.cssText = 'margin:0 3em 0; margin-bottom:0.5em;overflow:hidden,'
  
//     div.setAttribute('data-id', doc.id);
//     details.setAttribute('href', 'showDetails(doc.id)');
//     title.textContent = doc.data().Title;
//     Address.textContent = 'Location: ' + doc.data().Address;
//     details.textContent = 'More details'
   
//     div.appendChild(img);
//     div.appendChild(title);
//     div.appendChild(Address);
//     div.appendChild(details);
  
//     document.getElementById("book-Search").appendChild(div);
//     }
//   }
  
//   db.collection('books').get().then((snapshot) => {
//       snapshot.docs.forEach(doc => {
//           SearchBook(doc);
//       })
//   })