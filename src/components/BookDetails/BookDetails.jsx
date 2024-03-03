import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import MyCommentArea from '../CommentArea/MyCommentArea';
import { Container, Row, Col } from 'react-bootstrap';

const BookDetails = () => {
  
  let { asin } = useParams();
  let allBooks = useContext(BookContext);

  const selectedBook = allBooks.find(book => String(book.asin) === asin);
  console.log(selectedBook)
  

  return (
    <Container>
      <Row>
                    <Col>
                      <img src = {`${selectedBook.img}`} alt = "book-img" />
                      <h3>{`${selectedBook.title}`}</h3>
                      <p>{`${selectedBook.price}`}</p>
                      <p>{`${selectedBook.category}`}</p>
                    </Col>
                    <Col>
                      <MyCommentArea inputAsin = {asin}/>
                    </Col>
                </Row>
    </Container>
  )
}

export default BookDetails;