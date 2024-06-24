import React from 'react';
import { 
  CarouselContainer, 
  CarouselWrapper, 
  DisplayWrapper, 
  CarouselImage, 
  ImageOverlay, 
  CarouselText 
} from '../styles/ImageCarouselStyles';

export default function ImageCarousel({ carouselContent }) {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        {carouselContent.map((content, index) => (
          <DisplayWrapper key={index} className='display-wrapper'>
            <CarouselImage
             src={content.image} 
             alt={`carousel-${index}`} 
             />
            <ImageOverlay className='image-overlay'/>
            {/* <CarouselText>{content.text}</CarouselText> */}
          </DisplayWrapper>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};
