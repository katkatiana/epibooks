/**
 * @fileoverview AddComment.jsx
 * This component renders the elements needed to modify a comment.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ThemeContext } from '../../contexts/ThemeContext';
import "./AddComment.css"
import { TOKEN, COMMENTS_URL } from '../../utils/Utils';

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * SingleComment
 * This component renders modal containing text areas that can be used to input
 * a new comment.
 * @param {*} inputAsin the ASIN of the book to which we are posting a new comment.
 * @param {*} commentUpdated the callback to be called if comments get updated
 * @returns the instantiation of the modal component, along with the elements needed for
 * the update.
 */
const AddComment = ({inputAsin, commentUpdated}) => {


    const [show, setShow] = useState(false);

    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({});
    const [isRateValid, setIsRateValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isCommentValid, setIsCommentValid] = useState(false);
    const elementId = inputAsin;
    const localThemeContext = useContext(ThemeContext);
    const theme = localThemeContext.theme;
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /**
     * addData
     * This function performs a fetch operation against
     * the configured API to post the new comment in the remote database.
     * The function gets the inputs from the formData state.
     * @param None
     * @returns None
     * On a successfull fetch, commentUpdated prop is called to notify
     * the upper layers that a comment has been posted.
     * If any kind of error occurs during the Fetch operation,
     * an Exception is raised and the Error is signalled through
     * the error internal state.
     */
    const addData = async () => {
        commentUpdated(false)
        setIsFetchCompleted(false);
        try{
            const body = {
                "comment": formData.comment,
                "rate": formData.rate,
                "elementId": elementId,
                "author": formData.author,
            }
            const response = await fetch(COMMENTS_URL, {
                method: "POST",
                body : JSON.stringify(body),
                headers: {
                "Authorization": TOKEN,
                "Content-Type": "application/json",
                },
            });
            if(response.ok) {
                setIsFetchCompleted(true);
                setError(false);
                commentUpdated(true)
                alert("Your comment was successfully added");
            } else {
                throw new Error(response.status)
            }
        } catch(err) {
            console.log("error: ", err.message);
            setError(true);
            setIsFetchCompleted(false);
            alert("The request was not processed correctly. Please, try again.")
        }
    }

    /**
     * handleOnChange
     * This function just collects all the input parameters and fills the formData
     * accordingly, also checking their value for correctness.
     * @param ev Event object, which can be inspected for target, value, etc.
     * @returns None
     */
    const handleOnChange = async (ev) => {
        ev.preventDefault();
        const {name, value} = ev.target;
        
        /** Check rate, must be > 0 and < 5*/
        if((name === "rate")){
            console.log(value)
            if(value > 5){
                setIsRateValid(false);
            } else if(value === null) {
                setIsRateValid(false)
            } else {
                setIsRateValid(true)
                setFormData({
                    ...formData,
                    [name] : value 
                })
            }
        }
        /** Check for empty value */
        if((name === "author")){
            console.log(value)
            if(value === ""){
                setIsEmailValid(false)
            } else {
                setIsEmailValid(true)
                setFormData({
                    ...formData,
                    [name] : value 
                })
            }
        }
        /** Check for empty value */
        if((name === "comment")){
            if(value === ""){
                setIsCommentValid(false)
            } else {
                setIsCommentValid(true)
                setFormData({
                    ...formData,
                    [name] : value 
                })
            }
        }
    }

  /**
   * handleUpdate
   * This function is triggered when the Save button is pressed.
   * It starts the POST request if the required inputs are valid.
   * @param None
   * @returns None
   */
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