import React from "react";
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeContext } from "../../contexts/ThemeContext";
import { BookContext } from "../../contexts/BookContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from '../BookDetails/BookDetails'
import SelectedBook from "../../pages/SelectedBook";
import SingleBook from "../SingleBook/SingleBook";
import Homepage from "../../pages/Homepage";

const mockBooks = [
    { asin: '123', title: 'Book 1', price: '10.0', img: 'path/to/img1.jpg', category: "fantasy" },
    { asin: '456', title: 'Book 2', price: '15.0', img: 'path/to/img2.jpg', category: "horror" },
  ];
  const mockTheme = "light"
  const mockToggle = () => {}
  const mockSet = () => {}


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        asin: '123',
    }),
}));


describe('CardElement Component', () => {
    test('renders the correct number of cards based on the books data', async () => {
        
        render(
            <ThemeContext.Provider value = {{mockTheme, mockToggle, mockSet}}>
            <BookContext.Provider value={mockBooks}>
            <BrowserRouter>
                <Routes>
                <Route  exact path = '/' element = {<Homepage /> } />
                <Route path = '/book/:123' element = {<SelectedBook /> } />
                </Routes>
            </BrowserRouter>
            </BookContext.Provider>
            </ThemeContext.Provider>
        );

        


    
    })
});