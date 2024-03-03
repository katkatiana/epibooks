import React from "react";
import { screen, render } from '@testing-library/react';
import { ThemeContext } from "../../contexts/ThemeContext";
import { BookContext } from "../../contexts/BookContext";
import { MemoryRouter } from 'react-router-dom';
import MyCommentArea from '../CommentArea/MyCommentArea';

const mockTheme = "light"
const mockToggle = () => {}
const mockSet = () => {}
const mockToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNWY4ZWJkNWQxMjAwMTg5MGQzNDgiLCJpYXQiOjE3MDk0OTQzNzYsImV4cCI6MTcxMDcwMzk3Nn0.28ffhgAC1cIG7EHM78ueX5dMt6_REh3zOFs631xoCok";

// Mock list of books as you might have from your JSON file
const mockBooks = [
    { asin: '1945683694', title: 'Book 1', price: '10.0', img: 'path/to/img1.jpg', category: "fantasy" },
    { asin: '0316389706', title: 'Book 2', price: '15.0', img: 'path/to/img2.jpg', category: "horror" },
  ];
let mockComments = [];

beforeAll(async () => {
        for(let i = 0; i < mockBooks.length; i++)
        {
            try{
                const url = "https://striveschool-api.herokuapp.com/api/books/"+mockBooks[i].asin+"/comments";
                const response = await fetch(url, {
                    headers: {
                    "Authorization": mockToken,
                    "Content-Type": "application/json",
                    },
                });
                if(response.ok) {
                    const data = await response.json()
                    mockComments = mockComments.concat(data)
                    console.log(mockComments)
                } else{
                    throw new Error(response.status)
                }
            }
            catch(err) {
                console.log("error: ", err.message)
            }
        }
});

describe('CommentArea', () => {        
        test('renders correctly with provided props and displays comments', async () => {
        
        render(
                <ThemeContext.Provider value = {{mockTheme, mockToggle, mockSet}}>
                    <MemoryRouter>
                        <BookContext.Provider value={mockBooks}>
                            {
                                mockBooks.forEach(book => {
                                    <>
                                    <MyCommentArea inputAsin = {book.asin}/>
                                    </>
                                })
                            }                           
                        </BookContext.Provider>
                    </MemoryRouter>
                </ThemeContext.Provider>
        );

        mockComments.forEach(async comment => {
            // Check if title, price of each book are rendered
            expect(await screen.findByText(comment.comment)).toBeInTheDocument();
            expect(await screen.findByText(comment.rate)).toBeInTheDocument();
            expect(await screen.findByText(comment.author)).toBeInTheDocument();
        });

        })
    });