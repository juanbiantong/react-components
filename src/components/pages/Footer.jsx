import React from "react";
import "./style.css";

function Footer(){
    return(
        <div className="footer">
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
            <div className="map">
                <h5>FIND US</h5>
                <div className="mapouter">
                <iframe title='Maps'
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(Main%20kuy)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                            frameborder="0" scrolling="no"><a
                                href="https://www.maps.ie/draw-radius-circle-map/">Radius map tool</a></iframe>
                </div>
                <div className="address">
                    <p>Jl. Kemang Raya No.10</p>
                    <p>Jaksel - 17343</p>
                    <p>Indonesia</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;