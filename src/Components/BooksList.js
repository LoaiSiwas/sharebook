import React from 'react';
import firebase from 'firebase';
import BookCard from './BookCard'
import Grid from '@material-ui/core/Grid';



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
        db.collection('books').limit(9).get().then((response) => {
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
                city={book.data().City}
             />
        ))

        return (
            <Grid container spacing={3}>
                {bookCards}
            </Grid>
        )
    }
}
