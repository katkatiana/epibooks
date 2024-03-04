/**
 * @fileoverview CommentList.jsx
 * This component renders each comment with
 * a specific component, given an input array of reviews.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */
/******** Import Section  *******************************************************/

import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import SingleComment from '../SingleComment/SingleComment';

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/


/**
 * CommentList
 * This component renders the list of comments associated
 * with a specific book by instantiating a SingleBook component
 * for each review, given that the received reviews are not empty.
 * @param {*} inputReviews the array of Reviews objects representing a single review for the book.
 * @param {*} commentUpdated the callback to be called if comments get updated
 * @param {*} commentDeleted the callback to be called if comments get deleted
 * @returns the instantiation of SingleComment component, for each object contained
 * in the inputReviews array.
 */
const CommentList = ({inputReviews, commentUpdated, commentDeleted}) => {
    
    /** Boolean, used to determine if the input reviews are empty  */
    const [currentReviews, setCurrentReviews] = useState(false);

    /** Any change in inputReviews should trigger an update of the internal state variable  */
    useEffect(() => {
        if(inputReviews.length > 0){
            setCurrentReviews(true)
        } else {
            setCurrentReviews(false)
        }
        
    }, [inputReviews])


    /** 
      * For each review, instantiate a SingleComment component but only if the
      * input reviews are not empty 
      */ 
    return (
        <ListGroup as = "ol">
            {
                currentReviews ? 
                (
                    inputReviews.map(review => 
                        <SingleComment key = {review._id} inputSingleReview = {review} commentDeletion = {commentDeleted}  commentUpdated = {commentUpdated} />
                    )
                ) : 
                ("")
            }
        
        </ListGroup>
    );
}


export default CommentList;