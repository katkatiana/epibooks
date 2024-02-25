import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BooksProvider } from "./contexts/BookContext";
import { ThemeProvider } from './contexts/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <BooksProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BooksProvider>
  </ThemeProvider>
);
