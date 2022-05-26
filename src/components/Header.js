import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../images/png2.png";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function Header() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div>
			<nav className="nav-bar">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="logo" />{" "}
					</Link>
				</div>
				<ul className={["nav", isOpen ? "transform" : "trans"]}>
					<div className="mobile">
						<img src={logo} alt="logo" />
						<MdClose className="close" onClick={() => setIsOpen(!isOpen)} />
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
				<FaBars className="bar" onClick={() => setIsOpen(!isOpen)} />
			</nav>
			<div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
		</div>
	);
}

export default Header;
