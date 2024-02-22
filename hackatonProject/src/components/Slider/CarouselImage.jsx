import React from 'react';
import { Image } from 'react-bootstrap';

function CarouselImage({ text, imageUrl }) {
  return (
    <Image src={imageUrl} alt={text} fluid />
  );
}

export default CarouselImage;