/**
 * @fileoverview App.js
 * Main entry point of the application.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import SelectedBook from "./pages/SelectedBook";
//import LoginPage from "./pages/LoginPage";
//import ProtectedRoutes from "./middleware/ProtectedRoutes";
import { ThemeContext } from "./contexts/ThemeContext";


/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * App
 * This component represents the main entry point of the application.
 * It acts as a gateway, as it defines the main routes of the application
 * and allows navigating to them.
 * @returns The following routes:
 * - route to the home page of the application (/)
 * - route to the page that shows the details of the selected book (/book/<asin_of_the_book>)
 * - route to the default page shown when a bad URL is entered (404 - not found)
 */
const App = () => {

  const theme = useContext(ThemeContext).theme

    return (
      <div className= {`App ${theme}`}>
        <BrowserRouter>
          <Routes>
            <Route  exact path = '/' element = {<Homepage /> } />
            {/* <Route  exact path = '/' element = {<LoginPage /> } />
            <Route element = { <ProtectedRoutes />} >
                <Route path = '/home' element = { <Homepage />} />
            </Route> */}
            <Route path = '/book/:asin' element = {<SelectedBook /> } />
            <Route path = '*' element = {<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
