import { useState, useEffect, useParams } from 'react';
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDgwOTY5ODMsImV4cCI6MTcwOTMwNjU4M30.g4-d8cG1ohQMkhzsHdKKDKTNDRZqfypgBZC-VVrI98w";

const MyCommentArea = ({ inputAsin }) => {

    const [loading, setLoading] = useState(true);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [isCommentAdded, setIsCommentAdded] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [isCommentDeleted, setIsCommentDeleted] = useState(false);

    const getData = async () => {
        try{
            const url = "https://striveschool-api.herokuapp.com/api/books/" + inputAsin + "/comments";
            const response = await fetch(url, {
                headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(typeof data)
            console.log("data: ", data)
            setReviews(data)
            console.log("reviews", reviews)
            setLoading(false)
            setIsFetchCompleted(true)
        }
        catch(err) {
            console.log("error: ", err.message)
            setError(true)
        }
    }

    useEffect(() => {
        if(inputAsin !== "") 
        {
            getData()
        }
    }, [inputAsin])

    useEffect(() => {
        if((inputAsin !== "") && (isCommentAdded || isCommentDeleted))
        {
            getData()
        }
    }, [isCommentAdded, isCommentDeleted])


    return (
        <>
            <h1>{inputAsin}</h1>
            {
                    !error && !loading && isFetchCompleted ? 
                        (   
                            <>
                                <CommentList inputReviews = {reviews} commentUpdated = {setIsCommentAdded} commentDeleted = {setIsCommentDeleted}/> 
                                <AddComment inputAsin = {inputAsin} commentUpdated = {setIsCommentAdded} />
                            </>
                        ) : 
                        ("")
            }
            
        </>
    )

}

export default MyCommentArea;