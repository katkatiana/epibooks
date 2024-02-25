import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import "./singleBook.css"
import CommentArea from '../CommentArea/CommentArea';

const SingleBook = (inputProp) => {

    
    const inputSingleBook = inputProp.inputProp;
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const handleShow = () => {
        setShowModal(!showModal)
    };
 
    const handleSelection = () => {
        setIsSelected(!isSelected)
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
                    
                    <CommentArea inputAsin = {inputSingleBook.asin}/>
                    <Card.Text>
                        {inputSingleBook.price} $
                    </Card.Text>
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