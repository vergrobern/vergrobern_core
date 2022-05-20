import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../images/png2.png";

function Header() {
	return (
		<div>
			<nav className="nav-bar">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<ul className="nav">
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
			</nav>
		</div>
	);
}

export default Header;
