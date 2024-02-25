import React, { createContext, useEffect, useState } from 'react';

const BookContext = createContext([]);

const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

  
    const getBooks =  async () => {
      try {
        const response = await fetch('https://epibooks.onrender.com');
        const data = await response.json();
        setBooks(data.slice(0, 12));
        setLoading(false)
        setIsFetchCompleted(true)
        setError(false)
      } catch (er) {
        console.error('Error fetching books:', er);
        setError(true)
        setLoading(false)
      }
    };
  
    useEffect(() => {
      getBooks();
    }, []);

    return (
      !error && !loading && isFetchCompleted ? (
        <BookContext.Provider value={books}>
           {children}
        </BookContext.Provider>
        ) :("")
      )
    };
    
    export { BookContext, BooksProvider };
    