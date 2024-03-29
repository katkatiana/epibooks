/**
 * @fileoverview MyNav.jsx
 * This component renders the NavBar of the application.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyNavLink from '../NavLink/NavLink';
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

/******** Internal Variables  ***************************************************/

/** Application Name. */
const APP_NAME = "Epibooks"

/******** Component Definition  *************************************************/

/**
 * MyNav
 * This component renders the NavBar of the application.
 * The NavBar contains the input area (needed to search through the books),
 * the Nav Links and a button that can be used to toggle between the different
 * supported themes.
 * Component is affected by changing the current Theme through the provided means.
 * @param {*} handleChange The function that is triggered when the onChange event
 * fires from the input text area.  
 * @param {*} searchBook The current search value 
 * @returns The instantiation of the components which form the NavBar, mentioned before.
 */
const MyNav = ({handleChange, searchBook, /*debounceInputValue*/}) => {

    /** Retrieve the information needed to handle the theme from the ThemeContext */
    const localThemeContext = useContext(ThemeContext);
    const toggleTheme = localThemeContext.toggleTheme;
    const theme = localThemeContext.theme;


    return (
      <>
        <ThemeProvider>
          <Navbar expand="lg" bg = {`${theme}`} data-bs-theme = {`${theme}`}>
            <Container>
              <Navbar.Brand href="#home">{APP_NAME}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <MyNavLink linkName = "Home" />
                  <MyNavLink linkName = "About" />
                  <MyNavLink linkName = "Browse" />
                </Nav>
              </Navbar.Collapse>
              <input 
                  className = 'm-4' 
                  type = 'text' 
                  name = 'search-bar' 
                  placeholder = 'Search...' 
                  value = {searchBook}   
                  onChange = {handleChange}  />
              <Button className = 'btn-success' 
                  onClick = {toggleTheme}>
                      Theme
              </Button>
            </Container>
          </Navbar>
        </ThemeProvider>
      </>
        
      );
}

export default MyNav;