import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDgwOTY5ODMsImV4cCI6MTcwOTMwNjU4M30.g4-d8cG1ohQMkhzsHdKKDKTNDRZqfypgBZC-VVrI98w";
export const url = "https://striveschool-api.herokuapp.com/api/books/:asin/comments/";

const CommentArea = () => {
    
      const [show, setShow] = useState(false);
      const target = useRef(null);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Reviews
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add comment
                </Button>
                </Modal.Footer>
            </Modal>
        </>
  );
}



export default CommentArea;