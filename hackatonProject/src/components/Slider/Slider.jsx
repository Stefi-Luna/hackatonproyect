import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImage from 'components/CarouselImage';
import { nextSlide, prevSlide } from 'store/slidesSlice';

function ControlledCarousel() {
  const slides = useSelector((state) => state.slides.slides);
  const slideIndex = useSelector((state) => state.slides.slideIndex);
  const dispatch = useDispatch();

  const handleSelect = (selectedIndex) => {
    if (selectedIndex > slideIndex) {
      dispatch(nextSlide());
    } else if (selectedIndex < slideIndex) {
      dispatch(prevSlide());
    }
  };

  return (
    <Carousel activeIndex={slideIndex} onSelect={handleSelect}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <CarouselImage text={slide.title} imageUrl={slide.imageUrl} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;