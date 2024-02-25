import { useEffect, useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");


    return (
        
          <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
             {children}
          </ThemeContext.Provider>
          
        )
}


export { ThemeContext, ThemeProvider };