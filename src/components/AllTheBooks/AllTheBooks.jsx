/**
 * @fileoverview AllTheBooks.jsx
 * This component manages the 
 * organization of the layout for the visualization of the books.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SingleBook  from '../SingleBook/SingleBook';

/******** Component Definition  *************************************************/

/**
 * AllTheBooks
 * This component defines the main layout of the application by
 * instantiating one SingleBook component for each book in the
 * input bookStore.
 * @param {*} bookStore The book list which will be handled by instantiating a SingleBook
 * component for each book.
 * @returns A Row-Column layout in which a SingleBook component is instantiated
 * for each book object in the bookStore input prop.
 */
const AllTheBooks = ({ bookStore }) => {

    /** Holds the current books to be showed, as given from input prop */
    const [booksToShow, setBooksToShow] = useState([]);

    /** Update the internal state on every change on bookStore */
    useEffect(() => {
        setBooksToShow(bookStore)
    }, [bookStore])    


    return (
        <> 
            <Container>
                {/* {
                    loading && (
                        <Spinner animation="border" variant="warning" />
                    )
                }
                {
                    error && (
                        <>
                            <div>
                                Something went wrong...
                                <Spinner animation="border" variant="warning" />
                            </div>
                        </>
                    )
                    
                } */}
                <Row>
                    {
                        booksToShow.map(book =>  
                            <Col key = {book.asin} style={{display: 'flex'}}> 
                                <SingleBook inputBook = {book} />
                            </Col>
                        )
                    }
                </Row>
                    
            </Container>
        </>
      );
}

export default AllTheBooks;