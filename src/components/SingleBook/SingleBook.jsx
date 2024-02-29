import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import "./singleBook.css"
import CommentArea from '../CommentArea/CommentArea';
import { Link } from 'react-router-dom';

const SingleBook = (inputProp) => {

    
    const inputSingleBook = inputProp.inputProp;
    const setActiveAsin = inputProp.setActiveAsin;
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const handleShow = () => {
        setShowModal(!showModal)
    };
 
    const handleSelection = () => {
        setIsSelected(!isSelected)
        setActiveAsin(inputSingleBook.asin)
    };


    return (
            <Card 
                id = {inputSingleBook.asin} 
                style = {{ width: '12rem', marginBlock: '10px' }} 
                className = {isSelected ? "selected" : ''} 
                >
                <Card.Img className = "card-img" variant="top" src = {inputSingleBook.img} />
                <Card.Body>
                    <Card.Title className='truncate'>
                        {inputSingleBook.title}
                    </Card.Title>
                    
                    <Card.Text>
                        {inputSingleBook.price} $
                    </Card.Text>
                    <Link to = {`/book/${inputSingleBook.asin}`}>
                        <Button>Book Details</Button>
                    </Link>
                    <Button 
                        variant="primary"
                        onClick={handleSelection}>
                            Select
                    </Button>
                </Card.Body>
            </Card>
    )
}


export default SingleBook;