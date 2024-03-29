/**
 * @fileoverview MyFooter.jsx
 * This component renders the Footer of the application.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */
/******** Import Section  *******************************************************/

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * MyFooter
 * This component renders the Footer of the application.
 * Component is affected by changing the current Theme through the provided means.
 * @returns The instantiation of the components which form the Footer.
 */
const MyFooter = () => {

    /** Retrieve the informations needed to handle the theme from the ThemeContext */
    const localThemeContext = useContext(ThemeContext);
    const theme = localThemeContext.theme;

    return (
        <Navbar expand="lg" bg = {`${theme}`} data-bs-theme = {`${theme}`} fixed="bottom">
          <Container>
            <Navbar.Brand href="#home">I'm a footer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default MyFooter;