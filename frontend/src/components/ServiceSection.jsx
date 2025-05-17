import React from 'react';
import ServicesCards from './ServicesCards';
import './Servicesection.css'; 

const ServicesSection = () => {
  return (
    <section className="services-container">
      <h2 className="services-heading">Services</h2>
      <div className="services-wrapper">
        <ServicesCards />
        <ServicesCards />
        <ServicesCards />
      </div>
    </section>
  );
};

export default ServicesSection;
