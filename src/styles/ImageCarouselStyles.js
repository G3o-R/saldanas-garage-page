import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow-x: scroll; /* Enable horizontal scrolling */
  overflow-y: hidden;
  white-space: nowrap; /* Prevent line breaks */
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: max-content;
`;

export const DisplayWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: auto;
  max-height: 240px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 240px;
  object-fit: cover;
  animation: ${({ className }) => (className === 'active' ? `${zoomIn} 10s forwards` : 'none')};
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const CarouselText = styled.h1`
  position: absolute;
  font-size: 40px;
  color: #F7F7F7;
  padding-left: 1em;
  z-index: 2;
  margin: 0;

  @media screen and (min-width: 480px){
    font-size: 50px;
  }
`;
