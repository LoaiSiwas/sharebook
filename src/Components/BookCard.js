import React from 'react';
import BookDetails from './BooksDetails.js'

export default function BookCard() {
  const divStyle = {
    display: 'flex',
    flexwrap: 'wrap',
    overflow: 'scroll',
  };
  
  return (
    <div id="book-grid" style={divStyle}></div>
  )
}