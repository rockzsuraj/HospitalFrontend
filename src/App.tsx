import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  );
}

export default App;
