/* import { useState, useContext } from "react";
import MyNav from "./components/myNav/MyNav";
import MyFooter from "./components/MyFooter/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import LatestRelease from "./components/LatestRelease/LatestRelease";
import { BooksProvider, BookContext } from "./contexts/BookContext";
import useDebounce from "./hooks/useDebounce"; */
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import SelectedBook from "./pages/SelectedBook";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./middleware/ProtectedRoutes";

const App = () => {

    /* let books = useContext(BookContext);
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

    const debounceInputValue = useDebounce(searchBook, 2000); */

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
        <BrowserRouter>
          <Routes>
            <Route  exact path = '/' element = {<Homepage /> } />
            {/* <Route  exact path = '/' element = {<LoginPage /> } />
            <Route element = { <ProtectedRoutes />} >
                <Route path = '/home' element = { <Homepage />} />
            </Route> */}
            <Route path = '/book/:asin' element = {<SelectedBook /> } />
            <Route path = '*' element = {<NotFound />} />
          </Routes>
        </BrowserRouter>
          {/* <BooksProvider>
            <MyNav handleChange = {handleChange} 
              searchBook = {searchBook} 
              startSearch = {startSearch} 
              debounceInputValue = {debounceInputValue}
            />
            <MyFooter />
            <Welcome />
            <LatestRelease booksCopy = {booksCopy} />
          </BooksProvider> */}
      </div>
    );
}

export default App;
