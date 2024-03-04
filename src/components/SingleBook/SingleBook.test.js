import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';
import SingleBook from "./SingleBook";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BookContext } from "../../contexts/BookContext";
import { MemoryRouter } from 'react-router-dom';

const mockBooks = [
    { asin: '123', title: 'Book 1', price: '10.0', img: 'path/to/img1.jpg', category: "fantasy" },
    { asin: '456', title: 'Book 2', price: '15.0', img: 'path/to/img2.jpg', category: "horror" },
  ];


describe("SingleBook component", () => {
    test("check if when clicking on button it adds the red border to the card", () => {

        const mockTheme = "light"
        const mockToggle = () => {}
        const mockSet = () => {}
        render(
            <ThemeContext.Provider value = {{mockTheme, mockToggle, mockSet}}>
                    <MemoryRouter>
                        <BookContext.Provider value={mockBooks}>
                                <SingleBook inputProp = {mockBooks[0]}/>
                        </BookContext.Provider>
                    </MemoryRouter>
                </ThemeContext.Provider>
        )

        const card = screen.getByTestId('card-test')
        const button = screen.getByTestId('card-button-test')

        fireEvent.click(button)

        expect(card).toHaveClass('selected')
    })
})
