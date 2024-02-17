import Nav from 'react-bootstrap/Nav';

const MyNavLink = (props) => {
    return (
        <Nav.Link href= "#">
            {props.linkName}
        </Nav.Link>
    )
}

export default MyNavLink;