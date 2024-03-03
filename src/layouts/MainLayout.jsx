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
    const [booksCopy, setBooksCopy] = useState([]);


    //this function generates a new array containing all matching elements
    const startSearch = (inputSearch) => {
      const booksResultArr = books.filter((elem) => elem.title.toLowerCase().includes(inputSearch.toLowerCase()));
      setBooksCopy(booksResultArr);      
      //books = booksResultArr;
    }

    const handleChange = (e) => { 
      if(e.target.value !== "") {
          setSearchBook(e.target.value);
          startSearch(e.target.value);
      } else {
          setSearchBook("");
          setBooksCopy(books);
      } 
    }

    //const debounceInputValue = useDebounce(searchBook, 2000);


  return (
    <>
        <BooksProvider>
            <MyNav 
                handleChange = {handleChange} 
                searchBook = {searchBook} 
                startSearch = {startSearch} 
                //debounceInputValue = {debounceInputValue}
            />
            <LatestRelease  booksCopy = {booksCopy} />
            {children}
            <MyFooter />
        </BooksProvider>
    </>
  )
}

export default MainLayout;