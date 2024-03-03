import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import SelectedBook from "./pages/SelectedBook";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Container } from "react-bootstrap";

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
