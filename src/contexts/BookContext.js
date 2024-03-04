/**
 * @fileoverview BookContext.js
 * Defines the context that holds the book object which are passed
 * down to the other components.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/
import React, { createContext, useEffect, useState } from 'react';
import { BOOKS_URL } from '../utils/Utils';
/******** Internal Variables  ***************************************************/

/**
 * Context used to pass down the books retrieved from the API
 * to whichever component may need to access them.
 * This is the variable which is actually exported.
 */
const BookContext = createContext([]);

/**
 * Defines the maximum number of books that can be
 * show on the website.
 */
const MAX_BOOKS = 12;

/******** Component Definition  *************************************************/

/**
 * BooksProvider
 * Component that is intended to define a context usable by all the other
 * children components. 
 * This context provides all the children elements with information on
 * the initial book-list as obtained from the configured API. 
 * @param {*} children The children elements which are to be contained in BooksProvider element.
 * @returns If the fetch operation is successfully completed, returns the BooksProvider
 * element along with the children components.
 */
const BooksProvider = ({ children }) => {

    /** Holds the book objects retrieved from the configured API. */
    const [booksFromApi, setBooksFromApi] = useState([]);
    /** Boolean, identifies if the fetch operation has been completed or not */
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    /** Boolean, collects possible error condition that may arise from the fetch call */
    const [error, setError] = useState(false);

    /**
     * getBooks
     * This function performs a fetch operation against
     * the configured API to retrieve the initial list of books.
     * @param None
     * @returns On a successfull fetch, the booksFromApi state is 
     * filled with the book-objects to show.
     * If any kind of error occurs during the Fetch operation,
     * an Exception is raised and the Error is signalled through
     * the error internal state.
     */
    const getBooks =  async () => {
      try {
        const response = await fetch(BOOKS_URL);
        if(response.ok) {
          const data = await response.json();
          setBooksFromApi(data.slice(0, MAX_BOOKS));
          setIsFetchCompleted(true)
          setError(false)
        } else {
          throw new Error(response.status)
        }
      } catch (er) {
        console.error('Error fetching books:', er);
        setError(true)
        setIsFetchCompleted(false)
      }
    };
  
    useEffect(() => {
      /** Retrieve the initial set of books and populate the booksFromApi state: only done on first render */
      getBooks();
    }, []);

    /** The retrieved books are passed down as a context only when the fetch has been correctly completed. */
    return (
      !error && isFetchCompleted ? (
        <BookContext.Provider value={booksFromApi}>
           {children}
        </BookContext.Provider>
        ) : ("")
      )
    };
    
    export { BookContext, BooksProvider };
    