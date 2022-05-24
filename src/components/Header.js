import React from "react";
import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../images/png2.png'
import { MdClose } from "react-icons/md"
import {FaBars} from "react-icons/fa"




function Header(){
    const overlay = document.querySelector('.overlay')
    const menu = document.querySelector('.nav')

    const bar = () => {
        menu.classList.replace('trans', 'transform');
        overlay.style.display = "block";
        overlay.style.opacity = "1";
        // alert("I was clicked")
    }
    
    const close = () => {
        // alert("Side Menu Closed")
        menu.classList.replace('transform', 'trans');
        overlay.style.display = "none";
        overlay.style.display = "0";
    }

   
	 const over = () => {
        //  alert("Side Menu Closed")
        menu.classList.replace('transform', 'trans');
        overlay.style.display = "none"
        overlay.style.display = "0"
    }
   
    return (
        <div>
            <nav className="nav-bar">
                <div className="logo">
                    <Link to="/"><img src={logo} /> </Link>
                </div>
                <ul className="nav trans">
                    <div className="mobile">
                        <img src={logo} />
                        <MdClose className="close" onClick={close}/>
                    </div>
                   <li>
                       <Link to="/">Home </Link>
                    </li>
                    
                    <Link to="/about">
						<li>About</li>{" "}
					</Link>
					<Link to="/services">
						<li>Services</li>{" "}
					</Link>
					<Link to="/products">
						<li>Products</li>
					</Link>
					<Link to="/contact">
						<li>Contact</li>
					</Link>
                </ul>
                <FaBars className="bar" onClick={  bar}/>
            </nav>
			<div className="overlay" onClick={over}></div>
        </div>
    )
}

export default Header;
