import React from "react";
import "./styles.css";
import Header from "./Header";
import curly from "../images/curly.png";
import boy from "../images/boy-with-tablet.png";
import relax from "../images/relax.png";
import likes from "../images/services.png";
import headset from "../images/boy-with-headset.png";
import Features from "./Features";

function Home() {
	return (
		<div>
			<div className="landing">
				<Header />
				<div className="header-content">
					<div className="header-text">
						{/* <h1>
                            At Vegrobern we help you scale up and bring in more sales to your business.
                        </h1> */}
						<h1>Scale up, that's what we mean!</h1>
						<p>
							We help you create amazing websites that speak to the true nature
							of what your brand stands for.
						</p>
						<div className="button">
							<button>Learn More</button>
						</div>
					</div>
					<div className="header-img">
						<img alt="header " src={curly} className="curly" />
						<img alt="boy " src={boy} className="boy" />
					</div>
				</div>
			</div>
			<div className="intro">
				<div className="intro-image">
					<img src={headset} alt="headset" />
				</div>
				<div className="intro-text">
					<h1>
						A Creative and Digital <br />
						Agency
					</h1>
					<p>
						At the heart of Vegrobern is providing premium software automation
						that elevates your enterprise to unprecedented heights.
						<br /> <br />
						We brand your enterprise to provide the much needed visibility to
						break-even in the market. Whatever your needs are, we provide you
						technology solutions that help you scale up to achieve more growth
						and sales.
					</p>
					<div className="button">
						<button>Get to know Us!</button>
					</div>
				</div>
			</div>
			<Features />
			<div className="intro">
				<div className="intro-text">
					<h1>
						Give your brand a good <br /> impression
					</h1>
					<p>
						With more than a billion websites on the internet it's going to take
						a lot for your brand to stand out from the crowd.
						<br /> <br />
						With our promising offers and services we tend to give your business
						a seamless approach to growth using the latest technological
						innovations and solutions.
					</p>
					<div className="button">
						<button>Contact Us!</button>
					</div>
				</div>
				<div className="imp-image">
					<img src={likes} alt="links" />
				</div>
			</div>

			<div className="card">
				<div className="cimg">
					<img src={relax} alt="relax" />
				</div>
				<div className="ctext">
					<h1>Relax, make we run am for you one time</h1>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default Home;
