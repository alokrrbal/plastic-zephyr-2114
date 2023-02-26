import { useState } from "react";

import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

function AuthContextProvider({children}){

    const[isAuth , setIsAuth] = useState(true)

    const login = ()=>{
        setIsAuth(true)
        console.log(isAuth)
        window.location.href='./admin'
        return <Navigate to="/admin" />
    }
    const logout=()=>{
        setIsAuth(false)
    }



    return <AuthContext.Provider value={{isAuth , login ,logout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider