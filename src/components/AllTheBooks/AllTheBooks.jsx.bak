//import myData from '../../books/horror.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import { Spinner } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import SingleBook  from '../SingleBook/SingleBook';
import { BookContext } from '../../contexts/BookContext'; 


/**
 * 
 * @returns data received by the server as a json file in cards. 
 * @details after retrieving the json array, it maps all data and distributes every single book in a single card after 
 * checking that there was no error response and that the loading of data is over.
 * 
 */

const AllTheBooks = ({ bookStore, setActiveAsin }) => {

    const [booksToShow, setBooksToShow] = useState([]);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Received Books:", bookStore)
        setBooksToShow(bookStore)
    }, [bookStore])


    /* useEffect(() => {
        //here we get all data from server and reduce it to 12 elements.
        //it is now possible to verify that data has been loaded and that fetch is completed
        //it executes this function only once
        const getData = async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setBooks(data.slice(0, 12));
                console.log("Books:" ,books)
                setLoading(false)
                setIsFetchCompleted(true)
            }
            catch(err) {
                console.log("error: ", err.message)
                setError(true)
            }
        }
       getData()

    }, []) */

    

    

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
                                    <SingleBook inputProp = {book} setActiveAsin = {setActiveAsin} />
                                </Col>
                            )
                    }
                </Row>
                    
            </Container>
        </>
      );
}

export default AllTheBooks;