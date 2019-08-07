import React from 'react';
import firebase from 'firebase';
import BookCard from './BookCard'
import Grid from '@material-ui/core/Grid';

var firebaseConfig = {
    apiKey: "AIzaSyATBG2Q0SG1Md7EePZjOG92M3YX8NpgBdA",
    authDomain: "share-book-d99d5.firebaseapp.com",
    databaseURL: "https://share-book-d99d5.firebaseio.com",
    projectId: "share-book-d99d5",
    storageBucket: "share-book-d99d5.appspot.com",
    messagingSenderId: "938760144413",
    appId: "1:938760144413:web:7d88e8975c088ee2"
  };

firebase.initializeApp(firebaseConfig);

export default class BooksList extends React.Component {
    state = {
        books: null,
    }
    
    constructor() {
        super();
        this.fetchBooksFromAPI();
    }

    fetchBooksFromAPI = () => {
        const db = firebase.firestore()
        db.collection('books').get().then((response) => {
            this.setState({ books: response.docs })
        })
    }

    render() {
        if (this.state.books === null) {
            return <h1>Loading ...</h1>
        }
        const bookCards =  this.state.books.map(book => (
            <BookCard
                title={book.data().Title}
                img={book.data().img}
                description={book.data().Description}
                country={book.data().Country}
             />
        ))

        return (
            <Grid container>
                {bookCards}
            </Grid>
        )
    }
}