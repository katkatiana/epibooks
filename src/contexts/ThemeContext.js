/**
 * @fileoverview ThemeContext.js
 * Defines the context that holds the information about the current
 * application theme and the means needed to toggle it.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/

import { useState, createContext } from "react";

/******** Internal Variables  ***************************************************/

/**
 * Context used to pass down the current theme context
 * to whichever component may need to access it.
 * This is the variable which is actually exported.
 */
const ThemeContext = createContext();

/**
 * String Identifier for the light theme.
 */
const LIGHT_THEME = "light"

/**
 * String Identifier for the dark theme.
 */
const DARK_THEME = "dark"

/******** Component Definition  *************************************************/

/**
 * ThemeProvider
 * Component that is intended to define a context usable by all the other
 * children components. 
 * This context provides all the children elements with information on
 * the current theme, and the functions needed to toggle it if needed.
 * Child components will change their default theme (via classes) based on the context
 * provided by this component.
 * @param {*} children The children elements which are to be contained in ThemeProvider element.
 * @returns If the fetch operation is successfully completed, returns the component instantiation
 * along with the children components.
 */
const ThemeProvider = ({ children }) => {
    /** State representing the current theme.  */
    const [theme, setTheme] = useState(LIGHT_THEME)
    
    /**
     * toggleTheme
     * This function executes the toggling between the dark
     * and light theme, based on the current state.
     * This function will be passed down to child components in
     * order to allow them to toggle the theme when needed.
     * @param None
     * @return None
     */
    const toggleTheme = () => {
      setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
   };

    return (        
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
             {children}
          </ThemeContext.Provider>          
        )
}


export { ThemeContext, ThemeProvider, LIGHT_THEME, DARK_THEME };