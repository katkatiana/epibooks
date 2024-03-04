import React from 'react';
import MyNav from '../components/myNav/MyNav';
import MyFooter from '../components/MyFooter/MyFooter';
import LatestRelease from '../components/LatestRelease/LatestRelease';
import { BookContext, BooksProvider } from "../contexts/BookContext";
import { useState, useEffect, useContext } from 'react'
import useDebounce from "../hooks/useDebounce";


const MainLayout = ({children}) => {

    let books = useContext(BookContext);
    const [searchBook, setSearchBook] = useState("");
    const [bookStore, setBookStore] = useState(books);


    //this function generates a new array containing all matching elements
    const startSearch = (inputSearch) => {
      const booksResultArr = books.filter((elem) => elem.title.toLowerCase().includes(inputSearch.toLowerCase()));
      setBookStore(booksResultArr);      
      console.log("BooksResultArr:", booksResultArr)
    }

    const handleChange = (e) => { 
      if(e.target.value !== "") {
          setSearchBook(e.target.value);
          startSearch(e.target.value);
      } else {
          setSearchBook("");
          setBookStore(books);
      } 
    }

    //const debounceInputValue = useDebounce(searchBook, 2000);


  return (
    <div data-testid = 'main'>
            <MyNav 
                handleChange = {handleChange} 
                searchBook = {searchBook} 
                startSearch = {startSearch} 
                //debounceInputValue = {debounceInputValue}
            />
            <LatestRelease  bookStore = {bookStore} />
            {children}
            <MyFooter />
    </div>
  )
}

export default MainLayout;