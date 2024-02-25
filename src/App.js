import { useEffect, useState, useContext } from "react";
import MyNav from "./components/myNav/MyNav";
import MyFooter from "./components/MyFooter/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks";
import { BooksProvider, BookContext } from "./contexts/BookContext";

const App = () => {

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
          setSearchBook(e.target.value)
          startSearch(e.target.value)
      } else {
          setSearchBook("")
          setBooksCopy(books)
      } 
    }

    /* useEffect(() => {
      setBooksCopy(books);
    }, [books]); */

    /* useEffect(() => {
      if (searchBook === "") {
        setBooksCopy(books);
      } else {
        const booksResultArr = books.filter((elem) => elem.title.toLowerCase().includes(searchBook.toLowerCase()));
        setBooksCopy(booksResultArr);
      }
    }, []); */




    return (
      <div className= "App">
          <BooksProvider>
            <MyNav handleChange={handleChange} searchBook={searchBook} startSearch={startSearch}/>
            <MyFooter />
            <Welcome />
            <AllTheBooks booksCopy = {booksCopy}/>
          </BooksProvider>
      </div>
    );
}

export default App;
