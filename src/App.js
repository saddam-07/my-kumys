import React from 'react';
import { BrowserRouter, HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/AboutOurWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/css/Componentscss.css';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
              <Route path="/" element={
                <>
                <Slider />
                <AboutUs/>
                <About/>
                <Contact/>
                <Footer/>
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
