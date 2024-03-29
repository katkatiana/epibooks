/**
 * @fileoverview SingleBook.jsx
 * This component renders a single Book object along
 * with its details.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, LIGHT_THEME } from '../../contexts/ThemeContext';
import "./singleBook.css"

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * SingleBook
 * This component renders a single book Object (given in input)
 * through the use of a BootStrap card.
 * Each Card includes all the details of a book, including a set of buttons
 * which can be used to show more details on the book or to select it.
 * @param {*} inputBook the book object from which the component is rendered.
 * @returns Instantiation of Card containing the book details, along with
 * two buttons that can be used, respectively, to navigate to the BookDetails
 * component or to select it.
 */
const SingleBook = ({inputBook}) => {

    /** Retrieve the theme information from ThemeContext */
    const localThemeContext = useContext(ThemeContext);
    const theme = localThemeContext.theme;
    
    /** Boolean, represents if the card is selected (through the click of the respective button) */
    const [isSelected, setIsSelected] = useState(false);

    const inputSingleBook = inputBook;
 
    /**
     * handleSelection
     * This function toggles the isSelected state variable
     * between each invocation.
     * This function is invoked whenever the user presses the 
     * Select button associated with each card.
     * @param None 
     * @return None
     */
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
                text={theme === LIGHT_THEME ? 'dark' : 'white'}
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