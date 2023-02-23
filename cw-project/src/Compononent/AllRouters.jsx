import React from "react";
import {Routes , Route} from "react-router-dom"
import Home from "../Pages/Home";
import Fitness from "../Pages/Fitness";
import Care from "../Pages/Care";
import Store from "../Pages/Store";
import Mind from "../Pages/Mind";
const AllRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Fitness" element={<Fitness />}></Route>
                <Route path="/Care" element={<Care/>}></Route>
                <Route path="/Store" element={<Store/>}></Route>
                <Route path="/Mind" element={<Mind/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes