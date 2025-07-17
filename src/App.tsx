import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Vehicles from './components/Vehicles';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import WhyKerala from './components/WhyKerala';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyKerala />
      <Services />
      <Destinations />
      <Vehicles />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;