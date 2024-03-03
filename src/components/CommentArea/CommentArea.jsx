import { useState, useEffect, useParams } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddComment from '../AddComment/AddComment';
import CommentList from '../CommentList/CommentList';


const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDk0OTQzNzYsImV4cCI6MTcxMDcwMzk3Nn0.28ffhgAC1cIG7EHM78ueX5dMt6_REh3zOFs631xoCok";

const CommentArea = (inputAsin) => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [isCommentAdded, setIsCommentAdded] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [isCommentDeleted, setIsCommentDeleted] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        getData()
        setShow(true);

    };

    const getData = async () => {
        try{
            const url = "https://striveschool-api.herokuapp.com/api/books/" + inputAsin.inputAsin + "/comments";
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
        if(isCommentAdded || isCommentDeleted){
            getData()
        }
    }, [isCommentAdded, isCommentDeleted])

    return (
        <>
            <Button variant="primary" onClick={handleShow} >
                        Reviews
            </Button>

            <Modal show = {show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Reviews</Modal.Title>
                </Modal.Header>
                {
                    !error && !loading && isFetchCompleted ? 
                        (
                            <CommentList inputReviews = {reviews} commentDeleted = {setIsCommentDeleted}/> 
                        ) : 
                        ("")
                }
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <AddComment inputAsin = {inputAsin.inputAsin} commentUpdated = {setIsCommentAdded} />
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default CommentArea;