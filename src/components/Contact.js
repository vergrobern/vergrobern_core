import React from "react";
import './styles.css'
import Header from "./Header";
import {FaGithub, FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram,FaEnvelope, FaPhoneAlt, FaUser, FaCommentAlt} from "react-icons/fa"

// import Features from "./Features";


function Contact() {
    return (
        <div>
            <div className="header">

                <Header />
                 <div className="header-text">
                            {/* <h1>
                                At Vegrobern we help you scale up and bring in more sales to your business.
                            </h1> */}
                            <h1>Contact Us!</h1>
                            <p>
                               Reach out to us, we would love to hear from you.
                            </p>
                            
                 </div>
                       
            </div>

            <div className="contact-session">
                <h2>Let us know how we can help you</h2>
                <p>Providing Digital Services Scalable for the entire globe</p>
                <div className="contact-icons">
                    <div className="box">
                            <FaEnvelope className="icon"/>
                            <div className="icon-box">
                                <h1>Email:</h1>
                                <p>support@vergrobern.com</p>
                            </div>
                    </div>
                     <div className="box">
                            <FaPhoneAlt className="icon"/>
                            <div className="icon-box">
                                <h1>Contact Support</h1>
                                <p>2348-1067-500-47</p>
                            </div>
                    </div>
                    <div className="box c">
                            {/* <FaEnvelope className="icon"/> */}
                            <div className="icon-box">
                                <h1>We are Social</h1>
                                <ul className="socials">
                                    <li>
                                        <a href="#"><FaFacebook /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaGithub /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/vergrobern__core/"><FaInstagram /></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/VERGROBERN"><FaTwitter /></a>
                                    </li>
                                    <li>
                                    <a href="#"> <FaLinkedinIn /></a>
                                    </li>
                                    
                                </ul>
                            </div>
                    </div>
                </div>

                <form className="contact-form">
                    <h1>Get in touch with Us!</h1>
                    <p>Kindly fill the form below and we will get back to you as soon as possible!</p>
                    <div className="inputs">
                        <div>
                            <FaUser className="fa"/>
                            <input type="text" name="fname" id="" placeholder="First Name" required />
                        </div>                    
                        <div>
                            <FaUser className="fa" />
                            <input type="text" name="lname" id="" placeholder="Last Name" required />
                        </div>
                        <div>
                            <FaEnvelope className="fa" />
                            <input type="email" name="email" id="" placeholder="Enter Your Email" required />
                          
                        </div>
                        <div>
                             <FaPhoneAlt className="fa" />
                            <input type="tel" name="tel" id="" placeholder="Enter Phone No." required />
                        </div>
                   </div>
                   <div class="textarea">
                    <FaCommentAlt className="fa"/>
                    <textarea name="message" id="" cols="30" rows="-10" placeholder="Message" required ></textarea>
                   </div>
                   <div class="submit">
                        <button>Send Request</button>
                   </div>
                </form>
            </div>
            
           
        </div>
    )
}

export default Contact