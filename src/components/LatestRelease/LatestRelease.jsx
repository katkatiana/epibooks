/**
 * @fileoverview LatestRelease.jsx
 * This components defines the layout and the components
 * needed for the visualization of the specified booklist.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/
import React from 'react';
import { Container } from 'react-bootstrap';
import AllTheBooks from '../AllTheBooks/AllTheBooks';

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * LatestRelease
 * This component defines the layout and the components
 * needed for the visualization of the specified booklist.
 * It receives the book list to be rendered, and passes it down to the
 * children component.
 * @param {*} bookStore The book-list that has to be handled for visualization.
 * @returns Instantiation of the AllTheBooks component.
 */
const LatestRelease = ({ bookStore }) => {

    return (
        <>
            <Container>
                <AllTheBooks bookStore = {bookStore} />
            </Container>
        </>
    )
}

export default LatestRelease;