import React, { useState, useEffect } from 'react';
import { CarouselContainer, CarouselWrapper, CarouselImage, ArrowButton } from '../styles/ImageCarouselStyles';

export default function ImageCarousel ({ carouselContent }){
  // debugger
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex)
  console.log(carouselContent.length)

  // const nextImage = () => {
  //   console.log("in next`")
  //   setCurrentIndex(() => (currentIndex + 1) % carouselContent.length);
  // };

  function next(){
    setCurrentIndex(() => (currentIndex + 1) % carouselContent.length)
  }

  function previous(){
    setCurrentIndex(() => (currentIndex - 1) % carouselContent.length)
  }

  // const prevImage = () => {
  //   console.log("in previous")
  //   setCurrentIndex(() => (currentIndex - 1 + carouselContent.length) % carouselContent.length);
  // };


  // useEffect(() => {
  //   const interval = setInterval(()=>{next()}, 3000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <CarouselContainer>
      <ArrowButton direction="left" onClick={() => previous()}>‹</ArrowButton>
      <CarouselWrapper currentIndex={currentIndex}>
        {carouselContent.map((carouselContent, index) => (
          <CarouselImage src={carouselContent.image} alt={`carousel-${index}`} key={index} />
        ))}
      </CarouselWrapper>
      <ArrowButton direction="right" onClick={() => next()}>›</ArrowButton>
    </CarouselContainer>
  );
};