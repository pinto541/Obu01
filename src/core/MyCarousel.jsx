import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MyCarousel.css";

import firstImg from "../img/aboutBG.png";
import secImg from "../img/r2.png";
import thirdImg from "../img/hero-image.png";
import fourthImg from "../img/r1.png";

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Start the auto-slide interval
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 4000); // Change slide every 2 seconds

    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slides = [
    { image: firstImg, alt: "Slide 1", legend: "Make A Shopping Spree" },
    { image: secImg, alt: "Slide 2", legend: "Slide 2" },
    { image: fourthImg, alt: "Slide 3", legend: "Slide 3" },
    // { image: thirdImg, alt: "Slide 3", legend: "Slide 3" },
    // Add more slides here
  ];

  return (
    <div className="carousel-container p-2">
      <Carousel
        selectedItem={currentIndex}
        showThumbs={false}
        showStatus={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.alt} />
            <p className="legend">{slide.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
