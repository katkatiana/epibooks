import React from 'react';
import BookDetails from '../components/BookDetails/BookDetails';

const SelectedBook = ({children}) => {
  return (
    <>
        <BookDetails />
        {children}
    </>
  )
}

export default SelectedBook;