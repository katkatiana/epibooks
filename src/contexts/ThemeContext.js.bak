import { useEffect, useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
      console.log("hello")
      setTheme(theme === "light" ? "dark" : "light")
   };


    return (
        
          <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
             {children}
          </ThemeContext.Provider>
          
        )
}


export { ThemeContext, ThemeProvider };