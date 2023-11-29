import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/home"
import Login from "./Routes/Login/login"
import Pass from "./Routes/ForgorPass/pass"
import Register from "./Routes/Register/register"
import Contact from "./Routes/Contact/contact"
import ProductEnterp from "./Routes/ProductEnterprise/productEnterp"
import Cart from "./Routes/Cart/cart"
import RegisterFood from "./Routes/RegisterFood/registerFood"
import ProductInst from "./Routes/ProductInstitution/productInst";

const AppRoutes = () => {

    return(

        <Router>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/forgotpassword" element={<Pass/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/productenterprise" element={<ProductEnterp/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/registerFood" element={<RegisterFood/>}></Route>
                <Route path="/productInst" element={<ProductInst/>}></Route>
            </Routes>
        </Router>

    )

}

export default AppRoutes;