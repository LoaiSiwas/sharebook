import React from 'react';
import SearchResult from './SearchResult.js'
import firebase from 'firebase';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';


 class SearchCard extends React.Component {
     constructor(){
         super();
        this.state = { searchBook: '' };
        }

updateSearch(event) {
this.setState({searchBook: event.target.value}) 
}

    

  render() {
      const divStyle = {
    display: 'flex',
    flexwrap: 'wrap',
    overflow: 'scroll',
  };

     const searchCSS = {
        position: 'relative',
       // backgroundColor: fade(white, 0.15)
     };

    const searchIconCSS= {
    //width: spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


  let SearchBookValue = this.state.searchBook;
  console.log(SearchBookValue);

  
  const db = firebase.firestore()
  function SearchBook(doc){

    if (doc.data().Title.includes(SearchBookValue) && SearchBookValue!== '' ){
    let div = document.createElement('div');
    let img = document.createElement('img')
    let title = document.createElement('h2');
    let Address = document.createElement('p');
    let details = document.createElement('a');
    //let SearchTitle = 'Search Results';
    
    
    img.src = doc.data().ImageURL;
    details.style.cssText = 'padding: 0.5em 1em;margin-bottom:1em; display: inline-block;text-decoration: none;border: 1px solid silver;box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);'
    div.style.cssText = 'font-family: "Roboto", "Helvetica", "Arial", sans-serif;border-raduis:4px;border: 1px solid silver; width:15em;margin:5px;box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);'
    img.style.cssText = 'width:15em;'
    Address.style.cssText = 'margin:0 3em 0; margin-bottom:0.5em;overflow:hidden,'
  
    div.setAttribute('data-id', doc.id);
    details.setAttribute('href', 'showDetails(doc.id)');
    title.textContent = doc.data().Title;
    Address.textContent = 'Location: ' + doc.data().Address;
    details.textContent = 'More details'
   
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(Address);
    div.appendChild(details);
  
    document.getElementById("book-Search").appendChild(div);
    }
    else {
        
    }
  }
  
  db.collection('books').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
          SearchBook(doc);
      })
  })
  return (<div>
      <div style={searchCSS}>
          <form>
            <div style={searchIconCSS}></div>
            <SearchIcon />
      <input  placeholder="Search in Share Book…" type="text" value={this.state.searchBook} 
      onChange = {this.updateSearch.bind(this)}
      >
      </input>
      <button type="submit" > Search</button>
      </form>
      </div>

<div id="book-Search" style={divStyle}>
</div>
      
    
    </div>
  )
}
 }
export default SearchCard; 