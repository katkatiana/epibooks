import { Button, ListGroup } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import * as icons from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';


const SingleComment = (props) => {

    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [toBeRegistered, setToBeRegistered] = useState(false);
    const [formData, setFormData] = useState({});
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");

    const currentReview = props.inputSingleReview;
    const commentDeleted = props.commentDeletion;
    const commentUpdated = props.commentUpdated;

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDgwOTY5ODMsImV4cCI6MTcwOTMwNjU4M30.g4-d8cG1ohQMkhzsHdKKDKTNDRZqfypgBZC-VVrI98w";
    const url = "https://striveschool-api.herokuapp.com/api/comments/";

    const deleteComment = async () => {
      commentDeleted(false)
        try {
            const res = await fetch(url + currentReview._id, {
              method: "DELETE",
              headers: {
                Authorization: token,
              },
            });
            console.log(res)
            const data = await res.json();
            setError(false)
            setIsFetchCompleted(true)
            setLoading(false)
            commentDeleted(true)
            alert("Comment was succesfully deleted")
          } catch (err) {
            console.log(err.message);
            setError(true);
            alert("The request was not processed correctly.");
          }

    }

    const handleIsEditing = () => {
      setIsEditing(!isEditing)
    }

    const modifyComment = async () => {
      commentUpdated(false)
        try {
            const putResponse = await fetch(url + currentReview._id, {
              method: "PUT",
              body: JSON.stringify({
                "comment": formData.comment,
                "rate": formData.rate,
                "elementId": currentReview.elementId,
                "author": currentReview.author,
              }),
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            });
            setLoading(false);
            setIsFetchCompleted(true);
            setError(false);
            setIsEditing(false)
            commentUpdated(true)
            alert("Your comment was succesfully updated")
            } 
           catch (err) {
            alert("The request was not processed correctly. Please, try again")
            setError(true)
            console.log(err.message)
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

  const handleDelete = () => {
    if(isEditing === false) {
      deleteComment()
    } else {
      modifyComment()
    }
  }

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
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
                <button onClick={modifyComment}>Save changes</button>
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
