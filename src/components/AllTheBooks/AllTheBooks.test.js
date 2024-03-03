import React from "react";
import { screen, render } from '@testing-library/react';
import AllTheBooks from "./AllTheBooks";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BookContext } from "../../contexts/BookContext";
import { MemoryRouter } from 'react-router-dom';



// Mock list of books as you might have from your JSON file
const mockBooks = [
    { asin: '123', title: 'Book 1', price: '10.0', img: 'path/to/img1.jpg', category: "fantasy" },
    { asin: '456', title: 'Book 2', price: '15.0', img: 'path/to/img2.jpg', category: "horror" },
  ];

  const mockTheme = "light"
  const mockToggle = () => {
    
  }
  const mockSet = () => {
    
  }
  
  describe('CardElement Component', () => {
        test('renders the correct number of cards based on the books data', () => {
        render(
                <ThemeContext.Provider value = {{mockTheme, mockToggle, mockSet}}>
                    <MemoryRouter>
                        <BookContext.Provider value={mockBooks}>
                            <AllTheBooks booksCopy = {mockBooks} />
                        </BookContext.Provider>
                    </MemoryRouter>
                </ThemeContext.Provider>
        );
    
        mockBooks.forEach(book => {
            // Check if title, price of each book are rendered
            expect(screen.getByText(book.title)).toBeInTheDocument();
            expect(screen.getByText(book.price + " $")).toBeInTheDocument();
        });
    
        
        })
    });