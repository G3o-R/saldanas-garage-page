import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  margin: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  cursor: grab;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: max-content;
  height:100%;
`;

export const DisplayWrapper = styled.div`
  display: inline-block;
  position: relative;
  aspect-ratio:5/3;
  width: 100%;
  height: auto;
  max-height: 240px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 240px;
  object-fit: cover;
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
