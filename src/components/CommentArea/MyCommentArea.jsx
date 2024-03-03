import { useState, useEffect, useParams } from 'react';
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDk0OTQzNzYsImV4cCI6MTcxMDcwMzk3Nn0.28ffhgAC1cIG7EHM78ueX5dMt6_REh3zOFs631xoCok";

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
            if(response.ok) {
                const data = await response.json()
                setReviews(data)
                setLoading(false)
                setIsFetchCompleted(true)
            } else{
                throw new Error(response.status)
            }
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