//import { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyNavLink from '../NavLink/NavLink';
//import { BookContext } from '../../contexts/BookContext';
import { Button } from 'react-bootstrap';


const MyNav = ({startSearch, handleChange, searchBook, debounceInputValue}) => {

  //const books = useContext(BookContext);

    return (
      <>
        
            <Navbar expand="lg" className="bg-body-tertiary">
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
                type = 'submit'
                onChange = {() => startSearch(searchBook)}>
                    Search
            </Button>
          </Container>
        </Navbar>
      </>
        
      );
}

export default MyNav;