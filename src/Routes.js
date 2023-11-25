import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/home"
import Login from "./Routes/Login/login"
import Pass from "./Routes/ForgorPass/pass"
import Register from "./Routes/Register/register"
const AppRoutes = () => {

    return(

        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/forgotpassword" element={<Pass/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>

    )

}

export default AppRoutes;