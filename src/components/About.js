import React from "react";
import "./styles.css";
// import "./restyle.css"
import Header from "./Header";
import likes from "../images/about.png";
import Features from "./Features";

function About() {
	return (
		<div>
			<div className="header">
				<Header />
				<div className="header-text">
					{/* <h1>
                                At Vegrobern we help you scale up and bring in more sales to your business.
                            </h1> */}
					<h1>About Us</h1>
					<p>
						We help you create amazing websites that speak to the true nature of
						what your brand stands for.
					</p>
					{/* <div className="button">
                                <button>Learn More</button>
                            </div> */}
				</div>
			</div>
			<div className="intro">
				<div className="intro-text">
					<h1>Welcome to Vergrobern</h1>
					<p>
						Vergrobern ~ Scale-up, that's what we mean. <br />
						We are a software technology company providing technological driven
						solutions for businesses and corporations.
						<br /> <br />
						At the heart of Vergrobern is providing premium software automation
						that elevates your enterprise to unprecedented heights.
						<br />
						<br />
						We brand your enterprise to provide the much needed visibility to
						break even in the market. Whatever your needs are, we provide you
						technology solutions that help you scale up to achieve more growth
						and sales.
						<br />
						Take a deep breath, relax and let us help you scale your business to
						amazing heights.
						<br />
						<br />
						We are Vegrobern... Scale-up that's what we mean.
					</p>
				</div>
				<div className="img-image about">
					<img src={likes} alt="likes" />
				</div>
			</div>
			<Features />
		</div>
	);
}

export default About;
