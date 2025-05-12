import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import microsoft from '@/assets/microsoft.png';
import azure from '@/assets/azure.png';
import nvidia from '@/assets/nvidia.png';
import openai from '@/assets/openai.png';
import autodesk from '@/assets/autodesk.png';

const logos = [
  { name: "Microsoft", src: microsoft },
  { name: "Autodesk", src: autodesk },
  { name: "Azure", src: azure },
  { name: "OpenAI", src: openai },
  { name: "NVIDIA", src: nvidia },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center bg-black/90 text-white text-center font-[inter] !px-4 !py-8">
      <h4 className="text-2xl md:text-3xl tracking-tight uppercase !mb-5 !px-6 !py-2">
        Powered By Global Tech
      </h4>
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex justify-center items-center h-fit "
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 w-fit object-contain "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
