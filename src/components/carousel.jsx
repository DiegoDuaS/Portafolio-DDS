import React from 'react';
import Slider from 'react-slick';
import './carousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const handleClick = () => {
    
  }

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div className='slide-container' key={index}>
          <a href={slide.link} target="_blank" rel="noopener noreferrer" className='slide-container' key={index}>
            <img src={slide.image} alt={slide.title} className='slide-image' />
          </a>  
          <div className='info-container'>
            <h2 className='proyect-title'>{slide.title}</h2>
            <p className='proyect-des'>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
