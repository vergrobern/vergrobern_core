import React from "react";
import "./styles.css";
import Header from "./Header";
import web from "../images/website-prototype.png";
import branding from "../images/branding.png";
import business from "../images/business.png";
// import Features from "./Features";

function Services() {
	return (
		<div>
			<div className="header">
				<Header />
				<div className="header-text">
					{/* <h1>
                                At Vegrobern we help you scale up and bring in more sales to your business.
                            </h1> */}
					<h1>Our Services</h1>
					<p>We Offer Variety Of Digital Services.</p>
					{/* <div className="button">
                                <button>Learn More</button>
                            </div> */}
				</div>
			</div>

			{/* <Features /> */}
			<div className="intro2">
				<div className="intro-text">
					<h1>Website Development</h1>
					<p>
						By applying behavioral science to customer experience, using
						professional UI-UX design approach coupled with our seasoned expert
						developers, we deliver award‑winning websites hence designing
						engaging digital products used by millions of people.
						<br /> <br />
						We base on the necessities of your organization concerning the
						general look and feel, vision, UI Layout, and so forth, to ensure
						that your clients' experience will be amazing while yet remaining
						consistent with your business goals and targets.
					</p>
					<div className="button">
						<button>Contact Us</button>
					</div>
				</div>
				<div className="img-image">
					<img src={web} alt="web" />
				</div>
			</div>
			<div className="intro2">
				<div className="img-image">
					<img alt="branding" src={branding} />
				</div>
				<div className="intro-text">
					<h1>Branding</h1>
					<p>
						A brand today is about how it causes your clients to feel. It's not
						a logo, visual identity, or digital product design, but instead, a
						durable framework that ranges across all mediums and touchpoints.
						<br />
						<br />
						We're a branding agency offering a complete solution from naming and
						logo design to communications and style guides.
						<br />
						<br />
						With good branding, you can give your brand a more human side, which
						your customers can relate to more than a company that's strictly all
						business.
					</p>
				</div>
			</div>
			<div className="intro2">
				<div className="intro-text">
					<h1>Business Development</h1>
					<p>
						We at Vergrobern are here to rejuvenate your thoughts hence bringing
						your ideas to life. We start each new business development with an
						in‑depth discovery phase to immerse ourselves in your business.
						<br /> <br />
						We take you through the due processes of putting your business out
						there which spans market Research, branding, business registration,
						digital marketing, etc.
					</p>
				</div>
				<div className="img-image">
					<img src={business} alt="business" />
				</div>
			</div>
		</div>
	);
}

export default Services;
