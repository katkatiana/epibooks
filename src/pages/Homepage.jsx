import AllTheBooks from "../components/AllTheBooks/AllTheBooks";
import LatestRelease from "../components/LatestRelease/LatestRelease";
import { BookContext, BooksProvider } from "../contexts/BookContext";
import MainLayout from "../layouts/MainLayout";
import { useState, useEffect, useContext } from 'react'

const Homepage = () => {

/*     let books = useContext(BookContext);
    const [booksCopy, setBooksCopy] = useState([]); */

    return (
        <BooksProvider>
            <MainLayout />
        </BooksProvider>
    )
}

export default Homepage;