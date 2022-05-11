import React from "react";
import './styles.css'
import web from '../images/web-preview.png'
import brand from '../images/brand.png'
import business from '../images/businessdev.png'

function Features() {
    return (
        <div>
            <div className="features">
                <h1>Explore Our Services</h1>
                <p>Introducing you to the era of seamless & automated administration </p>
                <div className="services">
                    <div className="blocks">
                        <img src={web} alt="web Development" id="web"/>
                        <h1> Website Development</h1>
                    </div>
                    <div className="blocks">
                        <img src={brand} alt="web Development" id="brand" />
                        <h1> Branding</h1>
                    </div>
                    <div className="blocks">
                        <img src={business} alt="web Development"/>
                        <h1> Business Development</h1>
                    </div>
                </div>
                 
            </div>
        </div>
    )
}

export default Features