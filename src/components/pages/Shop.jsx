import React from "react";
import "./style.css";

import image1 from "../../assets/images/shop-1.jpg"
import image2 from "../../assets/images/shop-2.jpg"
import image3 from "../../assets/images/shop-3.jpg"

function Shop(){
    return(
        <div className="shop">
            <div className="title-shop">
                <h1>OUR SHOP</h1>
            </div>
            <div className="shop-detail">
                <img src={image1} alt="shop1"/>
            </div>
            <div className="shop-detail">
                <img src={image2} alt="shop2"/>
            </div>
            <div class="shop-detail">
                <img src={image3} alt="shop3"/>
            </div>
        </div>
    )
}


export default Shop;


            
            
            