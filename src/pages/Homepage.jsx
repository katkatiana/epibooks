/**
 * @fileoverview Homepage.jsx
 * This component renders the homepage of the application.
 * @author Mariakatia Santangelo
 * @date   01-03-2024
 */

/******** Import Section  *******************************************************/
import MainLayout from "../layouts/MainLayout";
import Welcome from "../components/Welcome/Welcome"

/******** Internal Variables  ***************************************************/

/******** Component Definition  *************************************************/

/**
 * Homepage
 * This component renders the homepage of the application.
 * @returns the instantiation of the MainLayout component.
 */
const Homepage = () => {


    return (
            <>
            <Welcome/>
            <MainLayout />
            </>
    )
}

export default Homepage;