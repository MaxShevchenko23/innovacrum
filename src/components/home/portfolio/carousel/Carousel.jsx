import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";


import "./Carousel.css";

const Carousel = () => {
  let sliderRef = useRef(null);

  const previous = () => {
    sliderRef.current.slickPrev();
    console.log("prev");
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="about-container">
      <Slider ref={sliderRef} {...settings} className="about-slider">
        <div className="slide">
          <NavLink to='edilitalia' className='portfolio-link'>
            <h1 className="project-name">EDILITALIA PROJECT</h1>
          </NavLink>
        </div>
        {/* <div className="slide">
         
        </div>
        <div className="slide">
          
        </div>
        <div className="slide">
          
        </div> */}
      </Slider>

      <div className="portfolio-control-arrows">
        <img src="./arrowPrev.svg" onClick={previous} alt="Previous" />
        <img src="./arrowNext.svg" onClick={next} alt="Next" />{" "}
      </div>
    </div>
  );
};

export default Carousel;
