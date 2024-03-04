import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';
import MainLayout from "./MainLayout";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { MemoryRouter } from 'react-router-dom';



const mockBooks = [
    { asin: '123', title: 'Book 1', price: '10.0', img: 'path/to/img1.jpg', category: "fantasy" },
    { asin: '456', title: 'Book 2', price: '15.0', img: 'path/to/img2.jpg', category: "horror" },
  ];

  const mockTheme = "light"
  const mockToggle = () => {}
  const mockSet = () => {}

  const mockReview = [
    {author: 'aaaa', comment: 'empty', rate: 0}
  ]

  describe('MainLayout Component', () => {
        test('if no book has been clicked, there will not be any SingleComment in the page', () => {
            render(
                    <ThemeContext.Provider value = {{mockTheme, mockToggle, mockSet}}>
                        <MemoryRouter>
                            <BookContext.Provider value={mockBooks}>
                                <MainLayout />
                            </BookContext.Provider>
                        </MemoryRouter>
                    </ThemeContext.Provider>
            )

            const singleComment = screen.queryByTestId('single-comment')

            expect(singleComment).not.toBeInTheDocument()


        })
  })
