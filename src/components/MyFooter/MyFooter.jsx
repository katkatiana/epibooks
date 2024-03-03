import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const MyFooter = () => {

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