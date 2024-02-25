import ListGroup from 'react-bootstrap/ListGroup';
import SingleComment from '../SingleComment/SingleComment';
import { useEffect, useState } from 'react';



const CommentList = (props) => {
    
    const [currentReviews, setCurrentReviews] = useState(false);

    const inputReviews = props.inputReviews;
    const commentDeleted = props.commentDeleted;

    useEffect(() => {
        console.log("try: ", inputReviews)
        if(inputReviews.length > 0)
        {
            console.log("inputReviews", inputReviews)
            setCurrentReviews(true)
        } else {
            setCurrentReviews(false)
        }
        
    }, [inputReviews])


  return (
    <ListGroup as="ol">
        {
            currentReviews ? 
            (
                inputReviews.map(review => 
                    <SingleComment key = {review._id} inputSingleReview = {review} commentDeletion = {commentDeleted}/>
                )
            ) : 
            ("")
        }
    
    </ListGroup>
  );
}


export default CommentList;