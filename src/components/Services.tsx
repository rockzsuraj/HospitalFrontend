import React from 'react';

const Services = () => {
  const services = [
    { title: 'Emergency Services', description: '24/7 emergency care for critical situations.' },
    { title: 'Surgical Procedures', description: 'Modern surgical techniques with precision.' },
    { title: 'Diagnostic Imaging', description: 'Advanced imaging for accurate diagnosis.' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
