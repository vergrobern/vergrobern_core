import React from "react";
import './styles.css'
import Header from "./Header";
import soon from '../images/coming-soon.gif'

// import Features from "./Features";


function Products() {
    return (
        <div>
            <div className="header">

                <Header />
                 <div className="header-text">
                            {/* <h1>
                                At Vegrobern we help you scale up and bring in more sales to your business.
                            </h1> */}
                            <h1>Products</h1>
                            <p>
                               
                            </p>
                            {/* <div className="button">
                                <button>Learn More</button>
                            </div> */}
                        </div>
                       
            </div>
            
           <div className="coming-soon">
               {/* <h1>Coming Soon!</h1> */}
               <img src={soon} alt="Coming-Soon"/>
           </div>
                            
        </div>
    )
}

export default Products