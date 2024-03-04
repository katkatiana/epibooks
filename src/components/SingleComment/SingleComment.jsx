/**
 * @fileoverview SingleComment.jsx
 * This component renders a single comment associated to a book.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import { Button, ListGroup } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import * as icons from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
import { TOKEN } from "../../utils/Utils";
import { getDeleteCommentsURL, getUpdateCommentsURL } from "../../utils/Utils";

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * SingleComment
 * This component renders a single comment object associated to abook.
 * Each comment has its own author, text and rate.
 * It also allows the possibility to modify or delete the comment.
 * If the user wants to edit the comment, the text fields will transform into input
 * text areas allowing the modification.
 * @param {*} inputSingleReview the Review object representing a single review for the book.
 * @param {*} commentDeletion the callback to be called if comments get deleted
 * @param {*} commentUpdated the callback to be called if comments get updated
 * @returns the instantiation of SingleComment component, for each object contained
 * in the inputReviews array.
 */
const SingleComment = ({inputSingleReview, commentDeletion, commentUpdated}) => {

    //const [toBeRegistered, setToBeRegistered] = useState(false);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    /** Boolean, determines if the user is actually editing the comment. */
    const [isEditing, setIsEditing] = useState(false);
    const [isRateValid, setIsRateValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCommentValid, setIsCommentValid] = useState(true);
    const [formData, setFormData] = useState({});
    
    /** Retrieve the theme information from THemeContext */
    const localThemeContext = useContext(ThemeContext);
    const theme = localThemeContext.theme;

    const currentReview = inputSingleReview;
    const commentDeleted = commentDeletion;
    const commentUpdate = commentUpdated;

    /**
     * handleIsEditing
     * This function toggles the isEditing state, used to track
     * when the user is editing a comment.
     * @param None
     * @returns None
     */
    const handleIsEditing = () => {
      setIsEditing(!isEditing)
    }
  
    /**
     * deleteComment
     * This function performs a fetch operation against
     * the configured API to delete the specified comment from the remote database.
     * @param None
     * @returns None
     * On a successfull fetch, commentDeletion prop is called to notify
     * the upper layers that a comment has been deleted.
     * If any kind of error occurs during the Fetch operation,
     * an Exception is raised and the Error is signalled through
     * the error internal state.
     */
    const deleteComment = async () => {
      commentDeleted(false);
      setIsFetchCompleted(false);
        try {
            const res = await fetch(getDeleteCommentsURL(currentReview._id), {
              method: "DELETE",
              headers: {
                Authorization: TOKEN,
              },
            });
            if(res.ok) {
              setError(false)
              setIsFetchCompleted(true)
              commentDeleted(true)
              alert("Comment was successfully deleted.")
            } else {
              throw new Error(res.status)
            }
           
          } catch (err) {
            console.log(err.message);
            setError(true);
            setIsFetchCompleted(false)
            alert("The request was not processed correctly. Please, try again.")
          }

    }


    /**
     * modifyComment
     * This function performs a fetch operation against
     * the configured API to update the specified comment in the remote database.
     * The function gets the inputs from the formData state.
     * @param None
     * @returns None
     * On a successfull fetch, commentUpdated prop is called to notify
     * the upper layers that a comment has been updated.
     * If any kind of error occurs during the Fetch operation,
     * an Exception is raised and the Error is signalled through
     * the error internal state.
     */
    const modifyComment = async () => {
      commentUpdate(false)
      setIsFetchCompleted(false);
        try {
            const putResponse = await fetch(getUpdateCommentsURL(currentReview._id), {
              method: "PUT",
              body: JSON.stringify({
                "comment": formData.comment,
                "rate": formData.rate,
                "elementId": currentReview.elementId,
                "author": currentReview.author,
              }),
              headers: {
                Authorization: TOKEN,
                "Content-Type": "application/json",
              },
            });
            if(putResponse.ok) {
              setIsFetchCompleted(true);
              setError(false);
              setIsEditing(false)
              commentUpdate(true)
              alert("Your comment was succesSfully updated.")
            } else {
              throw new Error(putResponse.status)
            }
          } catch (err) {
            console.log(err.message)            
            setError(true)
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
   * handleDelete
   * This function is triggered when the delete button is pressed.
   * @param None
   * @returns None
   */
  const handleDelete = () => {
    if(isEditing === false) {
      deleteComment()
    }
  }

  /**
   * handleUpdate
   * This function is triggered when the Save Changes button is pressed.
   * @param None
   * @returns None
   */
  const handleUpdate = () => {
    if(isEditing && isEmailValid && isCommentValid && isRateValid){
      modifyComment()
    } else {
      alert("Check if any input has invalid value.")
    }
  }

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            variant = {theme}
			data-testid = 'single-comment'
        >
          {
            isEditing ? 
            (
              <>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      {currentReview.author}
                    </div>
                    <input
                      type="text"
                      name="comment"
                      onChange={handleOnChange}
                    /> 
                </div>
                <Badge bg="primary" pill>
                <input
                      type="text"
                      name="rate"
                      onChange={handleOnChange}
                    />                   
                </Badge>
                <button onClick={handleUpdate}>Save changes</button>
              </>
            ) : (
              <>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      {currentReview.author}
                    </div>
                    {currentReview.comment}
                </div>
                <Badge bg="primary" pill>
                  {currentReview.rate}
                </Badge>
              </>
            )
          }
            <button onClick={handleIsEditing}>
              <icons.PencilSquare />
            </button>
            <Button variant = "secondary" style={{marginInlineStart: '3px'}} onClick = {handleDelete}><icons.XCircle /></Button>
        </ListGroup.Item>)
}

export default SingleComment;
