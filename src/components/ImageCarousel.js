import React, { useState, useEffect } from 'react';
import { CarouselContainer, CarouselWrapper, DisplayWrapper, CarouselImage, CarouselText, ArrowButton } from '../styles/ImageCarouselStyles';

export default function ImageCarousel ({ carouselContent }){
  const [currentIndex, setCurrentIndex] = useState(0);

  function next(){
    setCurrentIndex(() => (currentIndex + 1) % carouselContent.length)
  }

  function previous(){
    setCurrentIndex(() => (currentIndex - 1) % carouselContent.length)
  }


  // useEffect(() => {
  //   const interval = setInterval(()=>{next()}, 3000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <CarouselContainer>
      <ArrowButton direction="left" onClick={() => previous()}>‹</ArrowButton>
      <CarouselWrapper currentIndex={currentIndex}>
        {carouselContent.map((carouselContent, index) => (
          <DisplayWrapper>
            <CarouselImage src={carouselContent.image} alt={`carousel-${index}`} key={index} />
            <CarouselText>{carouselContent.text}</CarouselText>
          </DisplayWrapper>
        ))}
      </CarouselWrapper>
      <ArrowButton direction="right" onClick={() => next()}>›</ArrowButton>
    </CarouselContainer>
  );
};