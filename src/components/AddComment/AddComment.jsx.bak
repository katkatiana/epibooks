import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ThemeContext } from '../../contexts/ThemeContext';
import "./AddComment.css"
//import * as icons from 'react-bootstrap-icons';

const AddComment = (props) => {

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDk0OTQzNzYsImV4cCI6MTcxMDcwMzk3Nn0.28ffhgAC1cIG7EHM78ueX5dMt6_REh3zOFs631xoCok";

    const [show, setShow] = useState(false);
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");
    const [author, setAuthor] = useState("");
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({});
    const [isRateValid, setIsRateValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isCommentValid, setIsCommentValid] = useState(false);
    const elementId = props.inputAsin;
    const localThemeContext = useContext(ThemeContext);
    const theme = localThemeContext.theme;
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addData = async () => {
        props.commentUpdated(false)
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
            if(response.ok) {
                setLoading(false);
                setIsFetchCompleted(true);
                setError(false);
                props.commentUpdated(true)
                alert("Your comment was successfully added");
            } else {
                throw new Error(response.status)
            }
        } catch(err) {
            console.log("error: ", err.message);
            setError(true);
            alert("Something went wrong...");
        }
    }


    const handleOnChange = (ev) => {
        ev.preventDefault();
        const {name, value} = ev.target;
        console.log("ev.target:", ev.target)
        
        
        if((name === "rate")){
            if(value > 5){
                //alert("Rate cannot be higher than 5.");
                setIsRateValid(false);
            } else if(value === null) {
                //alert("Input cannot be empty");
                setIsRateValid(false)
            } else {
                setIsRateValid(true)
            }
        }

        if((name === "author")){
            if(value === ""){
                //alert("Input cannot be empty");
                setIsEmailValid(false)
            } else {
                setIsEmailValid(true)
            }
        }

        if((name === "comment")){
            if(value === ""){
                //alert("Input cannot be empty");
                setIsCommentValid(false)
            } else {
                setIsCommentValid(true)
            }
        }

        console.log("c", isCommentValid)
        console.log("e",isEmailValid)
        console.log("r",isRateValid)

    
        if(isEmailValid && isCommentValid && isRateValid){
            setFormData({
                ...formData,
                [name] : value 
            })
        }
    }

    const handleSave = () => {
        if(isEmailValid && isCommentValid && isRateValid){
            addData()
            handleClose()
        } else {
            alert("Check if any input has invalid value.")
        }
    }



    return (       
        <>
            <Button variant="primary" onClick={handleShow}>
            Add comment
            </Button>
    
            <Modal show={show} onHide={handleClose} data-bs-theme = {theme}>
                <Modal.Header closeButton>
                    <Modal.Title className={theme === 'light' ? 'modal-text-dark' : 'modal-text-light'}>Your comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className={theme === 'light' ? 'modal-text-dark' : 'modal-text-light'}>Email address</Form.Label>
                        <Form.Control
                        type="email"
                        name = "author"
                        placeholder="name@example.com"
                        autoFocus
                        onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label className={theme === 'light' ? 'modal-text-dark' : 'modal-text-light'}>Rating</Form.Label>
                        <Form.Control
                        type="number"
                        name = "rate"
                        placeholder="from 1 to 5"
                        onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label className={theme === 'light' ? 'modal-text-dark' : 'modal-text-light'}>Your comment here</Form.Label>
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