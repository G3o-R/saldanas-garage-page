import React, { useEffect, useRef, useState } from 'react';
import { 
  CarouselContainer, 
  CarouselWrapper, 
  DisplayWrapper, 
  CarouselImage, 
  ImageOverlay, 
  CarouselTextWrapper, 
  CarouselTextContainer, 
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

    startScrolling();

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
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
    <div style={{ position: 'relative', width: '100%' }}>
      <CarouselTextWrapper>
        <CarouselTextContainer>
          <CarouselText>Tints</CarouselText>
          <CarouselText>Wraps</CarouselText>
          <CarouselText>We do it all</CarouselText>
        </CarouselTextContainer>
      </CarouselTextWrapper>
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
            </DisplayWrapper>
          ))}
        </CarouselWrapper>
      </CarouselContainer>
          <ImageOverlay className='image-overlay' />
    </div>
  );
};
