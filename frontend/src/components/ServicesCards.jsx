import React from 'react';
import './ServicesCards.css'
import Vector  from '../assets/Vector.png';   
import Right from '../assets/Right.png'; 
import Irrigation from '../assets/Irrigation.png'

const ServicesCards = () => {
  return (
    <div className="service-card">
      <img src={Vector} alt="Farm Icon" className="vector-icon" />
      <img src={Irrigation} alt="irrigation icon" className="irrigation-img" />
      <p className="service-title">CropNow Farm Survey</p>
      <img src={Right} alt="Arrow Icon" className="arrow-icon" />
    </div>
  );
};

export default ServicesCards;
