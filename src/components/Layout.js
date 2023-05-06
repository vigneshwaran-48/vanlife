import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

let Layout = () => {
    return (
        <div className="layout y-axis-flex">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;