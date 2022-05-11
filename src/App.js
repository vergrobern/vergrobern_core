import React from 'react';
import Home from './components/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';



function App() {

  return(
    <Router>    
      <div>
      
          <Route  path='/' exact  component={Home} />
     
          
          <Route path='/about' component={About} />

          
          <Route path='/services' component={Services} />


          <Route path='/products' component={Products} />
   

          <Route path='/contact' component={Contact} />


          <Footer />
      </div>
    </Router>
  )
}

export default App