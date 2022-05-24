import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import logo from "../images/png2.png";
import {
	FaGithub,
	FaFacebook,
	FaLinkedinIn,
	FaTwitter,
	FaInstagram,
	FaEnvelope,
} from "react-icons/fa";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Footer() {
	return (
		<div>
			<footer>
				<div className="footer">
					<div className="logof">
						<img src={logo} alt="logo" />
						{/* <h1>info@vergrobern.com</h1> */}
						<p>
							We brand your enterprise to provide the much needed visibility to
							break-even in the market.
						</p>
						<ul className="socials">
							<li>
								<a href="https://twitter.com/VERGROBERN">
									<FaFacebook />
								</a>
							</li>
							<li>
								<a href="https://github.com/vergrobern">
									<FaGithub />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/vergrobern__core/">
									<FaInstagram />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/VERGROBERN">
									<FaTwitter />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/VERGROBERN">
									{" "}
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-links">
						<h1>Company</h1>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Services</li>
							<li>Products</li>
							<li>Contact</li>
                       {/* <Link to="/"> <li>Home</li> </Link>
                    
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
					</Link> */}
						</ul>
					</div>
					<div className="newslater">
						<h1>Join our mail list</h1>
						<form>
							<input type="email" placeholder="Enter your email" id="mail" />
							<button>Submit</button>
						</form>
						<div>
							<h1>Address</h1>
							<div id="email">
								<FaEnvelope />
								<h1>info@vergrobern.com</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div>Vergrobern © 2022. All Rights Reserved.</div>
					<div>Privacy Policy</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
