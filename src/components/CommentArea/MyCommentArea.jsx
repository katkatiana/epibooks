/**
 * @fileoverview MyCommentArea.jsx
 * This component renders the list of comments associated
 * with a specific book.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import { useState, useEffect} from 'react';
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';
import { TOKEN } from '../../utils/Utils';
import { getCommentsURL } from '../../utils/Utils';

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * MyCommentArea
 * This component renders the list of comments associated
 * with a specific book through a dedicated component.
 * It also instantiates a separate component, AddComment, which
 * can be used to post new comments.
 * This component is also in charge of handling the refresh of
 * the comments whenever a new comment gets deleted/modified/posted.
 * @param {*} inputAsin the ASIN of the book whose comments are to be loaded. 
 * @returns the instantiation of the CommentList component, which contains the
 * comments for a single book, and of the AddComment component, that can be used
 * to add new comments to the book.
 */
const MyCommentArea = ({ inputAsin }) => {

    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [reviews, setReviews] = useState([]);

    /** Those states are used to track comment update/delete: 
     *  set functions are passed down to child components, so that they can trigger
     *  a refresh of the comment list whenever a new comment gets updated/deleted
    */
    const [isCommentUpdated, setIsCommentUpdated] = useState(false);    
    const [isCommentDeleted, setIsCommentDeleted] = useState(false);

    /**
     * getComments
     * This function performs a fetch operation against
     * the configured API to retrieve the set of comments associated
     * to a book.
     * @param None
     * @returns On a successfull fetch, the reviews state is filled
     * with Review objects, each one representing a review for
     * the specified book.
     * If any kind of error occurs during the Fetch operation,
     * an Exception is raised and the Error is signalled through
     * the error internal state.
     */
    const getComments = async () => {
        try{
            const url = getCommentsURL(inputAsin);
            const response = await fetch(url, {
                headers: {
                "Authorization": TOKEN,
                "Content-Type": "application/json",
                },
            });
            if(response.ok) {
                const data = await response.json()
                setReviews(data)
                setIsFetchCompleted(true)
            } else{
                throw new Error(response.status)
            }
        }
        catch(err) {
            console.log("error: ", err.message)
            setError(true)
            setIsFetchCompleted(false)
        }
    }

    /** Any change in the inputASIN should trigger a refresh of the comments */
    useEffect(() => {
        if(inputAsin !== "") 
        {
            getComments()
        }
    }, [inputAsin])

    /** Any change in the isCommentAdded, isCommentDeleted states should trigger a refresh of the comments */
    useEffect(() => {
        if((inputAsin !== "") && (isCommentUpdated || isCommentDeleted))
        {
            getComments()
        }
    }, [isCommentUpdated, isCommentDeleted])


    return (
        <>
            
            {
                !error && isFetchCompleted ? 
                    (   
                        <>
                            <CommentList inputReviews = {reviews} commentUpdated = {setIsCommentUpdated} commentDeleted = {setIsCommentDeleted}/> 
                            <AddComment inputAsin = {inputAsin} commentUpdated = {setIsCommentUpdated} />
                        </>
                    ) : 
                    ("")
            }
            
        </>
    )

}

export default MyCommentArea;