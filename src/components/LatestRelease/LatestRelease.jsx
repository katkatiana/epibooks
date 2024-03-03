import React, { useEffect, useState } from 'react';
import AllTheBooks from '../AllTheBooks/AllTheBooks';
import { Col, Container, Row } from 'react-bootstrap';


const LatestRelease = ({ bookStore }) => {

    const [currentAsin, setCurrentAsin] = useState("");

    const setActiveAsin = (inputAsin) => {
        setCurrentAsin(inputAsin)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <AllTheBooks bookStore = {bookStore} setActiveAsin = {setActiveAsin} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LatestRelease;