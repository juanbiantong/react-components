import React from "react";
import "./style.css";
function Header(){
    return(

    <div className="head">
        <div className="logo">
            <a href="/">TANNIA CAFE</a>
        </div>
        <div className="menu">
            <ul>
                <li className="active">
                    <a href="/">Menu</a> 
                </li>
                <li>
                    <a href="/">Menu</a> 
                </li>
                <li>
                    <a href="/">Menu</a> 
                </li>
                <li>
                    <a href="/">Menu</a> 
                </li>
            </ul>
        </div>
    </div>
    )
};

export default Header;