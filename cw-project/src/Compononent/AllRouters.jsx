import React from "react";
import {Routes , Route} from "react-router-dom"
import Home from "../Pages/Home";
import Fitness from "../Pages/Fitness";
import Care from "../Pages/Care";
import Store from "../Pages/Store";
import Mind from "../Pages/Mind";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Admin from "../Pages/Admin";
import PrivateAdminRoute from "../Pages/PrivateAdminRoute";
import { AdminLogin } from "../Pages/AdminLogin";
const AllRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Fitness" element={<Fitness />}></Route>
                <Route path="/Care" element={<Care/>}></Route>
                <Route path="/Store" element={<Store/>}></Route>
                <Route path="/Mind" element={<Mind/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/adminlogin" element={<AdminLogin/>}></Route>
                <Route path="/admin" element={<PrivateAdminRoute><Admin/></PrivateAdminRoute>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes