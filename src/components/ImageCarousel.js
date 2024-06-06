import React, { useState, useEffect } from 'react';
import { CarouselContainer, CarouselWrapper, DisplayWrapper, CarouselImage, ImageOverlay, CarouselText, ArrowButton } from '../styles/ImageCarouselStyles';

export default function ImageCarousel({ carouselContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((currentIndex + 1) % carouselContent.length);
  }

  function previous() {
    setCurrentIndex((currentIndex - 1 + carouselContent.length) % carouselContent.length);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => { next(); }, 3000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <CarouselContainer>
      <ArrowButton direction="left" onClick={() => previous()}>‹</ArrowButton>
      <CarouselWrapper currentIndex={currentIndex}>
        {carouselContent.map((content, index) => (
          <DisplayWrapper key={index}>
            <CarouselImage
             src={content.image} 
             alt={`carousel-${index}`} 
             className={currentIndex === index ? "active" : "inactive"}/>
            <ImageOverlay />
            <CarouselText>{content.text}</CarouselText>
          </DisplayWrapper>
        ))}
      </CarouselWrapper>
      <ArrowButton direction="right" onClick={() => next()}>›</ArrowButton>
    </CarouselContainer>
  );
};
