import React, { useEffect, useRef, useState } from 'react';
import { 
  CarouselContainer, 
  CarouselWrapper, 
  DisplayWrapper, 
  CarouselImage, 
  ImageOverlay, 
  CarouselText 
} from '../styles/ImageCarouselStyles';

export default function ImageCarousel({ carouselContent }) {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const content = contentRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isDragging && scrollContainer) {
          if (scrollContainer.scrollLeft >= content.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        }
      }, 10);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    scrollContainer.addEventListener("touchstart", stopScrolling);
    scrollContainer.addEventListener("touchend", startScrolling);

    startScrolling();

    return () => {
      stopScrolling();
      scrollContainer.removeEventListener("touchstart", stopScrolling);
      scrollContainer.removeEventListener("touchend", startScrolling);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <CarouselContainer 
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CarouselWrapper ref={contentRef}>
        {carouselContent.concat(carouselContent).map((content, index) => (
          <DisplayWrapper key={index} className='display-wrapper'>
            <CarouselImage src={content.image} alt={`carousel-${index}`} />
            <ImageOverlay className='image-overlay' />
          </DisplayWrapper>
        ))}
      </CarouselWrapper>
      {/* <CarouselText>testing</CarouselText> */}
    </CarouselContainer>
  );
};
