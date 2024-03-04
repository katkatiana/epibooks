/**
 * @fileoverview AddComment.jsx
 * This component renders the elements needed to modify a comment.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import React from 'react';
import BookDetails from '../components/BookDetails/BookDetails';

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * SelectedBook
 * This component renders the BookDetails component, alongwith any given children.
 * This component is rendered when the route /book/asin gets triggered, when the user
 * clicks on the button that redirects to the book specific page.
 * @param {*} children Any children of the component.
 * @returns the instantiation of BookDetails component, along with any other children.
 */

const SelectedBook = ({children}) => {
  return (
    <>
        <BookDetails />
        {children}
    </>
  )
}

export default SelectedBook;