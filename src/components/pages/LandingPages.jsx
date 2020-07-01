
import React from "react";
import Header from "../pages/Header.jsx";
import Container from "../pages/Container"
import Offer from "../pages/Offer"
import Shop from "../pages/Shop"
import Footer from "../pages/Footer"

function LandingPages() {
    return (
        <div>
            <Header />
            <Container/>
            <Offer/>
            <Shop/>
            <Footer/>
        </div>
    );
}

export default LandingPages;