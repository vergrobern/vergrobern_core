import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/restyle.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
	
	return (
		<>	
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/products" 	element={<Products />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
			
			<Footer />
		</>
	);
}

export default App;
