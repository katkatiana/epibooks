/**
 * @fileoverview BookDetails.jsx
 * This component renders the page in which the
 * details of the specified book are shown.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import MyCommentArea from '../CommentArea/MyCommentArea';
import "./BookDetails.css"

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * BookDetails
 * This component renders the layout of the page built to show
 * the details of the specified book object.
 * The layout also includes a separated component, MyCommentArea, which
 * renders the comments associated to the selected book.
 * @param {*} None 
 * No parameters are given through props, anyway the component reads the asin
 * of the selected book through url params (useParams).
 * @returns Instantiation of the elements that contain the book details,
 * and also the instantiation of MyCommentArea component.
 */
const BookDetails = () => {
  
  /** ASIN of the selected book, passed through url Params */
  let { asin } = useParams();
  /** Retrieve initial booklist from context */
  let allBooks = useContext(BookContext);

  /** Use the booklist from the Context and find the book with the matching asin */
  const selectedBook = allBooks.find(book => String(book.asin) === asin);  

  return (
    <Container className='book-details-container'>
      <Row>
        <Col>
          <img src = {`${selectedBook.img}`} alt = "book-img" />
          <h4>{`${selectedBook.title}`}</h4>
          <p>{`${selectedBook.price}`} $</p>
          <p>genre: {`${selectedBook.category}`}</p>
        </Col>
        <Col>
          <MyCommentArea inputAsin = {asin}/>
        </Col>
      </Row>
    </Container>
  )
}

export default BookDetails;