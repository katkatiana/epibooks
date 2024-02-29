import React from 'react'
import { Outlet } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const isAuthorised = () => {
    const session = JSON.parse(localStorage.getItem("auth"));

    return session?.token
}

const ProtectedRoutes = () => {

    const isAuth = isAuthorised();

    return(
        isAuth ? <Outlet /> : <LoginPage />
    )
  
}

export default ProtectedRoutes