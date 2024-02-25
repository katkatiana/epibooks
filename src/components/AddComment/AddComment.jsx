import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as icons from 'react-bootstrap-icons';

const AddComment = (props) => {

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDgwOTY5ODMsImV4cCI6MTcwOTMwNjU4M30.g4-d8cG1ohQMkhzsHdKKDKTNDRZqfypgBZC-VVrI98w";

    const [show, setShow] = useState(false);
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");
    const [author, setAuthor] = useState("");
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const elementId = props.inputAsin;
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addData = async () => {
        try{
            const url = "https://striveschool-api.herokuapp.com/api/comments";
            const body = {
                "comment": formData.comment,
                "rate": formData.rate,
                "elementId": elementId,
                "author": formData.author,
            }
            const response = await fetch(url, {
                method: "POST",
                body : JSON.stringify(body),
                headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                },
            });
            console.log(response);
            const data = await response.json();
            setLoading(false);
            setIsFetchCompleted(true);
            setError(false);
            props.commentUpdated(true)
            alert("Your comment was successfully added");
        }
        catch(err) {
            console.log("error: ", err.message);
            setError(true);
            props.commentUpdated(false)
            alert("Something went wrong...");
        }
    }


    const handleOnChange = (ev) => {
        ev.preventDefault();
        const {name, value} = ev.target;
        console.log("ev.target:", ev.target)
        setFormData({
            ...formData,
            [name] : value 
        })
    }

    const handleSave = () => {
        addData()
        handleClose()
    }



    return (       
        <>
            <Button variant="primary" onClick={handleShow}>
            Add comment
            </Button>
    
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                        type="email"
                        name = "author"
                        placeholder="name@example.com"
                        autoFocus
                        onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                        type="text"
                        name = "rate"
                        placeholder="from 1 to 5"
                        onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Your comment here</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name = "comment"
                        onChange={handleOnChange}
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSave}>
                    Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AddComment;