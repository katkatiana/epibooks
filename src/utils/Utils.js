/**
 * @fileoverview Utils.js
 * Contains utility code used throughout the application components
 * to avoid code repetition.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

/******** Variables  ************************************************************/

/**
 * Authorization token, used
 * with fetch calls that require Authorization.
 */
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDk0OTQzNzYsImV4cCI6MTcxMDcwMzk3Nn0.28ffhgAC1cIG7EHM78ueX5dMt6_REh3zOFs631xoCok";

/**
 * The URL to which a GET request is made, 
 * to obtain the initial book-list to show.
 */
const BOOKS_URL = "https://epibooks.onrender.com"

/**
 * The URL to which a request to POST a new comment is made.
 */
const COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/comments";

/******** Functions  ************************************************************/

const getCommentsURL = (inputAsin) => {
    let GET_COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/books/" + inputAsin + "/comments";
    return GET_COMMENTS_URL;
}

const getDeleteCommentsURL = (inputId) => {
    let DELETE_URL = "https://striveschool-api.herokuapp.com/api/comments/"+inputId;
    return DELETE_URL;
}

const getUpdateCommentsURL = (inputId) => {
    let UPDATE_URL = "https://striveschool-api.herokuapp.com/api/comments/"+inputId;
    return UPDATE_URL;
}


export {TOKEN, BOOKS_URL, COMMENTS_URL};
export {getCommentsURL, getDeleteCommentsURL, getUpdateCommentsURL};