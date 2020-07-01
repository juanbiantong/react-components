import React from "react";
import "./style.css";

import image from "../../assets/images/offer-1.jpg"
import image2 from "../../assets/images/offer-2.jpg"
import image3 from "../../assets/images/offer-3.jpg"

function Offer(){
    return(
        <div className="offer">
            <div className="title-offer">
                <h1>WHAT WE OFFER</h1>    
            </div> 
            <div className="service">
                <img src={image} alt="coffee"/>
                <p>COFFEE</p>
            </div>
            <div className="service">
                <img src={image2} alt="coffee"/>
                <p>WORKING SPACE</p>
            </div>
            <div className="service">
                <img src={image3} alt="readingcorner"/>
                <p>READING CORNER</p>
            </div>
        </div>
    )
}

export default Offer;