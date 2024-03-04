import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyNavLink from '../NavLink/NavLink';
import { Button } from 'react-bootstrap';
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';
import { useContext } from 'react';


const MyNav = ({startSearch, handleChange, searchBook, debounceInputValue}) => {

    const localThemeContext = useContext(ThemeContext);
    const toggleTheme = localThemeContext.toggleTheme;
    const theme = localThemeContext.theme;


    return (
      <>
        <ThemeProvider>
          <Navbar expand="lg" bg = {`${theme}`} data-bs-theme = {`${theme}`}>
            <Container>
              <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
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