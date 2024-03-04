/**
 * @fileoverview MainLayout.jsx
 * This component renders all the elements that
 * form the homepage of the application.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/
import React from 'react';
import MyNav from '../components/myNav/MyNav';
import MyFooter from '../components/MyFooter/MyFooter';
import LatestRelease from '../components/LatestRelease/LatestRelease';
import { BookContext, BooksProvider } from "../contexts/BookContext";
import { useState, useEffect, useContext } from 'react'
//import useDebounce from "../hooks/useDebounce";

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * MainLayout
 * This component defines the main layout of the application by
 * instantiating its core elements, such as the list of books,
 * the navbar and the footer.
 * @param {*} children The children elements which are to be contained in MainLayout.
 * @returns Instantiation of the following components:
 * - MyNav - navbar of the application
 * - LatestRelease - handles the visualization of the books, based on the booklist provided
 * - MyFooter - footer of the application
 */
const MainLayout = ({children}) => {

    /** Retrieve the initial list of books from the provided context. */
    let books = useContext(BookContext);
    
    /** Holds the current string value which has to be searched in the book list */
    const [searchBook, setSearchBook] = useState("");
    /** Holds the book list which will be handled for visualization. Initial value is set by context, i.e. at the beginning all the books are showed. */
    const [bookStore, setBookStore] = useState(books);

    /**
     * startSearch
     * This function searches through the initial booklist for the
     * string provided in input.
     * Search is done by comparing book title only.
     * @param {*} inputSearch The string to search in the initial book list.
     * @return None
     */
    const startSearch = (inputSearch) => {
      const booksResultArr = books.filter((elem) => elem.title.toLowerCase().includes(inputSearch.toLowerCase()));
      /** booksResultArr will contain the search results: set the bookStore state, which will be passed to LAtestRelease for visualization */
      setBookStore(booksResultArr);      
    }

    /**
     * handleChange
     * This function gets called when the text inside the search box
     * changes. It handles the text and starts the search through the booklist
     * if the value is empty.
     * THis function is passed down as a prop callback to the MyNav child component, 
     * which renders the input area.
     * @param {*} e Event object containing information about the event, like target element and values
     * @return None
     */
    const handleChange = (e) => {
      e.preventDefault(); 
      if(e.target.value !== "") {
          /** If the search term is not empty, we can start the search */
          setSearchBook(e.target.value);
          startSearch(e.target.value);
      } else {
          /** If no search is needed, show all the books */
          setSearchBook("");
          setBookStore(books);
      } 
    }

    //const debounceInputValue = useDebounce(searchBook, 2000);


  return (
    <div data-testid = 'main'>
            <MyNav 
                handleChange = {handleChange} 
                searchBook   = {searchBook}
                //debounceInputValue = {debounceInputValue}
            />
            <LatestRelease  bookStore = {bookStore} />
            {children}
            <MyFooter />
    </div>
  )
}

export default MainLayout;