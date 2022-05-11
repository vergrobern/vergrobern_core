import React from 'react';
import Home from './components/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';



function App(props) {

  return(
    <Router>    
      <div>
      
          <Route  path='/' exact  component={<Home/>}>
            <Home />
          </Route>
          
          <Route path='/about' component={<About/>}>
            <About />
          </Route>
          
          <Route path='/services' component={Services}>
          </Route>

          <Route path='/products' component={Products}>
          </Route>

          <Route path='/contact' component={Contact}>
          </Route>


          <Footer />
      </div>
    </Router>
  )
}

export default App