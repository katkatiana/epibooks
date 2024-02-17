import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyFooter = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
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