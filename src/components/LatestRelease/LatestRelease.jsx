import React, { useEffect, useState } from 'react';
import AllTheBooks from '../AllTheBooks/AllTheBooks';
import MyCommentArea from '../CommentArea/MyCommentArea';
import { Col, Container, Row } from 'react-bootstrap';


const LatestRelease = ({ booksCopy }) => {

    const [currentAsin, setCurrentAsin] = useState("");

    const setActiveAsin = (inputAsin) => {
        setCurrentAsin(inputAsin)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <AllTheBooks booksCopy = {booksCopy} setActiveAsin = {setActiveAsin} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LatestRelease;