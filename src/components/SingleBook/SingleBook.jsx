import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState, useContext } from 'react';
import "./singleBook.css"
import CommentArea from '../CommentArea/CommentArea';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const SingleBook = (inputProp) => {

    
    const inputSingleBook = inputProp.inputProp;
    const setActiveAsin = inputProp.setActiveAsin;
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const localThemeContext = useContext(ThemeContext);
    const theme = localThemeContext.theme;


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
                data-testid = 'card-test'
                bg={theme}
                key={theme}
                text={theme === 'light' ? 'dark' : 'white'}
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
                        <Button data-testid="btn-link">Book Details</Button>
                    </Link>
                    <Button 
                        variant="primary"
                        data-testid = 'card-button-test'
                        onClick={handleSelection}>
                            Select
                    </Button>
                </Card.Body>
            </Card>
    )
}


export default SingleBook;