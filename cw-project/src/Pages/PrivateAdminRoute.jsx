import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { Navigate } from "react-router-dom";


function PrivateAdminRoute({children}){
    const {isAuth} = useContext(AuthContext)


    if(!isAuth){
        return (
        <Navigate to="/adminlogin"/>)
    }

    if(isAuth){
        return children
    }
}

export default PrivateAdminRoute