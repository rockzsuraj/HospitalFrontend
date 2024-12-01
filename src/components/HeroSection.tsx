import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-100 text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to HealthCare Hospital</h2>
        <p className="text-lg mb-6">Providing world-class healthcare services with care and compassion.</p>
        <a href="#services" className="bg-blue-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-700">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
