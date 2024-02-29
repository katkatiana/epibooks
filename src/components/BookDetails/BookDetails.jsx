import React from 'react';
import { useParams } from 'react-router-dom';
import { BooksProvider } from '../../contexts/BookContext';

const BookDetails = () => {
  
  let { asin } = useParams;

  return (
    <BooksProvider>
      <div>BookDetails</div>
    </BooksProvider>
  )
}

export default BookDetails;