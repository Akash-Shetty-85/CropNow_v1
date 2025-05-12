import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import microsoft from '@/assets/microsoft.png';
import azure from '@/assets/azure.png';
import nvidia from '@/assets/nvidia.png';
import openai from '@/assets/openai.png';
import autodesk from '@/assets/autodesk.png';

const logos = [
  { name: "Microsoft", src: microsoft },
  { name: "Autodesk", src: autodesk },
  { name: "Azure", src: azure},
  { name: "OpenAI", src: openai},
];


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <h4 className="carousel-heading">POWERED BY GLOBAL TECH</h4>
      <div className="carousel-content">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div className="carousel-slide" key={logo.name}>
              <img src={logo.src} alt={logo.name} className="carousel-logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
